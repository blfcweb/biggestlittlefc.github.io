jQuery(document).ready(function($) {

	$('#menu-main .menu-group ul').slideUp(0);
	$('#menu-main .menu-group h3').click(function() {
		// if this sibling has class  '.menu-open', slide up, remove class
		// else sliderup .menu-opens, remove class. Then slidedown current, add class.
		$('.menu-open').not( this + ' .menu-open').slideUp(400).removeClass('menu-open');
		$(this).siblings('ul').slideDown(400).addClass('menu-open');
	});

});