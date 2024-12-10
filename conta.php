<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $raca = $_POST['Raça'];
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

    // Criptografa a senha
    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    // Conexão com o banco de dados (substitua os parâmetros de conexão conforme necessário)
    $servername = "localhost";
    $username = "root";  // Altere conforme o seu banco de dados
    $password = "Descrente&amor300p";  // Altere conforme o seu banco de dados
    $dbname = "Descrente24";  // Substitua pelo nome do seu banco

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Prepara a consulta SQL para inserir os dados na tabela `conta` com prepared statement
    $stmt_conta = $conn->prepare("INSERT INTO conta (nome, senha) VALUES (?, ?)");
    $stmt_conta->bind_param("ss", $nome, $senha_hash); // "ss" significa dois parâmetros do tipo string

    // Executa a consulta para a tabela `conta`
    if (!$stmt_conta->execute()) {
        echo "<script>alert('Erro ao criar a conta. Tente novamente.'); window.location.href = '../index.html';</script>";
        exit(); // Interrompe a execução após o erro
    }

    // Prepara a consulta SQL para inserir os dados na tabela `personagem` com prepared statement
    $stmt_personagem = $conn->prepare("INSERT INTO personagem (nome, senha, raca, idade, sexo, altura, peso, classe, subclasse, estilo, personalidade, status, forca, agilidade, resistencia, karma) 
                                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt_personagem->bind_param("ssssssssssssssss", $nome, $senha_hash, $raca, $idade, $sexo, $altura, $peso, $classe, $subclasse, $estilo, $personalidade, $status, $forca, $agilidade, $resistencia, $karma);

    // Executa a consulta para a tabela `personagem`
    if ($stmt_personagem->execute()) {
        echo "<script>alert('Ficha do personagem criada com sucesso!'); window.location.href = '../index.html';</script>";
    } else {
        echo "<script>alert('Erro ao criar a ficha do personagem. Tente novamente.'); window.location.href = '../index.html';</script>";
    }

    // Fecha as declarações preparadas e a conexão
    $stmt_conta->close();
    $stmt_personagem->close();
    $conn->close();
}
?>
