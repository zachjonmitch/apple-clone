$(document).ready(function() {
    var animationSpeed = 700;
    var delay = 4500;
    var currentSlide = 1;

    var $sliderWrap = $('#sliderWrap');

    setInterval(function(){
        $sliderWrap.animate({'margin-left': '-=100%'}, animationSpeed, function() {
            currentSlide++
            if (currentSlide === 4) {
                currentSlide = 1;
                $sliderWrap.css('margin-left', 0);	
            }
        });
    }, delay)
})