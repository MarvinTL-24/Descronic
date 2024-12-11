<?php
session_start();  // Inicia uma sessão para armazenar informações do usuário

include_once('conectar.php');  // Inclui o arquivo de conexão com o banco de dados

// Verifica se os dados foram enviados pelo formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];  // Recebe o nome enviado pelo formulário
    $senha = $_POST['senha'];  // Recebe a senha enviada pelo formulário

    // Prepara a consulta para buscar o usuário pelo nome
    $stmt = $conn->prepare("SELECT id, nome, senha, imagem_perfil, bio FROM conta WHERE nome = ?");
    $stmt->bind_param("s", $nome);  // "s" significa que o parâmetro é do tipo string
    $stmt->execute();
    $result = $stmt->get_result();

    // Verifica se o usuário existe
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();  // Obtém os dados do usuário
        
        // Verifica a senha usando password_verify() (supondo que a senha seja armazenada de forma segura)
        if (password_verify($senha, $user['senha'])) {
            // Login bem-sucedido, armazena as informações do usuário na sessão
            $_SESSION['user_id'] = $user['id'];  // Armazena o ID do usuário na sessão
            $_SESSION['user_name'] = $user['nome'];  // Armazena o nome do usuário na sessão
            $_SESSION['user_image'] = $user['imagem_perfil'];  // Armazena a imagem de perfil na sessão
            $_SESSION['user_bio'] = $user['bio'];  // Armazena a bio do usuário na sessão

            // Redireciona para a página de perfil
            header("Location: perfil.php");
            exit();
        } else {
            // Senha incorreta
            echo "<script>alert('Senha incorreta. Tente novamente.'); window.location.href = 'Visualizar.html';</script>";
        }
    } else {
        // Usuário não encontrado
        echo "<script>alert('Usuário não encontrado.'); window.location.href = 'Visualizar.html';</script>";
    }

    // Fecha a conexão com o banco de dados
    $stmt->close();
    $conn->close();
}
?>
