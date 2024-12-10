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
$vitalidade = $_POST['vitalidade'];
$agilidade = $_POST['agilidade'];
$fortitude = $_POST['fortitude'];
$arcano = $_POST['arcano'];
$resistencia = $_POST['resistencia'];
$percepcao = $_POST['percepcao'];
$vidaEspiritual = $_POST['vidaEspiritual'];

// Buscar o personagem pelo nome e senha
$sql = "SELECT * FROM status WHERE nome = '$nome' AND senha = '$senha'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Personagem encontrado, atualiza os status
    $sql_update = "UPDATE status SET 
        vitalidade = '$vitalidade', 
        agilidade = '$agilidade', 
        fortitude = '$fortitude',
        arcano = '$arcano',
        resistencia = '$resistencia',
        percepcao = '$percepcao',
        vidaEspiritual = '$vidaEspiritual'
        WHERE nome = '$nome' AND senha = '$senha'";

    if ($conn->query($sql_update) === TRUE) {
        echo "Status atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar status: " . $conn->error;
    }
} else {
    echo "Personagem não encontrado.";
}

// Fechar a conexão
$conn->close();
?>