<?php
// Configuração do banco de dados
$host = 'localhost';
$dbname = 'rpg_database';
$user = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}

// Função para salvar ou atualizar a ficha do personagem
function saveCharacter($data) {
    global $pdo;

    $sql = "INSERT INTO personagens (nome, raca, idade, sexo, altura, peso, classe, subclasse, 
            personalidade, status, forca, agilidade, resistencia, karma, arma, secundaria, utilizavel1, 
            utilizavel2, artefato1, artefato2, capacete, peitoral, calca, calcado)
            VALUES (:nome, :raca, :idade, :sexo, :altura, :peso, :classe, :subclasse, :personalidade, 
            :status, :forca, :agilidade, :resistencia, :karma, :arma, :secundaria, :utilizavel1, :utilizavel2, 
            :artefato1, :artefato2, :capacete, :peitoral, :calca, :calcado)
            ON DUPLICATE KEY UPDATE
            raca = :raca, idade = :idade, sexo = :sexo, altura = :altura, peso = :peso, classe = :classe, 
            subclasse = :subclasse, personalidade = :personalidade, status = :status, forca = :forca, 
            agilidade = :agilidade, resistencia = :resistencia, karma = :karma, arma = :arma, secundaria = :secundaria, 
            utilizavel1 = :utilizavel1, utilizavel2 = :utilizavel2, artefato1 = :artefato1, artefato2 = :artefato2, 
            capacete = :capacete, peitoral = :peitoral, calca = :calca, calcado = :calcado";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebendo os dados do formulário
    $data = [
        'nome' => $_POST['nome'],
        'raca' => $_POST['raca'],
        'idade' => $_POST['idade'],
        'sexo' => $_POST['sexo'],
        'altura' => $_POST['altura'],
        'peso' => $_POST['peso'],
        'classe' => $_POST['classe'],
        'subclasse' => $_POST['subclasse'],
        'personalidade' => $_POST['personalidade'],
        'status' => $_POST['status'],
        'forca' => $_POST['forca'],
        'agilidade' => $_POST['agilidade'],
        'resistencia' => $_POST['resistencia'],
        'karma' => $_POST['karma'],
        'arma' => $_POST['arma'],
        'secundaria' => $_POST['secundaria'],
        'utilizavel1' => $_POST['utilizavel1'],
        'utilizavel2' => $_POST['utilizavel2'],
        'artefato1' => $_POST['artefato1'],
        'artefato2' => $_POST['artefato2'],
        'capacete' => $_POST['capacete'],
        'peitoral' => $_POST['peitoral'],
        'calca' => $_POST['calca'],
        'calcado' => $_POST['calcado']
    ];

    // Salvando ou atualizando a ficha do personagem
    try {
        saveCharacter($data);
        echo "Ficha do personagem salva com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao salvar a ficha: " . $e->getMessage();
    }
}
?>
