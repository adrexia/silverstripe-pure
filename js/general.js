/*jslint browser: true*/
/*global $, jQuery*/

jQuery(function($) {
	"use strict";

	// Hello there! You can add in any of your site-specific code here.



});



jQuery(window).on('load resize orientationchange', function() {
	"use strict";

	var width = $(window).width() / parseFloat($("body").css("font-size")),
		desktopwidth = 48;

	//Add again if desktop
	$('#navbar').removeClass('pure-menu-open');

	if (width <= desktopwidth && !$('html').hasClass('oldie')) {
		$('body').removeClass('desktop').addClass('mobile');
	} 
	else {
		$('body').removeClass('mobile').addClass('desktop');
	}

	if (width >= desktopwidth) {
		$('#navbar').addClass('pure-menu-open');
		console.log('true');
	} else {

		

		$('.menu-trigger').on('click', function() {
			if($('#navbar').hasClass('pure-menu-open')){
				$('#navbar').removeClass('pure-menu-open');
			} else{
				$('#navbar').addClass('pure-menu-open');
			}
		});
	}
});
