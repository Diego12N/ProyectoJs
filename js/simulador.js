let cantidadentradas = parseInt(prompt("Cantidad de entradas"));
let montoFinal = 0;
let precioEntrada1 = 500;

//precio x unidad

function calculo(cantidad, precio) { 
    montoFinal = cantidad * precio;
    alert("Total a pagar $ " + montoFinal);
}

let cantidadConvertida = Number(cantidadentradas)

if (!isNaN(cantidadConvertida) && cantidadConvertida !== 0) {
    calculo(cantidadConvertida, precioEntrada1)
}else {
    alert("La cantidad ingresada no es correcta")
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
}

////FORMULARIO

 function formulario() {
    let nombre = prompt("Ingresa tu nombre completo");   
    let telefono = prompt("Ingresa tu telefono");
    let email = prompt("Ingresa tu E-mail");        
    let comentario = prompt("Ingresa tu comentario")
    alert("Datos de contacto:\n" + nombre + "\n" + telefono + "\n" + email + "\n" + comentario);
}




