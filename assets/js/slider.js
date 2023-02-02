$(function(){
    let cur_slide = 0;
    let max_slide = $('.background-single').length - 1;
    let delay = 10;

    initSlider();
    changeSlide();

    function initSlider(){
        $('.background-single').hide();
        $('.background-single').eq(0).show();
    }

    function changeSlide(){
        setInterval(function(){
            $('.background-single').eq(cur_slide).fadeOut(2000);
            cur_slide++;

            if(cur_slide > max_slide) {
                cur_slide = 0;
            }

            $('.background-single').eq(cur_slide).fadeIn(2000);
        }, delay * 1000);
    }
});