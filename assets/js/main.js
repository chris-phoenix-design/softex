/* =====================================================
Template Name   : Softex
Description     : Software and Digital Agency HTML5 Template
Author          : Themesland
Version         : 1.1
=======================================================*/

(function ($) {
    "use strict";


    // multi level dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });


    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }



    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider').on('change.owl.carousel', function (event) {
        new WOW().init();
    });



    // hero slider 2
    $('.hero-slider2').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: -1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='fal fa-long-arrow-left'></i>",
            "<i class='fal fa-long-arrow-right'></i>"
        ],
    });

    $('.hero-slider2').on('change.owl.carousel', function (event) {
        new WOW().init();
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // scroll to top
    $(window).scroll(function () {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").fadeIn('slow');
        } else {
            $("#scroll-top").fadeOut('slow');
        }
    });

    $("#scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
        } else {
            $('.navbar').removeClass("fixed-top");
        }
    });


    // countdown
    if ($('#countdown').length) {
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        });
    }


    // project filter
    $(window).on('load', function () {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btns').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btns li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


    // mouse cursor
    var mousecursor = document.querySelector(".mouse-cursor");
    var mousecursorinner = document.querySelector(".mouse-cursor-inner");
    var a = document.querySelectorAll("a");
    document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        mousecursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
    
    $("a").hover(
        function () {
            $(".mouse-cursor-inner").removeClass("mouse-inner-color");
            $(".mouse-cursor-inner").addClass("mouse-inner-transparent");
        },
        function () {
            $(".mouse-cursor-inner").removeClass("mouse-inner-transparent");
            $(".mouse-cursor-inner").addClass("mouse-inner-color");
        }
    );
    document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        mousecursorinner.style.left = x + "px";
        mousecursorinner.style.top = y + "px";
    });
    document.addEventListener("mousedown", function () {
        mousecursor.classList.add("click");
        mousecursorinner.classList.add("mouse-inner-hover");
    });
    document.addEventListener("mouseup", function () {
        mousecursor.classList.remove("click");
        mousecursorinner.classList.remove("mouse-inner-hover");
    });
    a.forEach((i) => {
        i.addEventListener("mouseover", () => {
            mousecursor.classList.add("mouse-hover");
        });
        i.addEventListener("mouseleave", () => {
            mousecursor.classList.remove("mouse-hover");
        });
    });


})(jQuery);










