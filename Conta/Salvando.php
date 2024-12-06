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

    $sql = "INSERT INTO personagens (nome, senha, raca, idade, sexo, altura, peso, classe, subclasse, 
    personalidade, status, forca, agilidade, resistencia, karma, arma, secundaria, utilizavel1, 
    utilizavel2, artefato1, artefato2, capacete, peitoral, calca, calcado, vitalidade, fortitude, 
    arcano, percepcao, vida_espiritual)
VALUES (:nome, :senha, :raca, :idade, :sexo, :altura, :peso, :classe, :subclasse, :personalidade, 
    :status, :forca, :agilidade, :resistencia, :karma, :arma, :secundaria, :utilizavel1, :utilizavel2, 
    :artefato1, :artefato2, :capacete, :peitoral, :calca, :calcado, :vitalidade, :fortitude, 
    :arcano, :percepcao, :vida_espiritual)
ON DUPLICATE KEY UPDATE
    senha = :senha, raca = :raca, idade = :idade, sexo = :sexo, altura = :altura, peso = :peso, classe = :classe, 
    subclasse = :subclasse, personalidade = :personalidade, status = :status, forca = :forca, 
    agilidade = :agilidade, resistencia = :resistencia, karma = :karma, arma = :arma, secundaria = :secundaria, 
    utilizavel1 = :utilizavel1, utilizavel2 = :utilizavel2, artefato1 = :artefato1, artefato2 = :artefato2, 
    capacete = :capacete, peitoral = :peitoral, calca = :calca, calcado = :calcado, vitalidade = :vitalidade, 
    fortitude = :fortitude, arcano = :arcano, percepcao = :percepcao, vida_espiritual = :vida_espiritual;";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
}

// Função para buscar o personagem
function getCharacter($nome, $senha) {
    global $pdo;

    $sql = "SELECT * FROM personagens WHERE nome = :nome AND senha = :senha";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['nome' => $nome, 'senha' => $senha]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'save') {
        // Recebendo os dados do formulário para salvar
        $data = [
            'nome' => $_POST['nome'],
            'senha' => $_POST['senha'],
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
            'calcado' => $_POST['calcado'],
            'vitalidade' => $_POST['vitalidade'],
            'fortitude' => $_POST['fortitude'],
            'arcano' => $_POST['arcano'],
            'percepcao' => $_POST['percepcao'],
            'vida_espiritual' => $_POST['vida_espiritual']
        ];
        

        // Salvando ou atualizando a ficha do personagem
        try {
            saveCharacter($data);
            echo "Ficha do personagem salva com sucesso!";
        } catch (Exception $e) {
            echo "Erro ao salvar a ficha: " . $e->getMessage();
        }
    } elseif (isset($_POST['action']) && $_POST['action'] === 'search') {
        // Recebendo os dados do formulário para buscar
        $nome = $_POST['nome'];
        $senha = $_POST['senha'];

        $character = getCharacter($nome, $senha);

        if ($character) {
            echo json_encode($character);
        } else {
            echo "Nenhum personagem encontrado ou senha incorreta.";
        }
    }
}
?>
