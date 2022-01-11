let totalAPagar = 0;
let buyArray = [];
const etiquetaTotal = $("#total-cell");
const buyContainer = $("#compra-confirm__container");
const tableBody = $("#table-body");
let listaDeEntradaSeleccionada = [];

$(document).ready(() => {
	let getLocalStorageElement = JSON.parse(localStorage.getItem("section"));

	if (getLocalStorageElement != null) {
		/* listaDeEntradaSeleccionada = getLocalStorageElement; */
		getLocalStorageElement.forEach((element) => {
			addtoCart(element.id, element.name, element.amount, element.price);
		});
	}
});

function selectEvent(ubicaciones, value, error) {
	let idEntrada = ubicaciones.idZona;
	let ubicacionEntrada = ubicaciones.nombreZona;
	let valorUnitarioEntrada = ubicaciones.precio;
	let cantidadEntradas = Number(value);
	let precioEntradas = valorUnitarioEntrada * cantidadEntradas;

	if (
		cantidadEntradas != "" &&
		!isNaN(Number(cantidadEntradas)) &&
		cantidadEntradas != 0
	) {
		container.append(`
		<div id="compra-check__content">
			<div id="compra-check__info"> 
				<p id="compra-unit" class="compra-item">${cantidadEntradas} Entradas</p>
				<p id="compra-name" class="compra-item">${ubicacionEntrada}</p>		
				<p id="compra-price" class="compra-item">Total $${precioEntradas}</p>			
			</div>
			<div id="btn-check__container">
				<button id="btn-eliminar" class="btn-check__style">ELIMINAR</button>
				<button id="btn-continuar" class="btn-check__style">CONTIUAR</button>
			</div>
		</div>	
		
		`);
	} else {
		$(error).fadeIn("slow", function () {
			$(error).fadeOut(1500);
		});
	}

	$("#btn-continuar").on("click", () => {
		container.html("");
	});

	$("#btn-eliminar").on("click", () => {
		container.html("");
	});

	const btnContinuar = $("#btn-continuar");

	btnContinuar.on("click", () => {
		if (verificarSiExisteEntrada(idEntrada)) {
			alert("Ya tienes una compra en curso");
			return;
		}

		addtoCart(idEntrada, ubicacionEntrada, cantidadEntradas, precioEntradas);
		addObjectToLocalStorage(
			idEntrada,
			ubicacionEntrada,
			cantidadEntradas,
			precioEntradas
		);
	});
}

function verificarSiExisteEntrada(id) {
	const entrada = listaDeEntradaSeleccionada.find((el) => el.id === id);
	return entrada ? true : false;
}

function addtoCart(id, name, amount, price) {
	listaDeEntradaSeleccionada.push(new BuyObject(id, name, amount, price));
	tableBody.append(
		`<div id="table-section__item-${id}" class="table-body__section">
				<div id="table-location${id}" class="table-cell">
					<p>${name}</p>
				</div>
				<div id="table-unit-${id}" class="table-cell"><p>${amount} entradas</p></div>
				<div id="table-price-${id}" class="table-cell"><p>$ ${price}</p></div>
				<div id="btn-remove-${id}" class="btn-remove"><i class="fas fa-times-circle icon-position"></i></div>
			</div>`
	);

	totalAPagar += price;

	showCardSelection();

	/* removeAllCart($("#table-body")); */

	removeSectionCart($(`#btn-remove-${id}`), price, id);
}

function addObjectToLocalStorage(id, name, amount, price) {
	let buyObject = new BuyObject(id, name, amount, price);
	buyArray.push(buyObject);

	let setItem = JSON.stringify(buyArray);
	localStorage.setItem("section", setItem);
}

function showCardSelection() {
	etiquetaTotal.html(`$ ${totalAPagar}`);
	buyContainer.css("display", "flex");
}

function removeSectionCart(section, price, id) {
	section.on("click", (e) => {
		e.target.parentNode.parentNode.remove();
		totalAPagar -= price;
		etiquetaTotal.html(`$ ${totalAPagar}`);

		if (totalAPagar === 0) {
			buyContainer.css("display", "none");
		}

		let arrayStorage = JSON.parse(localStorage.getItem("section"));

		arrayStorage = arrayStorage.filter(function (elemento) {
			return elemento.id != id;
		});

		listaDeEntradaSeleccionada = [...arrayStorage];
		arrayStorage = JSON.stringify(arrayStorage);
		localStorage.setItem("section", arrayStorage);
	});
}

function hideForm(id, stock) {
	if (stock <= 0) {
		$(`#sector-item__container-${id}`).addClass("item-display-none");
		$(`#item-stock-${id}`).addClass("stock-message");
	}
}

function showMessage() {
	container.prepend(
		`<span id="selection-error">Ya tienes una compra en curso</span>`
	);
	$("#selection-error").fadeIn("slow", function () {
		$("#selection-error").fadeOut(3000);
	});
}
