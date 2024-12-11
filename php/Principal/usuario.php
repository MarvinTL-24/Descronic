<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $nome = $_POST['nome'];
    $senha = $_POST['senha']; // Senha do usuário
    $bio = $_POST['bio']; // Biografia

    // Faz o hash da senha usando bcrypt
    $senha_hash = password_hash($senha, PASSWORD_BCRYPT);

    // Conexão com o banco de dados
    $servername = "127.0.0.1"; // Servidor local
    $username = "root";  // Usuário do MySQL
    $password = "";  // Senha do MySQL
    $dbname = "descronic";  // Nome do banco de dados

    // Cria a conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica se a conexão foi bem-sucedida
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    // Verifica se foi enviado uma imagem
    $imagem_perfil = null; // Inicializa a variável para a imagem

    if (isset($_FILES['imagem_perfil']) && $_FILES['imagem_perfil']['error'] === UPLOAD_ERR_OK) {
        // Caminho para salvar a imagem no servidor
        $upload_dir = 'uploads/'; // Pasta para armazenar as imagens
        $imagem_perfil = $upload_dir . basename($_FILES['imagem_perfil']['name']);
        
        // Verifica se a pasta uploads existe, se não, cria
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true); // Cria a pasta com permissões adequadas
        }
        
        // Tenta mover o arquivo para o diretório de uploads
        if (move_uploaded_file($_FILES['imagem_perfil']['tmp_name'], $imagem_perfil)) {
            echo "Imagem carregada com sucesso!";
        } else {
            echo "Erro ao mover o arquivo para o diretório uploads.";
        }
    } else {
        echo "Erro no envio do arquivo: " . $_FILES['imagem_perfil']['error'];
    }
    

    // Prepara a consulta SQL para inserir os dados na tabela `conta`
    $stmt = $conn->prepare("INSERT INTO conta (nome, senha, imagem_perfil, bio) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $senha_hash, $imagem_perfil, $bio); // "ssss" significa 4 parâmetros do tipo string

    // Executa a consulta
    if ($stmt->execute()) {
        // Sucesso ao salvar no banco de dados
        echo "<script>alert('Conta criada com sucesso!'); window.location.href = 'perfil.php';</script>";
    } else {
        // Se ocorreu algum erro
        echo "<script>alert('Erro ao criar a conta. Tente novamente.'); window.location.href = 'usuario.html';</script>";
    }

    // Fecha a declaração e a conexão
    $stmt->close();
    $conn->close();
}
?>
