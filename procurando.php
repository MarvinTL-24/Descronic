<?php

// Configuração do banco de dados
$host = "localhost";
$dbname = "dbname";
$user = "Descrente24";
$password = "Descrente&amor300p";

// Criando a conexão
$conn = new mysqli($host, $user, $password, $dbname);

// Checando a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Pega o nome e a senha do formulário
$nome = $_POST['nome'];
$senha = $_POST['senha'];

// Sanitizar a entrada (evitar SQL Injection)
$nome = $conn->real_escape_string($nome);

// Busca os dados do personagem (não se deve buscar senha diretamente no banco)
$sql_personagem = "SELECT nome, senha FROM personagem WHERE nome = ?";
$stmt = $conn->prepare($sql_personagem);
$stmt->bind_param("s", $nome);
$stmt->execute();
$result_personagem = $stmt->get_result();

// Verifica se o personagem foi encontrado
if ($result_personagem->num_rows > 0) {
    $personagem_data = $result_personagem->fetch_assoc();
    
    // Verifica se a senha fornecida é válida
    if (password_verify($senha, $personagem_data['senha'])) {
        
        // Busca os itens do personagem
        $sql_itens = "SELECT * FROM itens WHERE nome = ?";
        $stmt_itens = $conn->prepare($sql_itens);
        $stmt_itens->bind_param("s", $nome);
        $stmt_itens->execute();
        $result_itens = $stmt_itens->get_result();
        $itens_data = $result_itens->fetch_assoc();
        
        // Busca os status do personagem
        $sql_status = "SELECT * FROM status WHERE nome = ?";
        $stmt_status = $conn->prepare($sql_status);
        $stmt_status->bind_param("s", $nome);
        $stmt_status->execute();
        $result_status = $stmt_status->get_result();
        $status_data = $result_status->fetch_assoc();
        
        // Criação da resposta para o personagem
        $response = array(
            'nome' => $personagem_data['nome'],
            'raca' => $personagem_data['raca'],
            'idade' => $personagem_data['idade'],
            'peso' => $personagem_data['peso'],
            'altura' => $personagem_data['altura'],
            'classe' => $personagem_data['classe'],
            'subclasse' => $personagem_data['subclasse'],
            'personalidade' => $personagem_data['personalidade'],
            'estilo' => $personagem_data['estilo'],
            'karma' => $personagem_data['karma'],
            'imagem' => $personagem_data['imagem'],
            'arma' => $itens_data['arma'],
            'secundaria' => $itens_data['secundaria'],
            'utilizavel1' => $itens_data['utilizavel1'],
            'utilizavel2' => $itens_data['utilizavel2'],
            'artefato1' => $itens_data['artefato1'],
            'artefato2' => $itens_data['artefato2'],
            'capacete' => $itens_data['capacete'],
            'peitoral' => $itens_data['peitoral'],
            'calca' => $itens_data['calca'],
            'calcado' => $itens_data['calcado'],
            'vitalidade' => $status_data['vitalidade'],
            'agilidade' => $status_data['agilidade'],
            'fortitude' => $status_data['fortitude'],
            'arcano' => $status_data['arcano'],
            'resistencia' => $status_data['resistencia'],
            'percepcao' => $status_data['percepcao'],
            'vidaEspiritual' => $status_data['vidaEspiritual'],
        );
        
        // Envia a resposta como JSON
        echo json_encode($response);
        exit();
        
    } else {
        // Se a senha estiver incorreta
        header("Location: Visualizar.html");
        exit();
    }
} else {
    // Se o personagem não for encontrado
    header("Location: Visualizar.html");
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>
