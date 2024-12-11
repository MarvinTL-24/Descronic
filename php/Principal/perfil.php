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
$username = "Descrente24";
$password = "Descrente&amor300p";
$dbname = " descronic's";

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
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #121212; /* Fundo escuro para o corpo */
            color: #ffffff; /* Cor do texto para branco */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
        }

        #navbar1 {
            position: fixed; /* Mantém a barra fixa na tela */
            top: 0;
            left: 0;
            width: 220px; /* Largura da navbar */
            height: 100%; /* Ocupa toda a altura da tela */
            background-color: #1e1e1e; /* Cor de fundo escura */
            z-index: 1000; /* Garante que fique acima de outros elementos */
            display: flex;
            flex-direction: column;
            padding: 20px;
            box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
        }

        #navbar1 ul {
            list-style: none; /* Remove o estilo de lista */
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px; /* Espaçamento entre os links */
        }

        #navbar1 li {
            display: block;
        }

        #navbar1 a {
            text-decoration: none;
            color: #ffffff; /* Cor do texto */
            font-size: 1rem;
            transition: color 0.3s;
        }

        #navbar1 a:hover {
            color: #f4a261; /* Cor laranja quando passa o mouse */
        }

        .perfil-container {
            max-width: 800px;
            width: 100%;
            padding: 30px;
            background-color: #1e1e1e; /* Fundo escuro para o container */
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Sombra mais intensa */
            margin-top: 100px; /* Para evitar sobreposição com a barra de navegação */
            transition: transform 0.3s ease-in-out; /* Efeito de transição */
        }

        .perfil-container:hover {
            transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
        }

        h2 {
            color: #f4a261; /* Título em laranja */
            text-align: center;
            margin-bottom: 20px;
        }

        .character-image {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
        }

        .character-image img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #f4a261;
            cursor: pointer;
        }

        .image-options {
            position: absolute;
            bottom: -40px;
            left: 0;
            width: 100%;
            background-color: #333;
            display: none;
            text-align: center;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .image-options a {
            color: #f4a261;
            text-decoration: none;
            font-size: 1rem;
            display: block;
            margin: 5px 0;
        }

        .image-options a:hover {
            color: #fff;
        }

        .bio {
            margin-bottom: 30px;
        }

        .bio h3 {
            color: #f4a261; /* Cor laranja para o título da bio */
            margin-bottom: 10px;
        }

        textarea {
            width: 100%;
            padding: 12px;
            margin-top: 5px;
            border-radius: 8px;
            border: 1px solid #ddd;
            background-color: #2c2c2c;
            color: #ffffff;
            font-size: 14px;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
        }

        textarea:focus {
            border-color: #f4a261; /* Foco laranja para textarea */
            background-color: #333333;
        }

        button {
            width: 100%;
            padding: 12px 24px;
            background-color: #f4a261; /* Cor de fundo do botão */
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
            margin-top: 10px;
        }

        button:hover {
            background-color: #e76f51; /* Cor do botão ao passar o mouse */
            transform: scale(1.05);
        }

        .edit-options {
            margin-top: 20px;
            text-align: center;
        }

        .edit-options h3 {
            color: #f4a261;
        }

        .edit-options ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .edit-options li a {
            color: #ffffff;
            font-size: 1rem;
            text-decoration: none;
        }

        .edit-options li a:hover {
            color: #f4a261;
        }

        @media (max-width: 768px) {
            .perfil-container {
                margin: 20px;
                padding: 20px;
            }

            button {
                width: 100%;
            }
        }

    </style>
</head>
<body>
    <!-- Barra de Navegação -->
    <nav id="navbar1">
        <ul>
            <li><a href="perfil.php">Perfil</a></li>
            <li><a href="#">Criar Personagem</a></li>
            <li><a href="#">Adicionar itens</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="logout.php">Sair</a></li>
        </ul>
    </nav>

    <div class="perfil-container">
        <h2>Perfil de <?php echo htmlspecialchars($nome); ?></h2>

        <!-- Exibir Imagem de Perfil com opções ao clicar -->
        <div class="character-image" onclick="toggleImageOptions()">
            <label for="characterImage"></label>
            <img src="<?php echo $imagem_perfil ? $imagem_perfil : 'uploads/default.jpg'; ?>" alt="Imagem do Perfil" id="profileImagePreview" class="profile-image">
            <div id="imageOptions" class="image-options">
                <a href="#" onclick="changeImage()">Mudar Imagem</a>
                <a href="#" onclick="viewImage()">Visualizar Imagem</a>
            </div>
            <input type="file" id="characterImage" name="characterImage" onchange="previewImage(event)" style="display: none;">
        </div>

        <!-- Exibir e editar Bio -->
        <div class="bio">
            <h3>Biografia</h3>
            <textarea id="bio" name="bio" rows="4" cols="50"><?php echo htmlspecialchars($bio); ?></textarea>
        </div>

        <!-- Botão para salvar as alterações -->
        <button id="saveChanges" type="button" onclick="saveProfileChanges()">Salvar Alterações</button>

        <div class="edit-options">
            <h3>Escolha o que deseja visualizar ?</h3>
            <ul>
            <li><a href="#">Caracteristicas</a></li>
                <li><a href="itens.php">Itens</a></li>
                <li><a href="status.php">Status</a></li>
            </ul>
        </div>
    </div>

    <script>
        // Função para mostrar/ocultar opções de imagem
        function toggleImageOptions() {
            const imageOptions = document.getElementById('imageOptions');
            imageOptions.style.display = imageOptions.style.display === 'block' ? 'none' : 'block';
        }

        // Função para alterar a imagem
        function changeImage() {
            document.getElementById('characterImage').click();  // Simula o clique no input de arquivo
            toggleImageOptions();  // Fecha as opções
        }

        // Função para visualizar a imagem
        function viewImage() {
            const imgSrc = document.getElementById('profileImagePreview').src;
            window.open(imgSrc, '_blank');  // Abre a imagem em uma nova janela
            toggleImageOptions();  // Fecha as opções
        }

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
