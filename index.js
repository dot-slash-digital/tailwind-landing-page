// Enable scrollspy
$('body').scrollspy({target: "#navbar-scrollspy"});

// Smooth scrolling for navbar links
$("#navbar a, #jumbotron a, #jumbotron-carousel a").on('click', function(e) {
    e.preventDefault();

    var navbarHeight = $("#mobile-nav").hasClass("show")
        ? ($("#navbar").height() - $("#mobile-nav").height())
        : $("#navbar").height();

    $('html, body').animate({
        scrollTop: ($(this.hash).offset().top)
    }, 800);
});

// Close mobile menu on navbar item click
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// set active testimonial item on click
$("#testimonials .item").click(function() {
    $("#testimonials .item").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("one")) {
        $("#testimonials .grid").css("transform", "translateX(0%)");
    } else if ($(this).hasClass("two")) {
        $("#testimonials .grid").css("transform", "translateX(calc(-100% + 115px - 4px))");
    } else if ($(this).hasClass("three")) {
        $("#testimonials .grid").css("transform", "translateX(calc(-200% + 115px - 4px + 115px - 4px))");
    }
});
