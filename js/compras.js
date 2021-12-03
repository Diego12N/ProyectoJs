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
  const detalleEvento = document.getElementById("detalle_evento_nombre");
  const sectoresContenedor = document.getElementById("detalle_evento_sectores");
  detalleEvento.innerHTML = "";

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

  detalleEvento.appendChild(imgContenedor);
  imgContenedor.appendChild(imgEvento);
  detalleEvento.appendChild(infoContenedor);
  infoContenedor.appendChild(tituloEvento);
  infoContenedor.appendChild(fechaEvento);

  for (const ubicaciones of evento.entradas) {
    detalleEvento.innerHTML += `
          <div>
            <p class="ubicacion-evento">${ubicaciones.nombreZona}</p>
            <p class="precio-evento">$${ubicaciones.precio}</p>
            <p class="stock-evento">Entradas Disponibles: ${ubicaciones.stock}</p>
          </div>
        `;
  }
}

cargarEvento();
