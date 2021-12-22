function addToCart(name, price, value, error) {
	if (value != "" && !isNaN(Number(value))) {
		let totalAPagar = price * value;

		container.append(`
			<h2 id="compra-name">${name}</h2>
			<p>Cantidad de Entradas</p>
			<p id="compra-unit">${value}</p>
			<h3>Total</h3>
			<p id="compra-price">$${totalAPagar}</p>
			<button id="btn-comprar">COMPRAR</button>
			<button id="btn-eliminar">ELIMINAR</button>
		
		`);
	} else {
		$(error).fadeIn("slow", function () {
			$(error).fadeOut(1500);
		});
	}

	$("#btn-eliminar").on("click", () => {
		container.html("");
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
