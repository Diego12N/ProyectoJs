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
    fechaInicio: "08/12/2021",
    horario: "19:45hs",
    imagen: "img/Lpereyra1.jpg",
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
    fechaInicio: "16/12/2021",
    horario: "20:30hs",
    imagen: "img/AbelPintos1.jpg",
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
    fechaInicio: "28/12/2021",
    horario: "21:15hs",
    imagen: "img/Plondra1.jpg",
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

let contenidoDeEventos = document.getElementById("section-item__container");
const eventoSection = document.getElementById("evento_section");
const seccionDeCompra = document.getElementById("entradas_container");

document.addEventListener("DOMContentLoaded", () => {
  mostrarEventos();
});

function mostrarEventos() {
  listaDeEventos.forEach((evento) => {
    const funcionInfo = document.createElement("div");
    funcionInfo.classList.add("evento-container");

    const imgContenedor = document.createElement("div");
    imgContenedor.classList.add("img-container");

    const imgEvento = document.createElement("img");
    imgEvento.classList.add("img-item");
    imgEvento.src = evento.imagen;

    const tituloEvento = document.createElement("h2");
    tituloEvento.classList.add("titulo-evento");
    tituloEvento.textContent = evento.nombre;

    const fechaEvento = document.createElement("h3");
    fechaEvento.classList.add("fecha-evento");
    fechaEvento.textContent = `${evento.fechaInicio} | ${evento.horario}`;

    const btmEntrada = document.createElement("a");
    // btmEntrada.href = "#evento_section";
    btmEntrada.onclick = () => {
      window.location.href = `compras.html?id=${evento.id}`;
      obtenerDetalleEvento(evento.id);
    };

    let hayStock = false;
    for (const entradas of evento.entradas) {
      if (entradas.stock > 0) hayStock = true;
    }

    if (hayStock) {
      btmEntrada.classList.add("btm-evento");
      btmEntrada.textContent = "VER ENTRADAS";
    } else {
      btmEntrada.classList.add("btm-evento_stock");
      btmEntrada.href = "";
      btmEntrada.textContent = "SIN STOCK";
    }

    imgContenedor.appendChild(imgEvento);
    funcionInfo.appendChild(imgContenedor);
    funcionInfo.appendChild(tituloEvento);
    funcionInfo.appendChild(fechaEvento);
    funcionInfo.appendChild(btmEntrada);

    contenidoDeEventos.appendChild(funcionInfo);
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

/* function seleccionUbicacion(evento) {
  seccionDeCompra.innerHTML = "";

  const imgContenedor = document.createElement("div");
  imgContenedor.classList.add("img-event_container");

  const imgEvento = document.createElement("img");
  imgEvento.classList.add("img-event");
  imgEvento.src = evento.imagen;

  const infoContenedor = document.createElement("div");
  infoContenedor.classList.add("info-general_container");

  const tituloEvento = document.createElement("h2");
  tituloEvento.classList.add("titulo-entrada");
  tituloEvento.textContent = evento.nombre;

  const fechaEvento = document.createElement("h3");
  fechaEvento.classList.add("fecha-entrada");
  fechaEvento.textContent = `${evento.fechaInicio} | ${evento.horario}`;

  seccionDeCompra.appendChild(imgContenedor);
  imgContenedor.appendChild(imgEvento);
  seccionDeCompra.appendChild(infoContenedor);
  infoContenedor.appendChild(tituloEvento);
  infoContenedor.appendChild(fechaEvento);

  for (const ubicaciones of evento.entradas) {
    seccionDeCompra.innerHTML += `
            <p class="ubicacion-evento">Ubicacion: ${ubicaciones.nombreZona}</p>
            <p class="precio-evento">Precio: $${ubicaciones.precio}</p>
            <p class="stock-evento">Entradas Disponibles: ${ubicaciones.stock}</p>   
        `;
  }
} */

/*  let contenidoDeEventos = document.getElementById("section-item__container");  
  
  for (const listaEvento of listaDeEventos) {
    let tittle = document.createElement("h2");
    tittle.classList.add("event-tittle")
    tittle.innerHTML=  `<img src="${listaEvento.imagenes}" alt="imagen evento">
                        <h2>${listaEvento.nombre}</h2>
                        <p>Fecha: ${listaEvento.fechaInicio}</p>
                        <p>$ ${listaEvento.entradas[0].precio} </p>
                        `;
    contenidoDeEventos.appendChild(tittle)
  }

 */

//SELECCION DE EVENTO
/* let mensaje = "";
  
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

console.log(listaDeEventos);


 */
