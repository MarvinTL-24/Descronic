<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $senha = $_POST['senha']; // Recupera a senha enviada pelo formulário
    $senha_hash = password_hash($senha, PASSWORD_BCRYPT); // Usa bcrypt para fazer o hash da senha

    // Conexão com o banco de dados (substitua os parâmetros de conexão conforme necessário)
    $servername = "localhost";
    $username = "root";  // Altere conforme o seu banco de dados
    $password = "";  // Altere conforme o seu banco de dados
    $dbname = "descronic";  // Substitua pelo nome do seu banco

    // Cria a conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Prepara a consulta SQL para inserir os dados na tabela `conta` com prepared statement
    $stmt_conta = $conn->prepare("INSERT INTO conta (nome, senha) VALUES (?, ?)");
    if ($stmt_conta === false) {
        die("Erro ao preparar a consulta: " . $conn->error);
    }

    $stmt_conta->bind_param("ss", $nome, $senha_hash); // "ss" significa dois parâmetros do tipo string

    // Executa a consulta para a tabela `conta`
    if (!$stmt_conta->execute()) {
        echo "<script>alert('Erro ao criar a conta. Tente novamente.'); window.location.href = '../Criando.html';</script>";
        exit(); // Interrompe a execução após o erro
    }

    // Sucesso na criação da conta
    echo "<script>alert('Conta criada com sucesso!'); window.location.href = 'login.html';</script>";

    // Fecha a declaração preparada e a conexão
    $stmt_conta->close();
    $conn->close();
}
?>
