<?php
session_start();  // Inicia uma sessão para armazenar informações do usuário

// Conexão com o banco de dados
$servername = "127.0.0.1";
$username = "root";  // Nome de usuário do banco de dados
$password = "";  // Senha do banco de dados
$dbname = "descronic";  // Nome do banco de dados

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Verifica se os dados foram enviados pelo formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $senha = $_POST['senha'];

    // Prepara a consulta para buscar o usuário pelo nome
    $stmt = $conn->prepare("SELECT id, nome, senha, imagem_perfil, bio FROM conta WHERE nome = ?");
    $stmt->bind_param("s", $nome);  // "s" significa que o parâmetro é do tipo string
    $stmt->execute();
    $result = $stmt->get_result();

    // Verifica se o usuário existe
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verifica a senha usando password_verify()
        if (password_verify($senha, $user['senha'])) {
            // Login bem-sucedido, armazena as informações do usuário na sessão
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['nome'];
            $_SESSION['user_image'] = $user['imagem_perfil'];
            $_SESSION['user_bio'] = $user['bio'];

            // Redireciona para a página de perfil
            header("Location: perfil.php");
            exit();
        } else {
            echo "<script>alert('Senha incorreta. Tente novamente.'); window.location.href = 'Visualizar.html';</script>";
        }
    } else {
        echo "<script>alert('Usuário não encontrado.'); window.location.href = 'Visualizar.html';</script>";
    }

    // Fecha a conexão
    $stmt->close();
    $conn->close();
}
?>
