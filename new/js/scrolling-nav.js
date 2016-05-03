//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//determine greeting messag
var findDate = new Date();
var findHour = findDate.getHours();
var greetingMessage;

if (findHour > 18) {
    greetingMessage = "Good Evening!";  
} else if (findHour > 12) {
    greetingMessage = "Good Afternoon!";
} else if (findHour > 0) {
    greetingMessage = "Good Morning!";
} else greetingMessage = "Hello!";

var el = document.getElementById('greeting');
el.innerHTML = greetingMessage; //use textContent or innerHTML?
