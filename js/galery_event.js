$(document).ready(() => {
	showGalery();
});

$("#banner__section").append(
	'<button id="galery_button-down"><i class="fas fa-chevron-down"></i></button> <button id="galery_button-up"><i class="fas fa-chevron-up"></i></button>'
);

$("#galery__section").append(
	`<div class="galery-item"></div>
    <div class="galery-item"></div>
    <div class="galery-item"></div>
    <div class="galery-item"></div>
    <div class="galery-item"></div>
    <div class="galery-item"></div>
    `
);

$("#galery__section").hide();

function showGalery() {
	$("#galery_button-down").click(() => {
		$("#galery_button-up").show();
		$("#galery__section").slideDown();
		$("#galery_button-up").click(() => {
			$("#galery_button-up").hide();
			$("#galery__section").slideUp();
		});
	});
}
