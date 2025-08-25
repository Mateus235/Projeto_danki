  // $() chamando uma função utilizando jquery 
$(function(){ //cifrao é a funcao do jquery
    // Todo meu codigo de javascript
    $('nav.mobile').click(function(){
        // Aqui dentro é o que vai acontecer quando clicarmos na nav.mobile
        let listaMenu = $('nav.mobile ul');
        // Abrir menu atráves do fadeIn
        /*
        if(listaMenu.is(':hidden') == true){
             listaMenu.fadeIn(); // O .fadeIn()método anima a opacidade dos elementos correspondentes.
        }else{
        listaMenu.fadeOut();
       }
    */
    // Abrir e fechar sem efeitos
     /*
          if(listaMenu.is(':hidden') == true){
            //listaMenu.show();
             listaMenu.css('display','block');
        }else{
        // listaMenu.hide();
            listaMenu.css('display','none')
        }
         */

         if(listaMenu.is(':hidden') == true){
               //abrir ou fechar o menu
              var icone = $('.botao-menu-mobile').find('i');
              icone.removeClass('fa-bars');
              icone.addClass('fa-bars');
               listaMenu.slideToggle();
        }else{
                 //abrir ou fechar o menu
                 var icone = $('.botao-menu-mobile').find('i');
              icone.removeClass('fa-times');
              icone.addClass('fa-bars');
                listaMenu.slideToggle();
        }
      // fa fa times
    }) 
    carregarDinamico();
    function carregarDinamico(){
      $('[realtime]').click(function(){
        var pagina = $(this).attr('realtime'); // Pega o valor do atributo realtime
        $('.container-principal').load(INCLUDE_PATH+'pages/' +pagina+' .php');
        return false; // Impede o comportamento padrão do link
      })
    }

    
})
