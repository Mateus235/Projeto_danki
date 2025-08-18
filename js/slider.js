

$(function(){
    var curSlide = 0 // slide atual. Uma variavel global que vai controlar o slide atual

    var maxSlide = $('.banner-single').length - 1;

    var delay = 3;

    function initSlider(){
        $('.banner-single').hide();
        $('.banner-single').eq(0).show();
    for (var i = 0; i <= maxSlide+1; i++){
            var content = $('.bullets').html();
            if(i == 0){
                content+='<span class="active-slider"></span>';
            }else{
            content+='<span></span>';
            $('.bullets').html(content);
            }

        }

    }

    function changeSlide(){
    setInterval(function(){
        $('.banner-single').eq(curSlide).stop().fadeOut(2000);
        curSlide++;
        if(curSlide > maxSlide)
            curSlide = 0;       
     $('.banner-single').eq(curSlide).stop().fadeIn(2000);
    //  Trocar bullets da navegação do slider!
        $('.bullets span').removeClass('active-slider');
        $('.bullets span').eq(curSlide).addClass('active-slider');
     }, delay * 1000);
}

$('body').on('click', '.bullets span', function(){
    var currentBullet = $(this);   // this é o bullet que foi clicado, referencia ao objeto que foi clicado
    curSlide = currentBullet.index(); // pega o index do bullet que foi clicado
    $('.banner-single').fadeOut(1000);
    $('.banner-single').eq(curSlide).fadeIn(1000);
    $('.bullets span').removeClass('active-slider');
    currentBullet.addClass('active-slider'); 
})

changeSlide();
initSlider();

})



