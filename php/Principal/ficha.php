<?php
session_start();
var_dump($_SESSION);  // Verificar o conteúdo da sessão
if (!isset($_SESSION['id'])) {
    echo "Usuário não está logado.";
    exit;
}

// Conecta ao banco de dados
include_once('conectar.php');

// Recupera o ID da conta do usuário logado
$conta_id = $_SESSION['id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    // Ação de buscar personagem
    if ($action === 'search') {
        $stmt = $conn->prepare("SELECT * FROM personagem WHERE conta_id = ?");
        $stmt->bind_param("i", $conta_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $personagem = $result->fetch_assoc();
            var_dump($personagem);  // Verificar os dados recuperados
            echo json_encode($personagem);
        } else {
            echo json_encode(['error' => 'Nenhum personagem encontrado.']);
        }
    }

    // Ação de salvar alterações
    if ($action === 'save') {
        $karma = intval($_POST['karma']);
        $estilo = $_POST['Estilo'];
        $imagem = null;

        // Processa o upload da imagem se enviada
        if (isset($_FILES['imagem']) && $_FILES['imagem']['error'] == 0) {
            $diretorio = 'uploads/';
            $nomeImagem = uniqid() . '_' . $_FILES['imagem']['name'];
            $caminhoImagem = $diretorio . $nomeImagem;

            if (move_uploaded_file($_FILES['imagem']['tmp_name'], $caminhoImagem)) {
                $imagem = $caminhoImagem;
            }
        }

        // Atualiza os dados no banco
        $stmt = $conn->prepare("UPDATE personagem SET karma = ?, estilo = ?, imagem = COALESCE(?, imagem) WHERE conta_id = ?");
        $stmt->bind_param("issi", $karma, $estilo, $imagem, $conta_id);

        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['error' => 'Erro ao atualizar personagem.']);
        }
        $stmt->close();
    }

    $conn->close();
}
?>
