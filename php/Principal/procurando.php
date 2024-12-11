<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $senha = $_POST['senha']; // Recupera a senha enviada pelo formulário
    $senha_hash = password_hash($senha, PASSWORD_BCRYPT); // Usa bcrypt para fazer o hash da senha

    include_once('conectar.php');

    // Verifica se o nome de usuário já existe
    $stmt_check_user = $conn->prepare("SELECT id FROM conta WHERE nome = ?");
    $stmt_check_user->bind_param("s", $nome);
    $stmt_check_user->execute();
    $stmt_check_user->store_result();

    if ($stmt_check_user->num_rows > 0) {
        echo "<script>alert('Esse nome de usuário já existe. Tente outro.'); window.location.href = 'usuario.html';</script>";
        exit();
    }

    // Prepara a consulta SQL para inserir os dados na tabela `conta` com prepared statement
    $stmt_conta = $conn->prepare("INSERT INTO conta (nome, senha) VALUES (?, ?)");
    if ($stmt_conta === false) {
        die("Erro ao preparar a consulta: " . $conn->error);
    }

    $stmt_conta->bind_param("ss", $nome, $senha_hash); // "ss" significa dois parâmetros do tipo string

    // Executa a consulta para a tabela `conta`
    if (!$stmt_conta->execute()) {
        echo "<script>alert('Erro ao criar a conta. Tente novamente.'); window.location.href = 'usuario.html';</script>";
        exit(); // Interrompe a execução após o erro
    }

    // Recupera o ID do usuário recém-criado
    $user_id = $stmt_conta->insert_id;

    // Fecha a declaração
    $stmt_conta->close();
    $stmt_check_user->close();

    // Redireciona para a página do perfil do usuário
    echo "<script>alert('Conta criada com sucesso!'); window.location.href = 'perfil.php?id=" . $user_id . "';</script>";

    // Fecha a conexão
    $conn->close();
}
?>
