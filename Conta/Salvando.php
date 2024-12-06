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

    // Criptografa a senha antes de salvar
    $data['senha'] = password_hash($data['senha'], PASSWORD_DEFAULT);

    $stmt->execute($data);
}

// Função para buscar o personagem
function getCharacter($nome, $senha) {
    global $pdo;

    $sql = "SELECT * FROM personagens WHERE nome = :nome";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['nome' => $nome]);
    $character = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($character && password_verify($senha, $character['senha'])) {
        return $character;
    }

    return false;
}

// Processa a requisição do formulário

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? null;

    if ($action === 'save') {
        $data = [
            'nome' => strip_tags($_POST['nome']),
            'senha' => strip_tags($_POST['senha']),
            'raca' => strip_tags($_POST['raca']),
            'idade' => filter_var($_POST['idade'], FILTER_VALIDATE_INT),
            'sexo' => strip_tags($_POST['sexo']),
            'altura' => filter_var($_POST['altura'], FILTER_VALIDATE_FLOAT),
            'peso' => filter_var($_POST['peso'], FILTER_VALIDATE_FLOAT),
            'classe' => strip_tags($_POST['classe']),
            'subclasse' => strip_tags($_POST['subclasse']),
            'personalidade' => htmlspecialchars($_POST['personalidade'], ENT_QUOTES, 'UTF-8'),
            'status' => strip_tags($_POST['status']),
            'forca' => filter_var($_POST['forca'], FILTER_VALIDATE_INT),
            'agilidade' => filter_var($_POST['agilidade'], FILTER_VALIDATE_INT),
            'resistencia' => filter_var($_POST['resistencia'], FILTER_VALIDATE_INT),
            'karma' => filter_var($_POST['karma'], FILTER_VALIDATE_INT),
            'arma' => strip_tags($_POST['arma']),
            'secundaria' => strip_tags($_POST['secundaria']),
            'utilizavel1' => strip_tags($_POST['utilizavel1']),
            'utilizavel2' => strip_tags($_POST['utilizavel2']),
            'artefato1' => strip_tags($_POST['artefato1']),
            'artefato2' => strip_tags($_POST['artefato2']),
            'capacete' => strip_tags($_POST['capacete']),
            'peitoral' => strip_tags($_POST['peitoral']),
            'calca' => strip_tags($_POST['calca']),
            'calcado' => strip_tags($_POST['calcado']),
            'vitalidade' => filter_var($_POST['vitalidade'], FILTER_VALIDATE_INT),
            'fortitude' => filter_var($_POST['fortitude'], FILTER_VALIDATE_INT),
            'arcano' => filter_var($_POST['arcano'], FILTER_VALIDATE_INT),
            'percepcao' => filter_var($_POST['percepcao'], FILTER_VALIDATE_INT),
            'vida_espiritual' => filter_var($_POST['vida_espiritual'], FILTER_VALIDATE_INT),
        ];

        try {
            saveCharacter($data);
            echo "Ficha do personagem salva com sucesso!";
        } catch (Exception $e) {
            echo "Erro ao salvar a ficha: " . $e->getMessage();
        }
    } elseif ($action === 'search') {
        $nome = strip_tags($_POST['nome']);
        $senha = strip_tags($_POST['senha']);

        $character = getCharacter($nome, $senha);

        if ($character) {
            echo json_encode($character);
        } else {
            echo "Nenhum personagem encontrado ou senha incorreta.";
        }
    }
}
?>
