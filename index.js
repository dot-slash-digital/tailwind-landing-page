// Enable scrollspy
$('body').scrollspy({target: "#navbar-scrollspy", offset: $("#navbar").outerHeight()});

// Smooth scrolling for navbar links
$("#navbar a").on('click', function(e) {
    e.preventDefault();

    var navbarHeight = $("#mobile-nav").hasClass("show")
        ? ($("#navbar").outerHeight() - $("#mobile-nav").height()) - 1
        : $("#navbar").outerHeight() - 1;
    console.log(navbarHeight);

    $('html, body').animate({
        scrollTop: ($(this.hash).offset().top - navbarHeight)
    }, 800);
});

// Close mobile menu on navbar item click
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

function setTestimonialHeight(index) {
    $("#testimonials .testimonial:nth-child(" + index + ")").addClass("active");
    $("#testimonials .grid-outer").css("height", $("#testimonials .testimonial:nth-child(" + index + ")").height() + 6);
    $("#testimonials .grid").css("transform", "translateX(calc(calc(100% + var(--space-between-testimonials)) * -" + (index - 1) + "))");
}

// Set testimonial grid size on page load
$(function() {
    if ($(window).width() > 575) {
        $("#testimonials .grid-outer").css("height", $("#testimonials .testimonial:nth-child(1)").height() + 6);
    } else {
        $("#testimonials .grid-outer").css("height", "auto");
    }
});

// Set testimonial grid size on page resize
$(window).resize(function() {
    if ($(window).width() > 575) {
        $("#testimonials .grid-outer").css("height", $("#testimonials .testimonial.active").height() + 6);
    } else {
        $("#testimonials .grid-outer").css("height", "auto");
    }
});

// Set active testimonial item on click
$("#testimonials .item").click(function() {
    $("#testimonials .indicators .item, #testimonials .testimonial").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("one")) {
        setTestimonialHeight(1);
    } else if ($(this).hasClass("two")) {
        setTestimonialHeight(2);
    } else if ($(this).hasClass("three")) {
        setTestimonialHeight(3);
    }
});
