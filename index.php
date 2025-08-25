<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Projeto 01</title>
    <!-- <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->    
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo INCLUDE_PATH; ?>estilo/style.css">
    <!-- meta tags são instruções para o navegador -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="palavra-chave,do,meu,site">
    <meta name="description" content="descrição do meu website">
    <link rel="icon" href="<?php echo INCLUDE_PATH; ?>favicon.ico" type="images/x-icon" />
</head>
<body>
<base base="<?php echo INCLUDE_PATH; ?>">

    <header>
        <div class="center">
            <div class="logo left"><a href="/">LogoMarca</a></div> <!-- logo -->
            <nav class="desktop right">
                <ul>
                    <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
                    <li><a realtime="contato" href="<?php echo INCLUDE_PATH; ?>contato">Contato</a></li>
                </ul>
            </nav>
            <nav class="mobile right">
                <div class="botao-menu-mobile">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
                <ul>
                    <li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
                    <li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
                    <li><a realtime="contato" href="<?php echo INCLUDE_PATH; ?>contato">Contato</a></li>
                </ul>
            </nav>
            <div class="clear"></div> <!-- clear -->
        </div> <!-- center -->
    </header>
    <div class="container-principal">
    <?php
        $url = isset($_GET['url']) ? $_GET['url'] : 'home';

        if(file_exists('pages/'.$url.'.php')){
            include('pages/'.$url.'.php');
        }else{
            // Podemos fazer o que quiser, pois a pagina não existe
            $pagina404 = true;
            // echo 'Tentando incluir: ' . __DIR__ . '/pages/404.php<br>';
            // var_dump(file_exists(__DIR__ . '/pages/404.php'));
            include('pages/404.php');
        }
    ?>
    </div> <!-- container-principal -->
    
    <footer <?php if(isset($pagina404) && $pagina404 == true ) echo 'class="fixed"'; ?>>
        <div class="center">
            <p>Todos os direitos reservados</p>
        </div> <!-- center -->
    </footer>

     <script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
    <script src="<?php echo INCLUDE_PATH; ?>js/script.js"></script>

        <?php if($url == 'home' || $url == '') 
            { ?>
    <script src="<?php echo INCLUDE_PATH; ?>js/slider.js"></script>
       <?php  } ?>
    <script src="<?php echo INCLUDE_PATH; ?>js/animacao.js"></script>
</body>
</html>

  
