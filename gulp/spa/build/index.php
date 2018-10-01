<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Ajax</title>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/deps.min.css">
    <link rel="stylesheet" href="assets/css/app.min.css">
</head>

<body>
    <aside class="logo">
        <a href="#/paginas/inicio.php" class="logo">
            <img src="/assets/imgs/logo.png" alt="logo">
        </a>
    </aside>
    <header class="cabecalho">
        <input type="text" placeholder="Pesquisar...">
        <button class="btn bg-blue white">Entrar</button>
        <button class="btn bg-red white">REGISTRAR</button>
    </header>
    <aside class="menu-area">
        <nav class="menu">
            <a wm-link="#/paginas/inicio.php">
                <i class="fa fa-home"></i> Início
            </a>
            <a wm-link="#/paginas/cursos.php">
                <i class="fa fa-bars"></i> Cursos
            </a>
            <a wm-link="#/paginas/suporte.php">
                <i class="fa fa-life-ring"></i> Suporte
            </a>
            <a wm-link="#/paginas/sobre.php">
                <i class="fa fa-info-circle"></i> Sobre
            </a>
        </nav>
    </aside>
    <main class="conteudo" wm-link-destino></main>
    <footer class="rodape">
        <span>
            Desenvolvido com
            <i class="fa fa-heart red"></i>
            por
            <strong>Cod<span class="red">3</span>r</strong>
        </span>
    </footer>
    <script src="assets/js/app.min.js"></script>
</body>

</html>