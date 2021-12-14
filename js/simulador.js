function simulador() {
	let cantidadentradas = parseInt(prompt("Cantidad de entradas"));
	let montoFinal = 0;
	// let precioEntrada1 = 500;

	//precio x unidad

	function calculo(cantidad, precio) {
		while (isNaN(cantidadentradas) && cantidadentradas > 0) {
			alert("El valor ingresado no es correcto");
			cantidadentradas = parseInt(prompt("Cantidad de entradas"));
		}
		montoFinal = cantidad * precio;
		alert("Total a pagar $ " + montoFinal);
	}

	////STOCK

	const evento1 = {
		codigo: "LP08",
		nombre: "Luciano Pereyra",
		fecha: "08/12/2021",
		entradas: new Entradas(500, 800),
	};

	if (
		!isNaN(cantidadentradas) &&
		evento1.entradas.stock > 0 &&
		cantidadentradas <= evento1.entradas.stock
	) {
		calculo(cantidadentradas, evento1.entradas.precio);
		evento1.entradas.venta(cantidadentradas);
		alert("Entradas disponibles " + evento1.entradas.stock);
	} else {
		alert("No hay entradas disponibles");
	}

	function Entradas(precio, stock) {
		this.precio = precio;
		this.moneda = "Pesos Argentinos";
		this.stock = stock;
		this.venta = (cantidadVendida) => {
			this.stock = this.stock - cantidadVendida;
			// alert("Entradas disponibles " + evento1.entradas.stock);
		};
	}
	console.log(evento1);

	// let stock = 500;

	// function disponible(instock, vendido ) {
	//     return instock - vendido;

	// }

	// let ticketdispo = disponible(stock, cantidadentradas);
	//     stock = ticketdispo;

	// if (stock === 0) {
	//     alert("No hay entradas diponibles")
	// } else {
	//     alert("Entradas Disponibles: " + stock + " unidades")
	//     console.log(stock)
	// }

	////FORMULARIO

	function formulario() {
		let nombre = prompt("Ingresa tu nombre completo.");
		while (!isNaN(nombre)) {
			alert("Nombre no Valido");
			nombre = prompt("Ingresa tu nombre completo.");
		}
		let telefono = parseInt(prompt("Ingresa tu telefono."));
		while (isNaN(telefono)) {
			alert("Numero no Valido");
			nombre = prompt("Ingresa tu telefono.");
		}
		let email = prompt("Ingresa tu E-mail");
		let comentario = prompt("Ingresa tu comentario");
		alert(
			"Datos de contacto:\n" +
				nombre +
				"\n" +
				telefono +
				"\n" +
				email +
				"\n" +
				comentario
		);
	}

	let infoEventos = prompt(
		"¿Quieres estar al tanto de nuestros proximos eventos? Ingresa SI o NO segun corresponda."
	);

	infoEventos = infoEventos.toLowerCase();
	console.log(infoEventos);

	if (infoEventos === "si") {
		formulario();
		alert("Muchas gracias por tu compra!");
	} else {
		alert("Muchas gracias por tu compra!");
	}
}

simulador();
