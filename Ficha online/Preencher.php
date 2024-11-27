<?php
// Validação inicial para evitar erros de variáveis não definidas
$nome = isset($_POST["Nome"]) ? trim($_POST["Nome"]) : null;
$idade = isset($_POST["Idade"]) ? intval($_POST["Idade"]) : null;
$sexo = isset($_POST["Sexo"]) ? trim($_POST["Sexo"]) : null;
$altura = isset($_POST["Altura"]) ? floatval($_POST["Altura"]) : null;
$peso = isset($_POST["Peso"]) ? floatval($_POST["Peso"]) : null;
$classe = isset($_POST["Classe"]) ? trim($_POST["Classe"]) : null;
$sub_classe = isset($_POST["Sub-Classe"]) ? trim($_POST["Sub-Classe"]) : null;
$estilo = isset($_POST["Estilo de luta"]) ? trim($_POST["Estilo de luta"]) : null;
$elemento = isset($_POST["Elemento"]) ? trim($_POST["Elemento"]) : null;

// Validação básica dos campos
if (empty($nome) || empty($idade) || empty($sexo) || empty($altura) || empty($peso) || empty($classe)) {
    die("Erro: Todos os campos obrigatórios devem ser preenchidos.");
}

// Conexão segura com o banco de dados
$conn = new mysqli('localhost', 'root', '', 'criação de personagem');
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Variáveis para o upload
$imagem_nome = null;
$historia_nome = null;

// Verificação e upload da imagem
if (isset($_FILES['imagemPersonagem']) && $_FILES['imagemPersonagem']['error'] == 0) {
    $imagem_nome = $_FILES['imagemPersonagem']['name'];
    $imagem_tmp = $_FILES['imagemPersonagem']['tmp_name'];
    $imagem_ext = pathinfo($imagem_nome, PATHINFO_EXTENSION);

    // Validar o tipo de imagem (se necessário)
    if (in_array(strtolower($imagem_ext), ['jpg', 'jpeg', 'png', 'gif'])) {
        $imagem_destino = 'uploads/imagens/' . uniqid() . '.' . $imagem_ext;
        move_uploaded_file($imagem_tmp, $imagem_destino);
    } else {
        die("Erro: Tipo de imagem não permitido.");
    }
}

// Verificação e upload da história
if (isset($_FILES['historiaPersonagem']) && $_FILES['historiaPersonagem']['error'] == 0) {
    $historia_nome = $_FILES['historiaPersonagem']['name'];
    $historia_tmp = $_FILES['historiaPersonagem']['tmp_name'];
    $historia_ext = pathinfo($historia_nome, PATHINFO_EXTENSION);

    // Validar o tipo de arquivo (somente .txt ou .pdf)
    if (in_array(strtolower($historia_ext), ['txt', 'pdf'])) {
        $historia_destino = 'uploads/historias/' . uniqid() . '.' . $historia_ext;
        move_uploaded_file($historia_tmp, $historia_destino);
    } else {
        die("Erro: Tipo de arquivo de história não permitido.");
    }
}

// Comando SQL preparado para evitar injeção
$sql = "INSERT INTO `criação` (`Nome`, `Idade`, `Sexo`, `Altura`, `Peso`, `Classe`, `Sub-Classe`, `Estilo de luta`, `Elemento`, `Imagem`, `Historia`)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt) {
    $stmt->bind_param(
        "sissdssssss",
        $nome,
        $idade,
        $sexo,
        $altura,
        $peso,
        $classe,
        $sub_classe,
        $estilo,
        $elemento,
        $imagem_nome, // Nome do arquivo da imagem
        $historia_nome // Nome do arquivo da história
    );

    if ($stmt->execute()) {
        session_start();
        $_SESSION["insert"] = "1"; // Sucesso
        header("Location: index.html");
    } else {
        session_start();
        $_SESSION["insert"] = "2"; // Falha na execução
        header("Location: index.html");
    }
    $stmt->close();
} else {
    echo "Erro na preparação do comando SQL: " . $conn->error;
}

$conn->close();
?>
