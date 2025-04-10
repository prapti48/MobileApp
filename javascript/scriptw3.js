
$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 800);
    });
    
    // Add active class to header on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.header').css('background-color', 'rgba(11, 36, 92, 0.95)');
        } else {
            $('.header').css('background-color', '#ffffff');
        }
    });
    
    // Simulate live bus movement on map (for demo purposes)
    function animateBus() {
        // This would be replaced with actual live tracking data
        // For now, just a visual indicator that the map is "live"
        $('.map-container').append('<div id="bus-indicator" style="position:absolute; top:10px; right:10px; background-color:green; color:white; padding:5px 10px; border-radius:5px; font-size:12px;">Live</div>');
        
        setInterval(function() {
            $('#bus-indicator').fadeOut(500).fadeIn(500);
        }, 1000);
    }
    
    animateBus();
});
