<?
    ini_set('display_errors', true);
    error_reporting(E_ALL|E_STRICT);

    if(!empty($_GET) && $_SERVER['REQUEST_METHOD'] == 'GET'){
    //pega as variaveis por POST
    $nome     = $_GET["nome"];
    $email    = $_GET["email"];
    $fone     = $_GET["fone"];
    $assunto  = $_GET["assunto"];
    $mensagem   = $_GET["mensagem"];

    global $email; //função para validar a variável $email no script todo

    $data      = date("d/m/y");                     //função para pegar a data de envio do e-mail
    $hora      = date("H:i");                       //para pegar a hora com a função date

    //aqui envia o e-mail para você
    mail ("contato@amais13.com", //email aonde o php vai enviar os dados do form
          "$assunto",
          "Nome: $nome\nData: $data\nHora: $hora\nE-mail: $email\nTelefone: $fone\n\nMensagem: $mensagem",
          "From: $email"
         );

    //aqui são as configurações para enviar o e-mail para o visitante
    $site   = "contato@amais13.com"; //o e-mail que aparecerá na caixa postal do visitante
    $titulo = "Contato - Amais13";    //titulo da mensagem enviada para o visitante
    $msg    = "$nome, Seu e-mail foi recebido!\nObrigado por entrar em contato conosco, em breve entraremos em contato!";

    //aqui envia o e-mail de auto-resposta para o visitante
    mail("$email",
         "$titulo",
         "$msg",
         "From: $site"
        );
    }
?>