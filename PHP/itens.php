<?php
// Configuração do banco de dados
$host = "localhost";
$dbname = "dbname";
$user = "Descrente24";
$password = "Descrente&amor300p";

// Criando a conexão
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Função para fazer o upload de uma imagem e retornar o caminho
function uploadImage($file, $targetDir = "uploads/") {
    $targetFile = $targetDir . basename($file["name"]);
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

    // Permitir apenas certos formatos de imagem
    if (!in_array($imageFileType, ["jpg", "png", "jpeg", "gif"])) {
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

// Preparar a query de inserção
$sql = "INSERT INTO itens (arma, secundaria, utilizavel1, utilizavel2, artefato1, artefato2, capacete, peitoral, calca, calcado)
VALUES ('$arma', '$secundaria', '$utilizavel1', '$utilizavel2', '$artefato1', '$artefato2', '$capacete', '$peitoral', '$calca', '$calcado')";

// Executar a query
if ($conn->query($sql) === TRUE) {
    echo "Itens salvos com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechar a conexão
$conn->close();
?>
