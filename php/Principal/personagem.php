<?php
session_start();
if (isset($_SESSION['id'])) {
    echo "Usuário logado, ID: " . $_SESSION['id'];
} else {
    echo "Usuário não está logado.";
}

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

    // Prepara a consulta SQL para inserir o personagem
    $stmt_personagem = $conn->prepare("
    INSERT INTO personagem (
        nome, raca, idade, sexo, altura, peso, classe, subclasse, estilo, imagem, personalidade, status, forca, agilidade, resistencia, karma, conta_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt_personagem->bind_param(
    "ssissdssssssiiiii",
    $nome, $raca, $idade, $sexo, $altura, $peso, $classe, $subclasse, $estilo, $caminhoImagem, $personalidade, $status, $forca, $agilidade, $resistencia, $karma, $conta_id
);

if ($stmt_personagem->execute()) {
    echo "<script>alert('Ficha do personagem criada com sucesso!'); window.location.href = '../perfil.php';</script>";
} else {
    echo "<script>alert('Erro ao criar a ficha do personagem.'); window.location.href = '../perfil.php';</script>";
}


    // Fecha as declarações e a conexão
    $stmt_personagem->close();
    $conn->close();
}
?>
