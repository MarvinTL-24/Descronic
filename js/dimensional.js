// Dados dos bosses (exemplo - você pode expandir)
    const bossesData = {
        "ahpuch": {
            name: "AH PUCH",
            title: "BOSS MAIA",
            description: "Ah Puch é o deus maia da morte e do submundo, conhecido como 'O Senhor da Morte'. Ele governa sobre o reino dos mortos e é frequentemente representado como um esqueleto ou cadáver em decomposição.",
            mythology: "Na mitologia maia, Ah Puch é o deus da morte, governante do mais baixo dos nove mundos subterrâneos. É associado com guerras, sacrifícios humanos e desastres naturais.",
            abilities: [
                "Invocação de Espectros",
                "Controle sobre Doenças",
                "Manipulação da Escuridão",
                "Necromancia Avançada"
            ],
            weaknesses: [
                "Luz Solar",
                "Símbolos Sagrados",
                "Magia de Cura"
            ],
            stats: {
                power: 95,
                defense: 80,
                speed: 60,
                magic: 90
            }
        },
        "atlas": {
            name: "ATLAS",
            title: "MINI BOSS GREGO",
            description: "Atlas é um titã condenado por Zeus a carregar o céu sobre seus ombros por toda a eternidade. Sua força é incomparável, mas seu fardo o torna vulnerável.",
            mythology: "Na mitologia grega, Atlas liderou os titãs na guerra contra os deuses do Olimpo. Após a derrota, foi condenado a sustentar o céu para sempre.",
            abilities: [
                "Força Titânica",
                "Resistência Sobrenatural",
                "Controle da Gravidade",
                "Durabilidade Extrema"
            ],
            weaknesses: [
                "Movimento Limitado",
                "Fadiga Cumulativa",
                "Artimanhas e Estratégias"
            ],
            stats: {
                power: 99,
                defense: 95,
                speed: 30,
                magic: 40
            }
        },
        "anubis": {
            name: "ANUBIS",
            title: "BOSS EGÍPCIO",
            description: "Anúbis é o deus egípcio da mumificação e do submundo, guardião das almas e juiz dos mortos. Ele pesa o coração dos falecidos contra a pena da verdade.",
            mythology: "Filho de Osíris e Néftis, Anúbis é um dos deuses mais antigos do panteão egípcio. Preside o processo de mumificação e protege os túmulos.",
            abilities: [
                "Julgamento das Almas",
                "Controle sobre a Morte",
                "Proteção de Túmulos",
                "Transformação Canina"
            ],
            weaknesses: [
                "Rituais de Purificação",
                "Nome Verdadeiro",
                "Símbolos de Vida Eterna"
            ],
            stats: {
                power: 85,
                defense: 75,
                speed: 70,
                magic: 95
            }
        },
        "baldur": {
            name: "BALDUR",
            title: "MINI BOSS VIKING",
            description: "Baldur é o deus nórdico da luz, pureza e beleza. Conhecido por sua invulnerabilidade, sua única fraqueza é o visco.",
            mythology: "Filho de Odin e Frigg, Baldur era tão amado que sua mãe fez todos os seres da Terra jurar não machucá-lo, esquecendo-se apenas do visco.",
            abilities: [
                "Invulnerabilidade",
                "Manipulação da Luz",
                "Presença Inspiradora",
                "Cura Divina"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 75,
                defense: 100,
                speed: 65,
                magic: 85
            }
        },
        "iztamina": {
            name: "IZTAMINA",
            title: "MINI BOSS MAIA",
            description: "Iztamna é o deus maia do céu, da noite e do dia. Considerado o inventor da escrita e dos livros na mitologia maia.",
            mythology: "Filho de Hunab Ku, Iztamna é um dos deuses criadores na mitologia maia, associado ao conhecimento, medicina e agricultura.",
            abilities: [
                "Controle do Céu",
                "Criação de Conhecimento",
                "Manipulação Temporal",
                "Cura Ancestral"
            ],
            weaknesses: [
                "Ignorância",
                "Magia Caótica",
                "Quebra de Tradições"
            ],
            stats: {
                power: 70,
                defense: 60,
                speed: 75,
                magic: 95
            }
        },
        "forseti": {
            name: "FORSETI",
            title: "BOSS VIKING",
            description: "Forseti é o deus nórdico da justiça e da reconciliação. Conhecido por sua sabedoria e habilidade em resolver disputas entre deuses e mortais.",
            mythology: "Filho de Balder e Nanna, Forseti é reverenciado como um deus justo que preside as assembleias e resolve conflitos com imparcialidade.",
            abilities: [
                "Julgamento Imparcial",
                "Persuasão Divina",
                "Sabedoria Suprema",
                "Paz Restauradora"
            ],
            weaknesses: [
                "Injustiça",
                "Desespero",
                "Conflitos Internos"
            ],
            stats: {
                power: 80,
                defense: 85,
                speed: 70,
                magic: 90
            }
        },
        "rei dragão": {
            name: "REI DRAGÃO",
            title: "BOSS CHINES",
            description: "O Rei Dragão é uma entidade poderosa na mitologia chinesa, governando os mares e controlando as chuvas. Ele é reverenciado como um símbolo de força e boa sorte.",
            mythology: "Na mitologia chinesa, o Rei Dragão é um ser divino que habita os oceanos e é responsável por regular o clima e as águas.",
            abilities: [
                "Controle das Águas",
                "Manipulação do Clima",
                "Força Descomunal",
                "Transformação Dracônica"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 90,
                defense: 85,
                speed: 75,
                magic: 80
            }
        },
        "poseidon": {
            name: "POSEIDON",
            title: "BOSS GREGO",
            description: "Poseidon é o deus grego do mar, da terra e do trovão. Ele é conhecido por sua força e controle sobre os oceanos.",
            mythology: "Poseidon é um dos doze deuses olímpicos, governando o mar e os terremotos. Ele é frequentemente representado com um tridente.",
            abilities: [
                "Controle do Mar",
                "Manipulação de Terremotos",
                "Força Suprema",
                "Criação de Tempestades"
            ],
            weaknesses: [
                "Fúria Incontrolável",
                "Desespero",
                "Conflitos Internos"
            ],
            stats: {
                power: 95,
                defense: 80,
                speed: 70,
                magic: 85
            }
        },
        "tupã": {
            name: "TUPÃ",
            title: "MINI BOSS INDIGENA",
            description: "Tupã é o deus tupi-guarani do trovão, relâmpago e tempestade. Ele é considerado o criador do mundo e o responsável pela chuva que fertiliza a terra.",
            mythology: "Na mitologia tupi-guarani, Tupã é o deus supremo que criou o céu, a terra e todos os seres vivos. Ele é associado ao trovão e à fertilidade.",
            abilities: [
                "Controle do Trovão",
                "Manipulação do Clima",
                "Criação da Vida",
                "Força Divina"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 85,
                defense: 80,
                speed: 75,
                magic: 90
            }
        },
        "yepa belo": {
            name: "YEPA BELO",
            title: "BOSS INDIGENA",
            description: "Yepa Belo é um deus tupi-guarani associado à beleza, amor e fertilidade. Ele é reverenciado como um protetor das florestas e dos animais.",
            mythology: "Na mitologia tupi-guarani, Yepa Belo é um deus que simboliza a harmonia entre os seres humanos e a natureza, promovendo o amor e a beleza.",
            abilities: [
                "Encanto Natural",
                "Comunicação com Animais",
                "Cura da Natureza",
                "Manipulação da Beleza"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 80,
                defense: 85,
                speed: 70,
                magic: 95
            }
        },
        "wukong": {
            name: "WUKONG",
            title: "MINI BOSS CHINES",
            description: "Wukong, também conhecido como o Rei Macaco, é uma figura lendária na mitologia chinesa. Ele é conhecido por sua astúcia, força e habilidades mágicas.",
            mythology: "Wukong é um personagem central no clássico romance chinês 'Jornada ao Oeste'. Ele é um macaco imortal que adquire poderes sobrenaturais através de práticas taoístas.",
            abilities: [
                "Transformação Mágica",
                "Força Sobrenatural",
                "Velocidade Incomparável",
                "Manipulação de Energia"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 95,
                defense: 80,
                speed: 75,
                magic: 85
            }
        },
        "seth": {
            name: "SETH",
            title: "MINI BOSS EGÍPCIO",
            description: "Seth é o deus egípcio do caos, do deserto e das tempestades. Ele é conhecido por sua força bruta e por ser o antagonista na mitologia egípcia.",
            mythology: "Na mitologia egípcia, Seth é o deus do caos, do deserto e das tempestades. Ele é conhecido por sua força bruta e por ser o antagonista na mitologia egípcia.",
            abilities: [
                "Força Bruta",
                "Controle do Deserto",
                "Manipulação de Tempestades",
                "Resistência à Magia"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições"
            ],
            stats: {
                power: 90,
                defense: 85,
                speed: 70,
                magic: 75
            }
        },
        // Adicione mais bosses conforme necessário
    };

    // Função para abrir o modal
    function openBossModal(bossId) {
        const modalOverlay = document.getElementById('bossModal');
        const modal = document.querySelector('.boss-modal');
        const bossKey = bossId.toLowerCase().replace(/\s+/g, '');
        const bossData = bossesData[bossKey];
        
        if (!bossData) {
            // Dados padrão se não encontrar
            document.getElementById('modalBossName').textContent = bossId;
            document.getElementById('modalBossTitle').textContent = 'BOSS';
            document.getElementById('modalBossImage').src = `img/imagens/Dimensional/${bossKey}.png`;
            document.getElementById('modalBossImage').alt = bossId;
        } else {
            // Preencher dados do boss
            document.getElementById('modalBossName').textContent = bossData.name;
            document.getElementById('modalBossTitle').textContent = bossData.title;
            document.getElementById('modalBossImage').src = `img/imagens/Dimensional/${bossKey}.png`;
            document.getElementById('modalBossImage').alt = bossData.name;
            
            // Preencher aba Informações
            document.getElementById('bossDescription').textContent = bossData.description;
            document.getElementById('bossMythology').textContent = bossData.mythology;
            
            // Preencher habilidades
            const abilitiesList = document.getElementById('bossAbilities');
            abilitiesList.innerHTML = '';
            if (bossData.abilities && bossData.abilities.length > 0) {
                bossData.abilities.forEach(ability => {
                    const li = document.createElement('li');
                    li.textContent = ability;
                    abilitiesList.appendChild(li);
                });
            } else {
                abilitiesList.innerHTML = '<li>Informações não disponíveis</li>';
            }
            
            // Preencher fraquezas
            const weaknessesList = document.getElementById('bossWeaknesses');
            weaknessesList.innerHTML = '';
            if (bossData.weaknesses && bossData.weaknesses.length > 0) {
                bossData.weaknesses.forEach(weakness => {
                    const li = document.createElement('li');
                    li.textContent = weakness;
                    weaknessesList.appendChild(li);
                });
            } else {
                weaknessesList.innerHTML = '<li>Informações não disponíveis</li>';
            }
            
            // Preencher estatísticas
            if (bossData.stats) {
                document.querySelector('.stat-fill.power').style.width = `${bossData.stats.power}%`;
                document.querySelector('.stat-fill.defense').style.width = `${bossData.stats.defense}%`;
                document.querySelector('.stat-fill.speed').style.width = `${bossData.stats.speed}%`;
                document.querySelector('.stat-fill.magic').style.width = `${bossData.stats.magic}%`;
                
                document.querySelector('.stat-value.power').textContent = bossData.stats.power;
                document.querySelector('.stat-value.defense').textContent = bossData.stats.defense;
                document.querySelector('.stat-value.speed').textContent = bossData.stats.speed;
                document.querySelector('.stat-value.magic').textContent = bossData.stats.magic;
            }
        }
        
        // Mostrar modal
        modalOverlay.classList.add('active');
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar o modal
    function closeBossModal() {
        const modalOverlay = document.getElementById('bossModal');
        const modal = document.querySelector('.boss-modal');
        
        modal.classList.remove('active');
        setTimeout(() => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // Função para trocar abas
    function switchTab(tabName) {
        // Remover classe active de todas as abas e conteúdos
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Adicionar classe active na aba clicada e seu conteúdo
        document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    // Event Listeners quando o DOM estiver carregado
    document.addEventListener('DOMContentLoaded', function() {
        // Adicionar evento de clique nas imagens dos bosses
        document.querySelectorAll('.single_gallery_item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const bossName = this.querySelector('.gallery-content span').textContent.trim();
                openBossModal(bossName);
            });
        });
        
        // Fechar modal com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeBossModal();
            }
        });
        
        // Fechar modal ao clicar fora
        document.getElementById('bossModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeBossModal();
            }
        });
        
        // Menu mobile
        const menuIcon = document.getElementById('menuIcon');
        const mainMenu = document.querySelector('.mainMenu');
        const closeIcon = document.querySelector('.closeIcon');
        
        if (menuIcon && mainMenu) {
            menuIcon.addEventListener('click', function() {
                mainMenu.classList.add('active');
            });
        }
        
        if (closeIcon && mainMenu) {
            closeIcon.addEventListener('click', function() {
                mainMenu.classList.remove('active');
            });
        }
        
        // Remover preloader quando a página carregar
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('preloader').style.display = 'none';
            }, 500);
        });
    });