<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualizar</title>
    <link rel="stylesheet" href="./style/modelos/visualizar.css">
</head>
<body style="background-image: url('imagens/blackgrounds/primeiro.jpg');">
    <!-- Barra de Navegação -->
    <nav id="navbar1">
        <ul>
            <li><a href="index.html">Pagina Inicial</a></li>
            <li><a href="classe.html">Visualizar Classes</a></li>
            <li><a href="Personagem.html">Criar ficha de Personagem</a></li>
            <li><a href="equipamentos.html">Armadura</a></li>
            <li><a href="artefatos.html">Artefatos</a></li>
            <li><a href="itens.html">Itens</a></li>
            <li><a href="Visualizar.html.php">Seu Personagem</a></li>
        </ul>
    </nav>
    <div class="container">
        <h1>Ficha de Personagem</h1>
        <form action="Conta/Salvando.php" method="post">
            <input type="hidden" name="action" value="search">
            <label for="nome">Nome do Personagem:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required>
            <button type="submit">Buscar</button>
        </form>
        <div id="characterDetails">
            <h3>Detalhes do Personagem</h3>
            <form id="editForm">
                <div class="form-group">
                    <label for="editNome">Nome:</label>
                    <input type="text" id="editNome" name="nome" readonly>
                </div>
                <div class="form-group">
                    <label for="editSenha">Senha:</label>
                    <input type="password" id="editSenha" name="senha">
                </div>
                <div class="form-group">
                    <label for="editRaca">Raça:</label>
                    <input type="text" id="editRaca" name="raca" disabled>
                </div>
                <div class="form-group">
                    <label for="editIdade">Idade:</label>
                    <input type="number" id="editIdade" name="idade" disabled>
                </div>
                <div class="form-group">
                    <label for="editSexo">Sexo:</label>
                    <input type="text" id="editSexo" name="sexo">
                </div>
                <div class="form-group">
                    <label for="editAltura">Altura:</label>
                    <input type="number" step="0.01" id="editAltura" name="altura" disabled>
                </div>
                <div class="form-group">
                    <label for="editPeso">Peso:</label>
                    <input type="number" step="0.01" id="editPeso" name="peso" disabled>
                </div>
                <div class="form-group">
                    <label for="editClasse">Classe:</label>
                    <input type="text" id="editClasse" name="classe" disabled>
                </div>
                <div class="form-group">
                    <label for="editSubclasse">Subclasse:</label>
                    <input type="text" id="editSubclasse" name="subclasse" disabled>
                </div>
                <div class="form-group">
                    <label for="editPersonalidade">Personalidade:</label>
                    <textarea id="editPersonalidade" name="personalidade"></textarea>
                </div>
                <div class="form-group">
                    <label for="editStatus">Status:</label>
                    <textarea id="editStatus" name="status" disabled></textarea>
                </div>
                <div class="form-group">
                    <label for="editForca">Força:</label>
                    <input type="number" id="editForca" name="forca" disabled>
                </div>
                <div class="form-group">
                    <label for="editAgilidade">Agilidade:</label>
                    <input type="number" id="editAgilidade" name="agilidade" disabled>
                </div>
                <div class="form-group">
                    <label for="editResistencia">Resistência:</label>
                    <input type="number" id="editResistencia" name="resistencia" disabled>
                </div>
                <div class="form-group">
                    <label for="editKarma">Karma:</label>
                    <input type="number" id="editKarma" name="karma">
                </div>
                <div class="form-group">
                    <label for="editArma">Arma:</label>
                    <input type="text" id="editArma" name="arma">
                </div>
                <div class="form-group">
                    <label for="editSecundaria">Secundária:</label>
                    <input type="text" id="editSecundaria" name="secundaria">
                </div>
                <div class="form-group">
                    <label for="editUtilizavel1">Utilizável 1:</label>
                    <input type="text" id="editUtilizavel1" name="utilizavel1">
                </div>
                <div class="form-group">
                    <label for="editUtilizavel2">Utilizável 2:</label>
                    <input type="text" id="editUtilizavel2" name="utilizavel2">
                </div>
                <div class="form-group">
                    <label for="editArtefato1">Artefato 1:</label>
                    <input type="text" id="editArtefato1" name="artefato1">
                </div>
                <div class="form-group">
                    <label for="editArtefato2">Artefato 2:</label>
                    <input type="text" id="editArtefato2" name="artefato2">
                </div>
                <div class="form-group">
                    <label for="editCapacete">Capacete:</label>
                    <input type="text" id="editCapacete" name="capacete">
                </div>
                <div class="form-group">
                    <label for="editPeitoral">Peitoral:</label>
                    <input type="text" id="editPeitoral" name="peitoral">
                </div>
                <div class="form-group">
                    <label for="editCalca">Calça:</label>
                    <input type="text" id="editCalca" name="calca">
                </div>
                <div class="form-group">
                    <label for="editCalcado">Calçado:</label>
                    <input type="text" id="editCalcado" name="calcado">
                </div>
                <button type="submit">Salvar Alterações</button>
            </form>
        </div>
    </div>
    <div id="statusSection">
        <h3>Status Atuais do Personagem</h3>
        <div class="status-group">
            <p><strong>Vitalidade:</strong> <span id="statusVitalidade">0</span></p>
            <p><strong>Agilidade:</strong> <span id="statusAgilidade">0</span></p>
            <p><strong>Fortitude:</strong> <span id="statusFortitude">0</span></p>
            <p><strong>Força:</strong> <span id="statusForca">0</span></p>
            <p><strong>Arcano:</strong> <span id="statusArcano">0</span></p>
            <p><strong>Resistência:</strong> <span id="statusResistencia">0</span></p>
            <p><strong>Percepção:</strong> <span id="statusPercepcao">0</span></p>
            <p><strong>Vida Espiritual:</strong> <span id="statusVidaEspiritual">0</span></p>
        </div>
    </div>
    
    <script>
        const searchForm = document.getElementById('searchForm');
        const editForm = document.getElementById('editForm');
        const characterDetails = document.getElementById('characterDetails');

        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(searchForm);
            formData.append('action', 'search');

            fetch('Salvando.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    characterDetails.style.display = 'block';
                    document.getElementById('editNome').value = data.nome;
                    document.getElementById('editRaca').value = data.raca;
                    document.getElementById('editClasse').value = data.classe;
                    // Preencha outros campos aqui
                } else {
                    alert('Personagem não encontrado ou senha incorreta.');
                }
            })
            .catch(error => console.error('Erro:', error));
        });

        editForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(editForm);
            formData.append('action', 'save');

            fetch('Salvando.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => console.error('Erro:', error));
        });
        // Função para calcular status ajustados
        function calcularStatus(statusBase, ajustes) {
            const status = {
                vitalidade: statusBase.vitalidade || 0,
                agilidade: (statusBase.agilidade || 0) + (ajustes.agilidade || 0),
                fortitude: statusBase.fortitude || 0,
                forca: (statusBase.forca || 0) + (ajustes.forca || 0),
                arcano: statusBase.arcano || 0,
                resistencia: (statusBase.resistencia || 0) + (ajustes.resistencia || 0),
                percepcao: statusBase.percepcao || 0,
                vidaEspiritual: statusBase.vidaEspiritual || 0,
            };

            return status;
        }

        // Dados
        const statusBase = {
            
        };

        const ajustes = {
            
        };

        // Calcula e exibe os status finais
        const statusFinais = calcularStatus(statusBase, ajustes);
        document.getElementById('statusVitalidade').textContent = statusFinais.vitalidade;
        document.getElementById('statusAgilidade').textContent = statusFinais.agilidade;
        document.getElementById('statusFortitude').textContent = statusFinais.fortitude;
        document.getElementById('statusForca').textContent = statusFinais.forca;
        document.getElementById('statusArcano').textContent = statusFinais.arcano;
        document.getElementById('statusResistencia').textContent = statusFinais.resistencia;
        document.getElementById('statusPercepcao').textContent = statusFinais.percepcao;
        document.getElementById('statusVidaEspiritual').textContent = statusFinais.vidaEspiritual;

    </script>
    <?php
    // Simulação de dados da ficha do personagem
    $statusBase = [
        'vitalidade' => $character['status_vitalidade'],
        'agilidade' => $character['status_agilidade'],
        'fortitude' => $character['status_fortitude'],
        'forca' => $character['status_forca'],
        'arcano' => $character['status_arcano'],
        'resistencia' => $character['status_resistencia'],
        'percepcao' => $character['status_percepcao'],
        'vidaEspiritual' => $character['status_vidaEspiritual']
    ];

    // Ajustes com base nos atributos do personagem
    $ajustes = [
        'agilidade' => $ajusteAgilidade,
        'forca' => $ajusteForca,
        'resistencia' => $ajusteResistencia
    ];

    echo '<script>';
    echo 'const statusBase = ' . json_encode($statusBase) . ';';
    echo 'const ajustes = ' . json_encode($ajustes) . ';';
    echo '</script>';
    ?>

</body>
</html>
