$(function() {
    var atual = 0; // começa no 0, já que eq() é baseado em índice
    var maximo = $('.box-especialidade').length - 1;
    var timer;
    var animacaoDelay = 3;

    executarAnimacao();

    function executarAnimacao(){
        $('.box-especialidade').hide(); 
        $('.box-especialidade').eq(atual).fadeIn(); // mostra o primeiro box
        timer = setInterval(logicaAnimacao, animacaoDelay * 1000);

        function logicaAnimacao(){
            atual++;
            if(atual > maximo){
                clearInterval(timer);
                return false;
            }
            console.log(atual);
            $('.box-especialidade').eq(atual).fadeIn();
        }
    }
});
