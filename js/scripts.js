$(document).ready(function() {
    var animationSpeed = 700;
    var delay = 4500;
    var currentSlide = 1;

    var $sliderWrap = $('#sliderWrap');
    var $navOne = $('.navOne');
    var $navTwo = $('.navTwo');
    var $navThree = $('.navThree');

    //Slider timer animation
    var slideTimer = setInterval(function(){
        $sliderWrap.animate({'margin-left': '-=100%'}, animationSpeed, function() {
            currentSlide++
            if (currentSlide === 4) {
                currentSlide = 1;
                $sliderWrap.css('margin-left', 0);	
            }
        });
    }, delay)

    //Slider navigation events
    $navOne.click(function() {
        $(this).css('background', 'black');
        $navTwo.css('background', 'rgba(128,128,128,0.8)');
        $navThree.css('background', 'rgba(128,128,128,0.8)');
        
        $sliderWrap.css('margin-left', 0);
        clearInterval(slideTimer);
    });

    $navTwo.click(function() {
        $(this).css('background', 'black');
        $navOne.css('background', 'rgba(128,128,128,0.8)');
        $navThree.css('background', 'rgba(128,128,128,0.8)');

        $sliderWrap.css('margin-left', '-100%');
        clearInterval(slideTimer);
    });

    $navThree.click(function() {
        $(this).css('background', 'black');
        $navOne.css('background', 'rgba(128,128,128,0.8)');
        $navTwo.css('background', 'rgba(128,128,128,0.8)');

        $sliderWrap.css('margin-left', '-200%');
        clearInterval(slideTimer);
    });
});