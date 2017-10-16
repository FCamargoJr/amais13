$( document ).ready(function() {
    /**
     * Ajustes para o menu mobile e desktop
     * */
    if ($( window ).width() <  976) {
        $('#navbarNavDropdown').on('show.bs.collapse', function (event) {
            $('#navbarNavDropdown').find('.nav').css('padding-top','30px');
        });
    }
    if ($( window ).width() >  976) {
        $('#navbarNavDropdown').on('show.bs.collapse', function (event) {
            $('#navbarNavDropdown').find('.nav').css('padding-top','0px');
        });
    }
    /**
     * Metodo para mudar imagens do celular
     */
    $(".circle").click(function (event) {
        //variaveis
        var img, target;
        target = $("#equipe-celular");
        //botao "CORACAO"
        if (target.val() < 6 && $(this).css("z-index") == 99) {
            //seta para pegar a imagem do proximo membro da equipe
            target.val(Number(parseInt(target.val())+1));
            if (target.val() == 1) {
                target.val(2);
            }
            //seta proxima imagem
            img = 'img'+ target.val();
            //seta z-index = -1 para todos da equipe "HIDE"
            $(".estrategia img").css("z-index","-1");
            //habilita o proximmo menbro da equipe
            $(".estrategia").find('img[data-target='+img+']').css('z-index', 1);
        }
        //botao X
        if (target.val() >= 1 && $(this).css("z-index") == 88) {
            target.val(Number(parseInt(target.val())-1));
            if (target.val() >= 1) {
                //seta imagem anterior
                img = 'img'+ target.val();
                //seta z-index = -1 para todos da equipe "HIDE"
                $(".estrategia img").css("z-index","-1");
                //habilita o menbro anterior da equipe
                $(".estrategia").find('img[data-target='+img+']').css('z-index', 1);
            }

        }
        return false;
    });
    /**
     * Animacao para os menus e sessoes
     * @type {*|jQuery|HTMLElement}
     */
    var $doc = $('html, body');
    $('a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });
    /**
     * Modal para exibir imagens
     * Observacao: para definir imagem que sera exibida colocar o PATH em data-target='img/teste.jpg'.
     * Tambem usar a TAG alt para difinir o que sera exibido para imagem
     */
    $('.portfolios-conteudo img').click(function (event) {
        //variaveis
        var target = $( event.target );
        var modal = $('#modal');
        var modalImg = $("#modal-image");
        var captionText = $('#caption');
        modal.css('display','block');
        modalImg.attr('src',target.attr('data-target'));
        captionText.text(target.attr('alt'));
    });
});
$(window).on('load', function(){

    $("#equipe-celular").val(0);
});
$( window ).resize(function () {
    if ($( window ).width() <  976) {
        $('#navbarNavDropdown').on('show.bs.collapse', function (event) {
            $('#navbarNavDropdown').find('.nav').css('padding-top','30px');
        });
    }
    if ($( window ).width() >  976) {
        $('#navbarNavDropdown').on('show.bs.collapse', function (event) {
            $('#navbarNavDropdown').find('.nav').css('padding-top','0px');
        });
    }
});