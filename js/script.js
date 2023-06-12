window.ScrollReveal = ScrollReveal({ reset: true, duration: 500 });

ScrollReveal.reveal('.client-item');

ScrollReveal.reveal('.product-title');
ScrollReveal.reveal('.product-list');

jQuery(document).ready(function($) {

	jQuery('a.page-scroll').bind('click', function (event) {
	     var $anchor = $(this);
	     $('html, body').stop().animate({
	         scrollTop: $($anchor.attr('href')).offset().top-48
	     }, 1500, 'easeInOutExpo');
	     event.preventDefault();
	});

	jQuery(window).scroll(function () {
        if (jQuery("#navbar-sticky").offset().top < 100) {
            jQuery("#navbar-sticky").removeClass("navbar-sticky");
        } else {
            jQuery("#navbar-sticky").addClass("navbar-sticky");
        }
    });
});

