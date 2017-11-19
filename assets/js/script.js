jQuery(document).ready(function($) {

	$('#menu-main .menu-group ul').slideUp(0);
	$('#menu-main .menu-group h3').click(function() {
		var $self = $(this).siblings('ul');
		if ( $self.hasClass('menu-open') ) {
			$self.slideUp(400).removeClass('menu-open');
		} else {
			$('.menu-open').slideUp(400).removeClass('menu-open');
			$self.slideDown(400).addClass('menu-open');
		}
	});


	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		$('body').css({
			'background-position-y' : '-' + (wScroll / 5) + 'px'
		});

	});

});