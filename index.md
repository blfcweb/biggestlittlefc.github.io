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

		if ( wScroll > wHeight - 1 ) {
			$('#page-content').addClass('home-scroll');
			console.log('Dooooowwnn');
		}
		if ( wScroll < wHeight + 1 ) {
			$('#page-content').removeClass('home-scroll');
			console.log('and uuup');
		}



	});
</script>


<div id="home-content" class="textcenter">
	<h2>Is this your first time to BLFC?</h2>
	<p>BLFC is one of the top Furry Conventions around, getting worldwide attendance of more than 5k a year. We know it can be a bit overwhelming at first, so here is a quick how to.</p>
	<ol class="nobull">
		<li class="one_third">
			<h3>Register</h3>
			<p>First step is to get registered. Registration is available at con, but there are several benefits to registering early.</p>
			<a class="button" href="https://reg.goblfc.org">Register Now</a>
		</li>
		<li class="one_third">
			<h3>Get a room</h3>
			<p>BLFC takes place at the Grand Sierra Resort and has a good selection of rooms for the duration of your stay.</p>
			<a class="button" href="/hotel/">Book a room</a>
		</li>
		<li class="one_third">
			<h3>Get here</h3>
			<p>We are located in the lovely Reno, Nevada. You can get here from any direction one wide open roads.</p>
			<a class="button" href="/travel/">Travel Directions</a>
		</li>
	</ol>
	<div class="clear"></div>
</div>