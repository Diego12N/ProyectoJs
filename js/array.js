class Entrada {
	constructor(idZona, nombreZona, precio, stock) {
		this.idZona = idZona;
		this.nombreZona = nombreZona;
		this.precio = precio;
		this.stock = stock;
	}
	venta(cantidad) {
		if (cantidad >= this.stock) {
			this.stock -= cantidad;
		}
	}
}

let listaDeEventos = [
	{
		id: 1,
		nombre: "LUCIANO PEREYRA",
		fechaInicio: "08/02/2022",
		horario: "19:45hs",
		imagen: "./img/Lpereyra1.jpg",
		imagen2: "./img/lucianoPereyra2.jpg",
		entradas: [
			new Entrada(1, "Tribunas laterales", 800, 2500),
			new Entrada(2, "Tribunas central", 1200, 1000),
			new Entrada(3, "Campo", 1800, 2000),
			new Entrada(4, "Palco", 2500, 600),
		],
	},
	{
		id: 2,
		nombre: "ABEL PINTOS",
		fechaInicio: "16/02/2022",
		horario: "20:30hs",
		imagen: "./img/AbelPintos1.jpg",
		imagen2: "./img/abel2.jpg",
		entradas: [
			new Entrada(1, "Tribunas laterales", 850, 0),
			new Entrada(2, "Tribunas central", 1500, 0),
			new Entrada(3, "Campo", 2200, 0),
			new Entrada(4, "Palco", 3150, 0),
		],
	},
	{
		id: 3,
		nombre: "PAULO LONDRA",
		fechaInicio: "28/02/2022",
		horario: "21:15hs",
		imagen: "./img/Plondra1.jpg",
		imagen2: "./img/pauloLondra2.jpg",
		entradas: [
			new Entrada(1, "Tribunas laterales", 1100, 2500),
			new Entrada(2, "Tribunas central", 1900, 1000),
			new Entrada(3, "Campo", 2600, 2000),
			new Entrada(4, "Palco", 3400, 600),
		],
	},
];

guardarEventosLocalStorage(listaDeEventos);

//DOM
let contenidoDeEventos = $("#section-item");
let windowLocation;

$(document).ready(() => {
	mostrarEventos();
});

function mostrarEventos() {
	listaDeEventos.forEach((evento) => {
		contenidoDeEventos.append(
			`
      <div class="evento-container">
        <div class="img-container">
          <img src="${evento.imagen}" alt="${evento.nombre}" class="img-item" />
        </div>  
        <h2 class="titulo-evento">${evento.nombre}</h2>
        <h3 class="fecha-evento">${evento.fechaInicio} | ${evento.horario}</h3>
        <a id="first-btn${evento.id}" class="first-btn"></a>
    </div>
      `
		);

		$(`#first-btn${evento.id}`).click(() => {
			if (!validarStock(evento.entradas)) return;
			window.location.href = `compras.html?id=${evento.id}`;
			localStorage.clear();
			obtenerDetalleEvento(evento.id);
		});

		if (validarStock(evento.entradas)) {
			$(`#first-btn${evento.id}`).html("VER ENTRADAS");
		} else {
			$(`#first-btn${evento.id}`).html("SIN STOCK");
			$(`#first-btn${evento.id}`).css(
				"background",
				"linear-gradient(to bottom, #a80f71 80%, #880c5a)"
			);
		}
	});
}

function obtenerDetalleEvento(id) {
	const eventoEntrada = listaDeEventos.find((evento) => {
		return evento.id === id;
	});
}

function guardarEventosLocalStorage(eventos) {
	const eventosStr = JSON.stringify(eventos);
	localStorage.setItem("eventos", eventosStr);
}

function validarStock(entradas) {
	let hayStock = false;
	for (const entrada of entradas) {
		if (entrada.stock > 0) hayStock = true;
	}
	return hayStock;
}
