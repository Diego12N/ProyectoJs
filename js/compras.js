const container = $("#compra-pay__container");

let eventoSeleccionado = null;
let stockEventos = [];
let entradas;
let contenedorDeCompra;

$(document).ready(() => {
	cargarEvento();
});

function cargarEvento() {
	let paramsString = location.search;
	let searchParams = new URLSearchParams(paramsString);
	let idEvento = searchParams.get("id");
	if (!idEvento) return (window.location.href = "index.html");
	obtenerEventoPorId(idEvento);
}

async function getJSONEntradas() {
	await $.getJSON("../data/entradas.json", function (data) {
		stockEventos = [...data];
	});
	return stockEventos;
}

async function obtenerEventoPorId(id) {
	let eventos = await getJSONEntradas();
	const eventoEntrada = eventos.find((evento) => {
		return String(evento.id) === id;
	});

	if (eventoEntrada) cargarDetalleEvento(eventoEntrada);
}

function cargarDetalleEvento(evento) {
	const contenedorPrincipal = $("#compra-info__container");
	const contenedorSecundario = $("#info-container");
	contenedorPrincipal.innerHTML = "";

	contenedorPrincipal.prepend(`
      <div id="img-container">
			  <img src="${evento.imagen2}" alt="" id="img-item" />
		  </div>
  `);
	contenedorSecundario.append(`
      <div id="tittle__container">
        <h2 id="tittle-item">${evento.nombre}</h2>
        <p id="tittle-info__item">${evento.fechaInicio} | ${evento.horario}</p>
      </div>    
  `);

	for (const ubicaciones of evento.entradas) {
		let id = `${ubicaciones.idZona}`;
		contenedorSecundario.append(`
          <div id="sector__container">
          <div class="sector-item">
            <div class="sector-item__container">
              <h3 class="item-name">${ubicaciones.nombreZona}</h3>
              <p class="item-units">Disponibles: ${ubicaciones.stock}u</p>
              <p class="item-price">$${ubicaciones.precio}</p>
            </div>
            <form onsubmit="event.preventDefault()" class="sector-input__container">
              <p id="item-stock-${id}" class="stock-display" >NO HAY DISPONIBLES.</p>
			  <div id="sector-item__container-${id}">
              	<label for="cantidad">Cantidad:</label>
              	<input class="item-selection-${id} item-selection" type="text" />
              	<button class="item-button-${id} item-button">
                	Agregar
              	</button>
			  </div>
              <p class="item-error-${id} item-selection-error">Valor ingresado incorrecto.</p>
            </form>
          </div>
        </div>
    	`);
		$($(`.item-button-${id}`)).on("click", () => {
			contenedorDeCompra = $("#compra-pay__container").children();
			if (contenedorDeCompra.length <= 0) {
				addToCart(
					`${ubicaciones.nombreZona}`,
					`${ubicaciones.precio}`,
					$(`.item-selection-${id}`).val(),
					$(`.item-error-${id}`)
				);
			} else {
				showMessage();
			}
			$(`.item-selection-${id}`).val("");
		});

		hideForm(id, `${ubicaciones.stock}`);
	}
}
