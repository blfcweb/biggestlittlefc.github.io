jQuery(document).ready(function($) {

	$('#menu-main .menu-group ul').slideUp(0);
	$('#menu-main .menu-group h3').click(function() {
		$('.menu-open').slideUp(400).removeClass('menu-open');
		$(this).siblings('ul').not('.menu-open').slideDown(400).addClass('menu-open');
	});

});