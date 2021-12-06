let eventoSeleccionado = null;

function cargarEvento() {
  let paramsString = location.search;
  let searchParams = new URLSearchParams(paramsString);
  let idEvento = searchParams.get("id");
  if (idEvento) obtenerEventoPorId(idEvento);
}

function obtenerEventoPorId(id) {
  let eventos = JSON.parse(localStorage.getItem("eventos"));
  const eventoEntrada = eventos.find((evento) => {
    return String(evento.id) === id;
  });

  if (eventoEntrada) cargarDetalleEvento(eventoEntrada);
}

function cargarDetalleEvento(evento) {
  const contenedorPrincipal = $("#detalle_evento_nombre");
  const contenedorSecundario = $("#detalle_evento_ubicacion");
  contenedorPrincipal.innerHTML = "";

  contenedorPrincipal.append(`
  <div class="img-event_container">
    <img class="img-event" src="${evento.imagen}">
  </div>
  <div class=""info-general_container"">
    <h2 class="titulo-entrada">
        ${evento.nombre}
    </h2>
    <h3 class="fecha-entrada">
        ${evento.fechaInicio} | ${evento.horario}
    </h3>
  </div>
  `);

  contenedorPrincipal.append(contenedorSecundario);

  for (const ubicaciones of evento.entradas) {
    contenedorSecundario.append(`
        <div class="sector_container">
            <p>Sector: ${ubicaciones.nombreZona}.</p>                
            <p>Disponibles: ${ubicaciones.stock}</p>
            <p>Precio: $ ${ubicaciones.precio}</p>           
        </div>
    `);
  }
}

// function cargarDetalleEvento(evento) {
//   const detalleEvento = document.getElementById("detalle_evento_nombre");
//   const ubicacionesDeEvento = document.getElementById(
//     "detalle_evento_ubicacion"
//   );

//   detalleEvento.innerHTML = "";

//   const imgContenedor = document.createElement("div");
//   imgContenedor.classList.add("img-event_container");

//   const imgEvento = document.createElement("img");
//   imgEvento.classList.add("img-event");
//   imgEvento.src = evento.imagen;

//   const infoContenedor = document.createElement("div");
//   infoContenedor.classList.add("info-general_container");

//   const tituloEvento = document.createElement("h2");
//   tituloEvento.classList.add("titulo-entrada");
//   tituloEvento.textContent = evento.nombre;

//   const fechaEvento = document.createElement("h3");
//   fechaEvento.classList.add("fecha-entrada");
//   fechaEvento.textContent = `${evento.fechaInicio} | ${evento.horario}`;

//   detalleEvento.appendChild(imgContenedor);
//   imgContenedor.appendChild(imgEvento);
//   detalleEvento.appendChild(infoContenedor);
//   infoContenedor.appendChild(tituloEvento);
//   infoContenedor.appendChild(fechaEvento);

//   for (const ubicaciones of evento.entradas) {
//     const contenedorDeSectores = document.createElement("div");
//     const sectorDelEstadio = document.createElement("p");
//     sectorDelEstadio.classList.add("nombre-sector");
//     sectorDelEstadio.textContent = ubicaciones.nombreZona;

//     /* detalleEvento.innerHTML += `
//           <div>
//             <p class="ubicacion-evento">${ubicaciones.nombreZona}</p>
//             <p class="precio-evento">$${ubicaciones.precio}</p>
//             <p class="stock-evento">Disponibles: ${ubicaciones.stock}</p>
//           </div>
//         `; */
//     detalleEvento.appendChild(ubicacionesDeEvento);
//     ubicacionesDeEvento.appendChild(contenedorDeSectores);
//     contenedorDeSectores.appendChild(sectorDelEstadio);
//   }
// }

cargarEvento();
