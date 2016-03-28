$(document).ready(function() {
	console.log( "Welcome to the Cybersocks Regional Competition 2016!" );
});

// Hide/show navbar on scroll
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 1000);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#navbar').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

// Initiates typeit
$('#typing').typeIt({
	cursor: false
});
