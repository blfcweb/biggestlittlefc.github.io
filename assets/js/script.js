jQuery(document).ready(function($) {

	$('#menu-main .menu-group ul').slideUp(0);
	$('#menu-main .menu-group h3').click(function() {
		$(this).siblings('ul').slideToggle(400);
		console.log("Menu Toggled");
	});

});