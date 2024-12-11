<?php
session_start(); // Inicia a sessão para pegar dados do usuário logado

// Verifica se o ID do usuário está na sessão (usuário logado)
if (!isset($_SESSION['user_id'])) {
    echo "Você precisa estar logado para acessar esta página.";
    exit();
}

$user_id = $_SESSION['user_id']; // Pegando o ID do usuário logado

// Conexão com o banco de dados
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "descronic";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para pegar as informações do usuário
$stmt = $conn->prepare("SELECT nome, imagem_perfil, bio FROM conta WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->bind_result($nome, $imagem_perfil, $bio);
$stmt->fetch();
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil de <?php echo htmlspecialchars($nome); ?></title>
    <link rel="stylesheet" href="style/modelos/visualizar.css">
</head>
<body>
    <!-- Barra de Navegação -->
    <nav id="navbar1">
        <ul>
            <li><a href="perfil.php">Perfil</a></li>
            <li><a href="equipamentos.php">Equipamentos</a></li>
            <li><a href="status.php">Status</a></li>
            <li><a href="editar_personagem.php">Editar Personagem</a></li>
            <li><a href="logout.php">SAIR</a></li>
        </ul>
    </nav>

    <div class="perfil-container">
        <h2>Perfil de <?php echo htmlspecialchars($nome); ?></h2>

        <!-- Exibir Imagem de Perfil -->
        <div class="character-image">
            <label for="characterImage">Imagem do Personagem:</label>
            <img src="<?php echo $imagem_perfil ? $imagem_perfil : 'uploads/default.jpg'; ?>" alt="Imagem do Perfil" id="profileImagePreview" class="profile-image">
            <input type="file" id="characterImage" name="characterImage" onchange="previewImage(event)">
        </div>

        <!-- Exibir e editar Bio -->
        <div class="bio">
            <h3>Biografia</h3>
            <textarea id="bio" name="bio" rows="4" cols="50"><?php echo htmlspecialchars($bio); ?></textarea>
        </div>

        <!-- Botão para salvar as alterações -->
        <button id="saveChanges" type="button" onclick="saveProfileChanges()">Salvar Alterações</button>

        <div class="edit-options">
            <h3>Escolha o que deseja editar:</h3>
            <ul>
                <li><a href="itens.php">Itens</a></li>
                <li><a href="status.php">Status</a></li>
            </ul>
        </div>
    </div>

    <script>
        // Função para exibir a imagem escolhida
        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function () {
                const output = document.getElementById('profileImagePreview');
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        // Função para salvar as alterações no perfil
        function saveProfileChanges() {
            const bio = document.getElementById('bio').value;
            const image = document.getElementById('characterImage').files[0];

            const formData = new FormData();
            formData.append('bio', bio);
            formData.append('image', image);

            // Enviar dados via AJAX para o servidor
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'save_profile_changes.php', true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    alert('Perfil atualizado com sucesso!');
                } else {
                    alert('Erro ao atualizar o perfil.');
                }
            };
            xhr.send(formData);
        }
    </script>
</body>
</html>
