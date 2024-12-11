<?php
include_once('conectar.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $personagem_id = intval($_POST['personagem_id']);
    $vitalidade = intval($_POST['vitalidade']);
    $agilidade = intval($_POST['agilidade']);
    $fortitude = intval($_POST['fortitude']);
    $arcano = intval($_POST['arcano']);
    $resistencia = intval($_POST['resistencia']);
    $percepcao = intval($_POST['percepcao']);
    $vidaEspiritual = intval($_POST['vidaEspiritual']);

    $sql = "UPDATE status SET 
                vitalidade = ?, 
                agilidade = ?, 
                fortitude = ?, 
                arcano = ?, 
                resistencia = ?, 
                percepcao = ?, 
                vidaEspiritual = ? 
            WHERE personagem_id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "iiiiiiii",
        $vitalidade,
        $agilidade,
        $fortitude,
        $arcano,
        $resistencia,
        $percepcao,
        $vidaEspiritual,
        $personagem_id
    );

    if ($stmt->execute()) {
        echo "Status atualizados com sucesso!";
    } else {
        echo "Erro ao atualizar os status: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    die("Método inválido.");
}
?>
