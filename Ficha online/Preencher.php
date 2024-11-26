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
$conn = new mysqli('localhost', 'root', '', 'criação_de_personagem');
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

// Comando SQL preparado para evitar injeção
$sql = "INSERT INTO `criação` (`Nome`, `Idade`, `Sexo`, `Altura`, `Peso`, `Classe`, `Sub-Classe`, `Estilo de luta`, `Elemento`)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if ($stmt) {
    $stmt->bind_param(
        "sissdssss",
        $nome,
        $idade,
        $sexo,
        $altura,
        $peso,
        $classe,
        $sub_classe,
        $estilo,
        $elemento
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
