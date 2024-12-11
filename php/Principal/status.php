<?php
// Incluir conexão com o banco de dados
include_once('conectar.php');

// Simulação: ID da conta do usuário logado (use $_SESSION em aplicações reais)
$conta_id = 1; // Exemplo fixo. Use $_SESSION['conta_id'] para obter dinamicamente.

// Consultar os personagens da conta
$sql = "SELECT id, nome FROM personagens WHERE conta_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $conta_id);
$stmt->execute();
$result = $stmt->get_result();

$personagens = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $personagens[] = $row; // Adiciona cada personagem no array
    }
}
$stmt->close();
$conn->close();
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status do Personagem</title>
</head>
<body>
    <h1>Status do Personagem ID: <?php echo $personagem_id; ?></h1>
    <ul>
        <li>Vitalidade: <?php echo $status['vitalidade']; ?></li>
        <li>Agilidade: <?php echo $status['agilidade']; ?></li>
        <li>Fortitude: <?php echo $status['fortitude']; ?></li>
        <li>Arcano: <?php echo $status['arcano']; ?></li>
        <li>Resistência: <?php echo $status['resistencia']; ?></li>
        <li>Percepção: <?php echo $status['percepcao']; ?></li>
        <li>Vida Espiritual: <?php echo $status['vidaEspiritual']; ?></li>
    </ul>

    <p>Altere os status conforme necessário:</p>
    <form method="POST" action="atualizar_status.php">
        <input type="hidden" name="personagem_id" value="<?php echo $personagem_id; ?>">
        <label>Vitalidade: <input type="number" name="vitalidade" value="<?php echo $status['vitalidade']; ?>"></label><br>
        <label>Agilidade: <input type="number" name="agilidade" value="<?php echo $status['agilidade']; ?>"></label><br>
        <label>Fortitude: <input type="number" name="fortitude" value="<?php echo $status['fortitude']; ?>"></label><br>
        <label>Arcano: <input type="number" name="arcano" value="<?php echo $status['arcano']; ?>"></label><br>
        <label>Resistência: <input type="number" name="resistencia" value="<?php echo $status['resistencia']; ?>"></label><br>
        <label>Percepção: <input type="number" name="percepcao" value="<?php echo $status['percepcao']; ?>"></label><br>
        <label>Vida Espiritual: <input type="number" name="vidaEspiritual" value="<?php echo $status['vidaEspiritual']; ?>"></label><br>
        <button type="submit">Salvar Alterações</button>
    </form>
</body>
</html>
