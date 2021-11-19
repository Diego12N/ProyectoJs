class Entrada {
    constructor(idZona, nombreZona, precio, stock) {
      this.idZona = idZona;
      this.nombreZona = nombreZona;
      this.precio = precio;
      this.stock = stock;
    }
    venta(cantidad) {
      this.stock -= cantidad;
    }

  }

  let listaDeEventos = [    
    {
      id: 1,
      nombre: "Luciano Pereyra",
      fechaInicio: "08/12/2021",
      entradas: [
        new Entrada (1,"tribunas central", 1200, 1000),
        new Entrada (2,"Campo", 1800, 2000),
        new Entrada (3,"tribunas laterales", 800, 2500),
        new Entrada (4, "Palco", 2500, 600)
      ],
    },
    {
      id: 2,
      nombre: "Paulo Londra",
      fechaInicio: "28/12/2021",
      entradas: [
        new Entrada (1,"tribunas central", 1900, 1000),
        new Entrada (2,"Campo", 2600, 2000),
        new Entrada (3,"tribunas laterales", 1100, 2500),
        new Entrada (4, "Palco", 3400, 600)
      ],
    }
  ];
  
  /* let listaDeEventos = [
    {
      id: 1,
      nombre: "Luciano Pereyra",
      fechaInicio: "08/12/2021",
      entradas: [
        new Entrada (1,"tribunas laterales", 800, 2500),
        new Entrada (2,"tribunas central", 1200, 1000),
        new Entrada (3,"Campo", 1800, 2000),
        new Entrada (4, "Palco", 2500, 600)
      ],
    },
    {
      id: 2,
      nombre: "Paulo Londra",
      fechaInicio: "28/12/2021",
      entradas: [
        new Entrada (1,"tribunas laterales", 1100, 2500),
        new Entrada (2,"tribunas central", 1900, 1000),
        new Entrada (3,"Campo", 2600, 2000),
        new Entrada (4, "Palco", 3400, 600)
      ],
    }
  ]; */
  
  //SELECCION DE EVENTO
  let mensaje = "";
  
  for (const evento of listaDeEventos) {
    mensaje += `\n${evento.id}. ${evento.nombre}`;
  }
  
  let idEvento = parseInt(prompt("Comprar Entrada: " + mensaje));
  let eventoSeleccionado = listaDeEventos.find(evento => evento.id === idEvento);
  
  while(isNaN(idEvento) || !eventoSeleccionado) {
    alert("Ingrese una opción valida");
    idEvento = parseInt(prompt("Comprar Entrada: " + mensaje));
    eventoSeleccionado = listaDeEventos.find(evento => evento.id === idEvento);
  }

//SELECCION DE UBICACIÓN DE LA ENTRADA
  let mensaje2 = "";

  for(const ubicacion of eventoSeleccionado.entradas) {
      mensaje2 += `\n${ubicacion.idZona}. ${ubicacion.nombreZona}. $ ${ubicacion.precio} c/u`
  }
  
  let idUbicacion = parseInt(prompt("Seleccione ubicacion de la entrada deseada: " + mensaje2));
  let ubicacionSeleccionada = eventoSeleccionado.entradas.find(ubicacion => ubicacion.idZona === idUbicacion);

  while(isNaN(idUbicacion) || !ubicacionSeleccionada) {
    alert("Ingrese una opción valida");
    idUbicacion = parseInt(prompt("Seleccione ubicacion de la entrada deseada: " + mensaje2));
    ubicacionSeleccionada = eventoSeleccionado.entradas.find(ubicacion => ubicacion.idZona === idUbicacion);
  }

  //CANTIDAD COMPRADA

  let cantidadEntradas = parseInt(prompt(`Ingrese la cantidad de entradas que desea comprar (Disponible ${ubicacionSeleccionada.stock}): `));

  while (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
      alert("Ingrese un valor valido");
      cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar: "));
  }
  
  if (cantidadEntradas <= ubicacionSeleccionada.stock && ubicacionSeleccionada.stock > 0) {
    ubicacionSeleccionada.venta(cantidadEntradas);
    alert("Monto a pagar: $ " + (ubicacionSeleccionada.precio * cantidadEntradas))
    console.log(ubicacionSeleccionada);
    } else {
        alert("No hay entradas disponibles")
    }

//FORMULARIO

let datosDeContactro = [];

function formulario() {
    let nombre = prompt("Ingresa tu nombre completo.");
    datosDeContactro.push(nombre);
    while(!(isNaN(nombre))) {
        alert("Nombre no Valido");
        nombre = prompt("Ingresa tu nombre completo.");
        datosDeContactro.push(nombre);
    }   
    let telefono = parseInt(prompt("Ingresa tu telefono."));
    datosDeContactro.push(telefono);
    while(isNaN(telefono)) {
        alert("Numero no Valido");
        telefono = prompt("Ingresa tu telefono.");
        datosDeContactro.push(telefono);
    }   
    let email = prompt("Ingresa tu E-mail");
    datosDeContactro.push(email);        
    let comentario = prompt("Ingresa tu comentario")
    datosDeContactro.push(comentario);
    alert("Datos de contacto:\n" + nombre + "\n" + telefono + "\n" + email + "\n" + comentario);
}

let infoEventos = prompt("¿Quieres estar al tanto de nuestros proximos eventos? Ingresa SI o NO segun corresponda.")


infoEventos = infoEventos.toLowerCase()
console.log(infoEventos)

if (infoEventos === "si") {
    formulario()
    alert("Muchas gracias por tu compra!")
} else {
    alert("Muchas gracias por tu compra!")
}

//ORDEN DE LA PROPIEDAD ENTRADAS POR PRECIO (DESAFIO COMPLEMENTARIO)

for(const evento of listaDeEventos) {
  evento.entradas.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

console.log(listaDeEventos)


