---
title: "Biggest Little Fur Con | Reno, NV"
layout: fullwidth
page_class: home
---
<div id="home-curtain-left"></div>
<div id="home-curtain-right"></div>
<div id="home-curtain-main"><div id="home-curtain-end"></div></div>

<div id="home-scroll-notice">{% include graphic-scrollnotice.svg %}</div>
<div id="home-stage" class="big-chunk textcenter">
	<div id="home-stage-content">
		<img src="/assets/theme/home-logo.png" alt="BLFC the Musical | Coming May 2018">

		<a class="home-button" href="https://reg.goblfc.org/" target="_blank">Join us &amp; register today</a>
	</div>
</div>

<script>
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();
		var wHeight = $(window).height();



		if ( wScroll > 10 ) {
			$('#home-scroll-notice').css({
				'opacity' : '0'
			});
		}

		if ( wScroll > $('#home-curtain-end').offset().top / 2 ) {
			$('#page-content').addClass()
		}

		if ( wScroll > wHeight ) {
			$('#page-content').addClass('home-scroll');
			console.log('Dooooowwnn');
		}
		if ( wScroll < wHeight ) {
			$('#page-content').removeClass('home-scroll');
			console.log('and uuup');
		}



	});
</script>