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
$senha = $conn->real_escape_string($senha);

// Busca os dados do personagem
$sql_personagem = "SELECT * FROM personagem WHERE nome = ? AND senha = ?";
$stmt = $conn->prepare($sql_personagem);
$stmt->bind_param("ss", $nome, $senha);
$stmt->execute();
$result_personagem = $stmt->get_result();

// Busca os itens do personagem
$sql_itens = "SELECT * FROM itens WHERE nome = ? AND senha = ?";
$stmt = $conn->prepare($sql_itens);
$stmt->bind_param("ss", $nome, $senha);
$stmt->execute();
$result_itens = $stmt->get_result();

// Busca os status do personagem
$sql_status = "SELECT * FROM status WHERE nome = ? AND senha = ?";
$stmt = $conn->prepare($sql_status);
$stmt->bind_param("ss", $nome, $senha);
$stmt->execute();
$result_status = $stmt->get_result();

// Verifica se o personagem existe
if ($result_personagem->num_rows > 0) {
    // Retorna os dados encontrados como JSON
    $personagem_data = $result_personagem->fetch_assoc();
    // Verifica se a senha é válida
    if (password_verify($senha, $personagem_data['senha'])) {
        // Se a senha estiver correta, redireciona para a página de sucesso
        header("Location: Ficha.html");  // Substitua "pagina_sucesso.php" pela página desejada
        $itens_data = $result_itens->fetch_assoc();
        $status_data = $result_status->fetch_assoc();
        $response = array(
            'nome' => $personagem_data['nome'],
            'raca' => $personagem_data['raca'],
            'idade' => $personagem_data['idade'],
            'peso' => $personagem_data['peso'],
            'altura' => $personagem_data['altura'],
            'classe' => $personagem_data['classe'],
            'subclasse' => $personagem_data['subclasse'],
            'personalidade' => $personagem_data['personalidade'],
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
        
        echo json_encode($response);
        exit();
    } else {
        // Se a senha estiver incorreta, redireciona para a página de erro
        header("Location: Visualizar.html"); // Exemplo de redirecionamento para erro
        exit(); // Evita que o script continue executando
    }
} else {
    // Se o personagem não for encontrado, redireciona para a página de erro
    header("Location: Visualizar.html ");
}
$stmt->close();
$conn->close();
?>