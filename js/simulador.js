let cantidadentradas = parseInt(prompt("Cantidad de entradas")) ;
let montoFinal = 0;
let precioEntrada1 = 500;

//precio x unidad

function calculo(cantidad, precio) { 
    montoFinal = cantidad * precio;
    alert("Total a pagar $ " + montoFinal);
}

while(isNaN(cantidadentradas)) {
    alert("El valor ingresado no es correcto")
    cantidadentradas = parseInt(prompt("Cantidad de entradas")) ;
}

if (!isNaN(cantidadentradas) && cantidadentradas !== 0) {
    calculo(cantidadentradas, precioEntrada1)
}
////STOCK

let stock = 500;

function disponible(instock, vendido ) {
     return instock - vendido;
     
}

let ticketdispo = disponible(stock, cantidadentradas);
          stock = ticketdispo;

if (stock === 0) {
    alert("No hay entradas diponibles")   
} else {
    alert("Entradas Disponibles: " + stock + " unidades")
    console.log(stock)
}

////FORMULARIO

 function formulario() {
    let nombre = prompt("Ingresa tu nombre completo.");
    while(!(isNaN(nombre))) {
        alert("Nombre no Valido");
        nombre = prompt("Ingresa tu nombre completo.");
    }   
    let telefono = parseInt(prompt("Ingresa tu telefono."));
    while(isNaN(telefono)) {
        alert("Numero no Valido");
        nombre = prompt("Ingresa tu telefono.");
    }   
    let email = prompt("Ingresa tu E-mail");        
    let comentario = prompt("Ingresa tu comentario")
    alert("Datos de contacto:\n" + nombre + "\n" + telefono + "\n" + email + "\n" + comentario);
}

let infoEventos = prompt("¿Quieres estar al tanto de nuestros proximos eventos? Ingresa SI o NO segun corresponda.")

if ((infoEventos === "SI") || (infoEventos === "si") || (infoEventos === "Si") ) {
    formulario()
    alert("Muchas gracias por tu compra!")
} else {
    alert("Muchas gracias por tu compra!")
}




