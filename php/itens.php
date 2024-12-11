<?php
// Configuração do banco de dados
$host = "localhost";
$dbname = "descronic";
$user = "root";
$password = "";

// Criando a conexão
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Função para fazer o upload de uma imagem e retornar o caminho
function uploadImage($file, $targetDir = "uploads/") {
    $targetFile = $targetDir . uniqid() . basename($file["name"]); // Gera um nome único para evitar sobrescrição
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Verificar se a imagem é válida
    if (getimagesize($file["tmp_name"]) === false) {
        echo "O arquivo não é uma imagem.";
        return null;
    }

    // Verificar o tamanho da imagem (5MB máximo)
    if ($file["size"] > 5000000) {
        echo "O arquivo é muito grande.";
        return null;
    }

    // Verificar o tipo MIME do arquivo
    $mimeType = mime_content_type($file["tmp_name"]);
    if (!in_array($mimeType, ["image/jpeg", "image/png", "image/gif"])) {
        echo "Somente arquivos JPG, JPEG, PNG e GIF são permitidos.";
        return null;
    }

    // Tentar mover o arquivo para o diretório de uploads
    if (move_uploaded_file($file["tmp_name"], $targetFile)) {
        return $targetFile;
    } else {
        echo "Houve um erro ao enviar o arquivo.";
        return null;
    }
}

// Receber os dados do formulário
$arma = isset($_FILES['arma']) ? uploadImage($_FILES['arma']) : null;
$secundaria = isset($_FILES['secundaria']) ? uploadImage($_FILES['secundaria']) : null;
$utilizavel1 = isset($_FILES['utilizavel1']) ? uploadImage($_FILES['utilizavel1']) : null;
$utilizavel2 = isset($_FILES['utilizavel2']) ? uploadImage($_FILES['utilizavel2']) : null;
$artefato1 = isset($_FILES['artefato1']) ? uploadImage($_FILES['artefato1']) : null;
$artefato2 = isset($_FILES['artefato2']) ? uploadImage($_FILES['artefato2']) : null;
$capacete = isset($_FILES['capacete']) ? uploadImage($_FILES['capacete']) : null;
$peitoral = isset($_FILES['peitoral']) ? uploadImage($_FILES['peitoral']) : null;
$calca = isset($_FILES['calca']) ? uploadImage($_FILES['calca']) : null;
$calcado = isset($_FILES['calcado']) ? uploadImage($_FILES['calcado']) : null;

// Preparar a query de inserção com prepared statements
$stmt = $conn->prepare("INSERT INTO itens (arma, secundaria, utilizavel1, utilizavel2, artefato1, artefato2, capacete, peitoral, calca, calcado)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssss", $arma, $secundaria, $utilizavel1, $utilizavel2, $artefato1, $artefato2, $capacete, $peitoral, $calca, $calcado);

// Executar a query
if ($stmt->execute()) {
    echo "Itens salvos com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>
