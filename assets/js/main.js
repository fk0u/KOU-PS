// main.js

$(document).ready(function() {
    // Splash Screen Timeout (hanya di halaman index.html)
    if ($('#splash-screen').length) {
        setTimeout(function() {
            $('#splash-screen').fadeOut(500, function() {
                $('#main-content').fadeIn(500);
            });
        }, 2000); // 2 detik
    }

    // Hamburger Menu Toggle
    $('#hamburger').click(function() {
        $('#mobile-menu').slideToggle();
    });

    // Smooth Scroll for Internal Links (tidak perlu jika sudah di CSS)
    /*
    $('a[href^="#"]').on('click', function(event) {
        var target = this.hash;
        if (target) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80 // Adjusting for fixed header
            }, 800, function(){
                window.location.hash = target;
            });
        }
    });
    */

    // FAQ Accordion Toggle
    $('.faq-question').click(function() {
        // Toggle the answer
        $(this).next('.faq-answer').slideToggle();

        // Toggle the chevron icon
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });
});
