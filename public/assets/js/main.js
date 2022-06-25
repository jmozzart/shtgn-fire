$(function() {
    
    "use strict";
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".header-area").removeClass("sticky");
        }else{
            $(".header-area").addClass("sticky");
        }
    });
    
    
    //===== One Page Nav
    
    $('#nav').onePageNav({
        filter: ':not(.external)',
        currentClass: 'active',
    });
    
    
    //=====  Slick
    
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function(e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            fade: true,
			arrows: false,
            responsive: [
                { breakpoint: 767, settings: { dots: false, arrows: false } }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();

    //=====  Slick product items active
    $('.product-items-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        //slidesToScroll: 1,
        adaptiveHeight: true,
        arrows:true,
        prevArrow:'<span class="prev"><i class="lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-chevron-right"></i></span>',
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
			arrows:true,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
			arrows:true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            arrows: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            arrows: true,
          }
        }
        ]
    });
    //=====  Slick Showcase active 
    //=====  Slick testimonial active
    //====== Magnific Popup
    //===== Back to top
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //====== Slick product image
    
    $('.product-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-chevron-right"></i></i></span>',
        dots: false,
    });

    $('.pdp-active').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 5,

		asNavFor: '.product-image',
        arrows:true,
		prevArrow:'<div class="prev"><i class="lni-chevron-left"></i></div>',
        nextArrow: '<div class="next"><i class="lni-chevron-right"></i></div>',
        adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: true,
          }
        }
        ]
    });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.pdp-active').slick('slickGoTo', slideno - 1);
 });
    //=====  Rating selection
});