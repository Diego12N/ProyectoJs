let eventosCard = document.querySelectorAll(".evento-container");

function showScroll() {
	let scrollTop = document.documentElement.scrollTop;
    for(let i=0; i < eventosCard; i++) { 
        let alturaEventos = eventosCard[i].offsetTop; 
        if(alturaEventos - 500 < scrollTop)
    }
}
