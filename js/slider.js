

$(function(){
    var curSlide = 0 // slide atual

    var maxSlide = $('.banner-single').length - 1;

    var delay = 3;

    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();

    }

    function changeSlide(){
    setInterval(function(){
        $('.banner-single').eq(curSlide).fadeOut(2000);
        
        curSlide++;
        if(curSlide > maxSlide){
            console.log('🚩 Chegou ao último slide. Reiniciando...');
            curSlide = 0;
        }

        $('.banner-single').eq(curSlide).fadeIn(2000);
    }, delay * 1000);
}
initSlider();
changeSlide();

})



