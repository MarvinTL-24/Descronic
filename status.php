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

// Receber os dados do formulário e sanitizar para evitar XSS ou outros problemas
$nome = mysqli_real_escape_string($conn, $_POST['nome']);
$senha = $_POST['senha'];  // A senha deve ser comparada com um hash no banco de dados
$vitalidade = mysqli_real_escape_string($conn, $_POST['vitalidade']);
$agilidade = mysqli_real_escape_string($conn, $_POST['agilidade']);
$fortitude = mysqli_real_escape_string($conn, $_POST['fortitude']);
$arcano = mysqli_real_escape_string($conn, $_POST['arcano']);
$resistencia = mysqli_real_escape_string($conn, $_POST['resistencia']);
$percepcao = mysqli_real_escape_string($conn, $_POST['percepcao']);
$vidaEspiritual = mysqli_real_escape_string($conn, $_POST['vidaEspiritual']);

// Buscar o personagem pelo nome (não deve ser feito por senha diretamente em uma consulta simples)
// Use uma consulta preparada e compare a senha com o hash armazenado no banco de dados
$sql = "SELECT senha FROM status WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nome); // "s" indica que é uma string
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Verifica se a senha fornecida é válida
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        // Senha verificada, agora podemos atualizar os status
        $sql_update = "UPDATE status SET 
            vitalidade = ?, 
            agilidade = ?, 
            fortitude = ?, 
            arcano = ?, 
            resistencia = ?, 
            percepcao = ?, 
            vidaEspiritual = ? 
            WHERE nome = ?";

        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->bind_param("ssssssss", $vitalidade, $agilidade, $fortitude, $arcano, $resistencia, $percepcao, $vidaEspiritual, $nome);

        if ($stmt_update->execute()) {
            echo "Status atualizado com sucesso!";
        } else {
            echo "Erro ao atualizar status: " . $stmt_update->error;
        }
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Personagem não encontrado.";
}

// Fechar as conexões
$stmt->close();
$stmt_update->close();
$conn->close();
?>
