<?php
session_start(); // Inicia a sessão para pegar dados do usuário logado

// Verifica se o ID do usuário está na sessão (usuário logado)
if (!isset($_SESSION['user_id'])) {
    echo "Você precisa estar logado para acessar esta página.";
    exit();
}

$user_id = $_SESSION['user_id']; // Pegando o ID do usuário logado

// Conexão com o banco de dados
$servername = "127.0.0.1";
$username = "Descrente24";
$password = "Descrente&amor300p";
$dbname = " descronic's";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recupera os dados do formulário
$bio = $_POST['bio'];

// Processa a imagem de perfil
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $imageTmpPath = $_FILES['image']['tmp_name'];
    $imageName = $_FILES['image']['name'];
    $imagePath = 'uploads/' . $imageName;

    // Move a imagem para o diretório de uploads
    if (move_uploaded_file($imageTmpPath, $imagePath)) {
        // Atualiza a imagem de perfil no banco
        $stmt = $conn->prepare("UPDATE conta SET imagem_perfil = ? WHERE id = ?");
        $stmt->bind_param("si", $imagePath, $user_id);
        $stmt->execute();
        $stmt->close();
    }
}

// Atualiza a biografia no banco de dados
$stmt = $conn->prepare("UPDATE conta SET bio = ? WHERE id = ?");
$stmt->bind_param("si", $bio, $user_id);
$stmt->execute();
$stmt->close();

// Fecha a conexão com o banco de dados
$conn->close();

echo "Alterações salvas com sucesso!";
?>
