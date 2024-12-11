<?php
session_start(); // Inicia a sessão

// Verifica se o usuário está logado (se a variável de sessão 'conta_id' está definida)
if (!isset($_SESSION['conta_id'])) {
    echo "Erro: conta_id não está definido. O usuário não está logado.";
    exit;  // Interrompe a execução caso o usuário não esteja logado
}

// Agora você pode acessar $_SESSION['conta_id']
$conta_id = $_SESSION['conta_id'];  // Atribui o conta_id à variável

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $raca = $_POST['Raça'];
    $idade = $_POST['idade'];
    $sexo = $_POST['sexo'];
    $altura = floatval($_POST['altura']); // Converte para número decimal
    $peso = floatval($_POST['peso']); // Converte para número decimal
    $classe = $_POST['Classe'];
    $subclasse = $_POST['subclasse'];
    $estilo = $_POST['Estilo'];
    $personalidade = $_POST['personalidade'];
    $status = $_POST['status'];
    $forca = intval($_POST['forca']); // Converte para inteiro
    $agilidade = intval($_POST['agilidade']); // Converte para inteiro
    $resistencia = intval($_POST['resistencia']); // Converte para inteiro
    $karma = intval($_POST['karma']); // Converte para inteiro

    // Processa o upload da imagem
    if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] == 0) {
        $diretorio = 'uploads/'; // Pasta onde as imagens serão armazenadas
        $nomeImagem = uniqid() . '_' . $_FILES['imagem']['name']; // Nome único para evitar conflitos
        $caminhoImagem = $diretorio . $nomeImagem;

        // Move o arquivo para a pasta de uploads
        if (!move_uploaded_file($_FILES['imagem']['tmp_name'], $caminhoImagem)) {
            die("Erro ao fazer upload da imagem.");
        }
    } else {
        die("Nenhuma imagem foi enviada ou ocorreu um erro.");
    }

    // Inclui o arquivo de conexão
    include_once('conectar.php');

    // Prepara a consulta SQL
    $stmt_personagem = $conn->prepare("
        INSERT INTO personagem (
            nome, raca, idade, sexo, altura, peso, classe, subclasse, estilo, imagem, personalidade, status, forca, agilidade, resistencia, karma, conta_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    // Corrige a string de tipos para corresponder a todos os parâmetros
    $stmt_personagem->bind_param(
        "ssissdssssssiiii", 
        $nome, $raca, $idade, $sexo, $altura, $peso, $classe, $subclasse, $estilo, $caminhoImagem, $personalidade, $status, $forca, $agilidade, $resistencia, $karma, $conta_id
    );

    // Executa a consulta
    if ($stmt_personagem->execute()) {
        echo "<script>alert('Ficha do personagem criada com sucesso!'); window.location.href = '../Criando.html';</script>";
    } else {
        echo "<script>alert('Erro ao criar a ficha do personagem.'); window.location.href = '../Criando.html';</script>";
    }

    // Fecha as declarações e a conexão
    $stmt_personagem->close();
    $conn->close();
}
?>
