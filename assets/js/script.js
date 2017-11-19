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
		var wHeight = $(window).height();

	// scroll notice fade out
		if ( wScroll > 10 ) {
			$('#home-scroll-notice').css({
				'opacity' : '0'
			});
		}

	// after curtain raised, make elements scroll with page
		if ( wScroll > wHeight - 1 ) {
			$('#page-content').addClass('home-scroll');
			//console.log('Dooooowwnn');
		}
		if ( wScroll < wHeight + 1 ) {
			$('#page-content').removeClass('home-scroll');
			//console.log('and uuup');
		}


	});

});