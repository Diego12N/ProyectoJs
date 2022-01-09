let userName;
let userMail;
let compras;
const btnBuy = $("#btn-buy");
const btnCloseModal = $("#modal__btn");
const modalContainer = $(".modal");
const modalContentTittle = $("#modal__content-tittle");
let modalContent = $("#modal__content");
let tableForm = $("#table-form");
const inputs = $("#table-form input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/,
};

const campos = {
	name: false,
	mail: false,
	number: false,
};

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "fullName":
			validarCampo(expresiones.nombre, e.target, "name");
			break;
		case "email":
			validarCampo(expresiones.correo, e.target, "mail");
			break;
		case "phoneNumber":
			validarCampo(expresiones.telefono, e.target, "number");
			break;
	}
};

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		$(`#user-${campo}`).addClass("campo-valido");
		$(`#user-${campo}`).removeClass("campo-invalido");
		$(`#input-${campo}_error`).removeClass("mostrar-error");
		campos[campo] = true;
	} else {
		$(`#user-${campo}`).addClass("campo-invalido");
		$(`#user-${campo}`).removeClass("campo-valido");
		$(`#input-${campo}_error`).addClass("mostrar-error");
		campos[campo] = false;
	}
};

for (const input of inputs) {
	$(input).on("keyup", validarFormulario);
	$(input).on("blur", validarFormulario);
}

$("#btn-buy").on("click", () => {
	showBuyDetails();
	actualizarStockEntradas();
});

btnCloseModal.on("click", () => {
	modalContainer.removeClass("modal-show");
	listaDeEntradaSeleccionada = [];
	modalContent = "";
	totalAPagar = 0;
	buyContainer.css("display", "none");
	localStorage.removeItem("section");
	tableBody.html("");
	$("#table-form").get(0).reset();
	limpiarMensajesDeError();
	$(".input-form").removeClass("campo-valido");
});

function showBuyDetails() {
	let nombre = $("#user-name").val();
	let correo = $("#user-mail").val();
	let telefono = $("#user-number").val();

	if (campos.name && campos.mail && campos.number) {
		$("#modal-user__name").html(`${nombre}`);
		$("#modal-user__email").html(`${correo}`);
		$("#modal-user__phoneNumber").html(
			`Te estaremos notificando de las <br /> novedades del evento al ${telefono}.`
		);
		modalContainer.addClass("modal-show");
	} else {
		$("#table-form__error").fadeIn("slow", function () {
			$("#table-form__error").fadeOut(3000);
		});
	}
}

function limpiarMensajesDeError() {
	$(`#user-name`).removeClass("campo-invalido");
	$(`#input-name_error`).removeClass("mostrar-error");
	$(`#user-mail`).removeClass("campo-invalido");
	$(`#input-mail_error`).removeClass("mostrar-error");
	$(`#user-number`).removeClass("campo-invalido");
	$(`#input-number_error`).removeClass("mostrar-error");
}

function showContentModal() {
	for (const compra of compras) {
		modalContent.append(`
		<p>${compra.amount} entradas.</p>
		<p>Sector: ${compra.name}.</p>
		`);
	}
}

function actualizarStockEntradas() {
	let getLocalStorageEventos = JSON.parse(localStorage.getItem("eventos"));

	getLocalStorageEventos.forEach((evento) => {
		if (idEvento === String(evento.id)) {
			for (const entrada of evento.entradas) {
				const entradaEncontrada = listaDeEntradaSeleccionada.find(
					(el) => el.id === entrada.idZona
				);

				if (entradaEncontrada) {
					entrada.stock -= entradaEncontrada.amount;
				}
			}
		}
	});

	let setItem = JSON.stringify(getLocalStorageEventos);
	localStorage.setItem("eventos", setItem);
}
