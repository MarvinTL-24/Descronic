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

// Receber os dados do formulário
$nome = $_POST['nome'];
$senha = $_POST['senha'];
$raça = $_POST['Raça'];
$idade = $_POST['idade'];
$sexo = $_POST['sexo'];
$altura = $_POST['altura'];
$peso = $_POST['peso'];
$classe = $_POST['Classe'];
$subclasse = $_POST['subclasse'];
$estilo = $_POST['Estilo'];
$personalidade = $_POST['personalidade'];
$status = $_POST['status'];
$forca = $_POST['forca'];
$agilidade = $_POST['agilidade'];
$resistencia = $_POST['resistencia'];
$karma = $_POST['karma'];

$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// 1. Inserir na tabela `conta` (para salvar nome e senha)
$sql_conta = "INSERT INTO conta (nome, senha) VALUES ('$nome', '$senha_hash')";
if ($conn->query($sql_conta) !== TRUE) {
    die("Erro ao salvar na tabela conta: " . $conn->error);
}

// 2. Inserir na tabela `personagens` (para salvar os dados do personagem)
$sql_personagem = "INSERT INTO personagens (nome, senha, raça, idade, sexo, altura, peso, classe, subclasse, estilo, personalidade, status, forca, agilidade, resistencia, karma)
VALUES ('$nome', '$senha_hash', '$raça', '$idade', '$sexo', '$altura', '$peso', '$classe', '$subclasse', '$estilo', '$personalidade', '$status', '$forca', '$agilidade', '$resistencia', '$karma')";

if ($conn->query($sql_personagem) === TRUE) {
    echo "Ficha salva com sucesso!";
} else {
    echo "Erro ao salvar na tabela personagens: " . $conn->error;
}

// Fechar a conexão
$conn->close();
?>