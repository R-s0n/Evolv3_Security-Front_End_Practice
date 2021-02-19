//Preloader
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
//Team
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
//Progress Bars
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            });
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
//Responsive Tabs
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
//Testimonials
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
//Navigation
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });
    function showHideNav() {
       if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/navigation/logosmall.png")
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/navigation/nologosmall.png")
        } 
    }
});
