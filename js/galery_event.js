const galery = [
	{
		id: 1,
		url: "../img/Galery/galery_img-1.jpg",
	},
	{
		id: 2,
		url: "../img/Galery/galery_img-2.jpg",
	},
	{
		id: 3,
		url: "../img/Galery/galery_img-3.jpg",
	},
	{
		id: 4,
		url: "../img/Galery/galery_img-4.jpg",
	},
	{
		id: 5,
		url: "../img/Galery/galery_img-5.jpg",
	},
	{
		id: 6,
		url: "../img/Galery/galery_img-6.jpg",
	},
];

$(document).ready(() => {
	showGalery();
});

function showGalery() {
	$("#galery__section").hide();

	$("#banner__section").append(
		'<button id="galery_button-down"><i class="fas fa-chevron-down"></i></button> <button id="galery_button-up"><i class="fas fa-chevron-up"></i></button>'
	);

	$("#galery__section").css({
		"background-color": "#000",
	});

	$("#galery_button-down").click(() => {
		$("#galery_button-up").show();
		$("#galery__section").slideDown();
		$("#galery_button-up").click(() => {
			$("#galery_button-up").hide();
			$("#galery__section").slideUp();
		});
	});

	showImg();
}

function showImg() {
	galery.forEach((imagen) => {
		let i = imagen.id;

		$("#galery__section").append(
			`<div id="galery-item-${i}"></div>
			`
		);

		$(`#galery-item-${i}`).css({
			"background-image": `url(${imagen.url})`,
			"background-size": "cover",
			"background-position": "center",
		});
	});
}

/* function showImg() {
	for (let i = 1; i <= galery.length; i++) {
		$("#galery__section").append(
			`<div id="galery-item-${i}"></div>
			`
		);

		$(`#galery-item-${i}`).css({
			"background-image": `url(/img/Galery/galery_img-${i}.jpg)`,
			"background-size": "cover",
		});
	}
}
 */
