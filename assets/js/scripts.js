/*
Author       : themes_mountain
Template Name: Inspinia - Seo & Marketing Business Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() {
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			var s = $("#sticker");
			var pos = s.position();					   
			$(window).on('scroll', function() {
				var windowpos = $(window).scrollTop();
				if (windowpos >= pos.top) {
					s.addClass("stick");
				} else {
					s.removeClass("stick");	
				}
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});			
		/*END MENU JS*/ 
		
		/* START PORTFOLIO JS */
		jQuery('.grid').mixitup({
		targetSelector: '.mix',
		});
		
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				},
			});
		/* END PORTFOLIO JS */
		
		/* START TESTIMONIAL JS */
			$("#testimonial-slider").owlCarousel({
				items:2,
				itemsDesktop:[1000,2],
				itemsDesktopSmall:[990,1],
				itemsTablet:[768,1],
				pagination:true,
				navigation:false,
				navigationText:["",""],
				slideSpeed:1000,
				autoPlay:false
			});
		/* END TESTIMONIAL JS */
	
		/* START COUNTDOWN JS*/
		$('.counter_feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */		

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 5000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/	 

	}); 	

	
				
})($);


  

