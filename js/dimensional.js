// Dados dos bosses
    const bossesData = [
        {
            id: "ahpuch",
            name: "AH PUCH",
            title: "BOSS MAIA",
            description: "Ah Puch é o deus maia da morte e do submundo, conhecido como 'O Senhor da Morte'. Ele governa sobre o reino dos mortos e é frequentemente representado como um esqueleto ou cadáver em decomposição.",
            mythology: "Na mitologia maia, Ah Puch é o deus da morte, governante do mais baixo dos nove mundos subterrâneos. É associado com guerras, sacrifícios humanos e desastres naturais.",
            location: "Xibalba - O Submundo Maia",
            rewards: "Orbe da Morte, Capa das Sombras, Cetro de Ah Puch",
            lore: "Como governante de Xibalba, Ah Puch comanda legiões de espectros e doenças. Sua presença é marcada por um cheiro de decomposição e um frio mortal que congela a alma dos vivos.",
            origin: "Nascido das sombras mais profundas do subconsciente coletivo, Ah Puch emergiu como a personificação do medo da morte na civilização maia.",
            motivations: "Expandir seu reino de sombras para o mundo dos vivos, corromper almas puras e espalhar doenças e sofrimento.",
            abilities: [
                "Invocação de Espectros",
                "Controle sobre Doenças",
                "Manipulação da Escuridão",
                "Necromancia Avançada",
                "Sopro da Morte"
            ],
            weaknesses: [
                "Luz Solar",
                "Símbolos Sagrados",
                "Magia de Cura",
                "Amuleto de Jade"
            ],
            strategies: "Use luz ofuscante para dissipar suas sombras. Amuletos sagrados podem enfraquecê-lo temporariamente. Ataques rápidos antes que ele invoque seus lacaios.",
            stats: {
                power: 95,
                defense: 80,
                speed: 60,
                magic: 90
            },
            image: "img/imagens/Dimensional/ah puch.png"
        },
        {
            id: "atlas",
            name: "ATLAS",
            title: "MINI BOSS GREGO",
            description: "Atlas é um titã condenado por Zeus a carregar o céu sobre seus ombros por toda a eternidade. Sua força é incomparável, mas seu fardo o torna vulnerável.",
            mythology: "Na mitologia grega, Atlas liderou os titãs na guerra contra os deuses do Olimpo. Após a derrota, foi condenado a sustentar o céu para sempre.",
            location: "Pilares do Ocidente",
            rewards: "Fragmento do Céu, Cinto da Força Titânica",
            lore: "Atlas carrega o peso do firmamento há milênios. Sua força titânica é lendária, mas sua imobilidade o tornou um guardião eterno.",
            origin: "Filho de Jápeto e Climene, Atlas era um dos titãs mais poderosos que se rebelou contra a nova ordem dos deuses olímpicos.",
            motivations: "Libertar-se de sua maldição e vingar-se de Zeus pelos milênios de tormento.",
            abilities: [
                "Força Titânica",
                "Resistência Sobrenatural",
                "Controle da Gravidade",
                "Durabilidade Extrema",
                "Sismo Poderoso"
            ],
            weaknesses: [
                "Movimento Limitado",
                "Fadiga Cumulativa",
                "Artimanhas e Estratégias",
                "Raios Divinos"
            ],
            strategies: "Explore sua falta de mobilidade. Ataques à distância são eficazes. Desestabilize seu equilíbrio para sobrecarregá-lo.",
            stats: {
                power: 99,
                defense: 95,
                speed: 30,
                magic: 40
            },
            image: "img/imagens/Dimensional/Atlas.png"
        },
        {
            id: "anubis",
            name: "ANUBIS",
            title: "BOSS EGÍPCIO",
            description: "Anúbis é o deus egípcio da mumificação e do submundo, guardião das almas e juiz dos mortos. Ele pesa o coração dos falecidos contra a pena da verdade.",
            mythology: "Filho de Osíris e Néftis, Anúbis é um dos deuses mais antigos do panteão egípcio. Preside o processo de mumificação e protege os túmulos.",
            location: "Sala da Duat (Julgamento)",
            rewards: "Balança da Justiça, Máscara de Anúbis, Pena de Maat",
            lore: "Anúbis guarda a passagem para o além, julgando cada alma com sua balança sagrada. Aqueles com corações mais pesados que a pena são devorados.",
            origin: "Nascido da união entre Osíris e Néftis, Anúbis foi criado por Ísis após o assassinato de seu pai.",
            motivations: "Manter a ordem cósmica, julgar as almas com justiça e proteger os segredos da vida após a morte.",
            abilities: [
                "Julgamento das Almas",
                "Controle sobre a Morte",
                "Proteção de Túmulos",
                "Transformação Canina",
                "Maldição da Mumificação"
            ],
            weaknesses: [
                "Rituais de Purificação",
                "Nome Verdadeiro",
                "Símbolos de Vida Eterna",
                "Luz do Sol Nascente"
            ],
            strategies: "Conheça seu nome verdadeiro para enfraquecê-lo. Use símbolos de vida eterna como proteção. Evite olhar diretamente em seus olhos.",
            stats: {
                power: 85,
                defense: 75,
                speed: 70,
                magic: 95
            },
            image: "img/imagens/Dimensional/anubis.png"
        },
        {
            id: "baldur",
            name: "BALDUR",
            title: "MINI BOSS VIKING",
            description: "Baldur é o deus nórdico da luz, pureza e beleza. Conhecido por sua invulnerabilidade, sua única fraqueza é o visco.",
            mythology: "Filho de Odin e Frigg, Baldur era tão amado que sua mãe fez todos os seres da Terra jurar não machucá-lo, esquecendo-se apenas do visco.",
            location: "Salões de Asgard",
            rewards: "Luz de Baldur, Fragmento de Invulnerabilidade",
            lore: "Baldur é o deus mais amado de Asgard, cuja luz banha os nove reinos. Sua invulnerabilidade o tornou arrogante, até que Loki descobriu sua fraqueza.",
            origin: "Concebido como o deus da luz e pureza, Baldur era destinado a trazer uma nova era de paz para os nove reinos.",
            motivations: "Proteger Asgard, espalhar luz e beleza, e evitar seu destino trágico profetizado.",
            abilities: [
                "Invulnerabilidade",
                "Manipulação da Luz",
                "Presença Inspiradora",
                "Cura Divina",
                "Aura de Pureza"
            ],
            weaknesses: [
                "Flechas de Visco",
                "Magia das Trevas",
                "Enganos e Traições",
                "Objetos da Terra"
            ],
            strategies: "Use flechas ou armas feitas de visco. Magia de ilusão pode confundi-lo. Explore sua confiança excessiva.",
            stats: {
                power: 75,
                defense: 100,
                speed: 65,
                magic: 85
            },
            image: "img/imagens/Dimensional/baldur.png"
        },
        {
            id: "iztamina",
            name: "IZTAMINA",
            title: "MINI BOSS MAIA",
            description: "Iztamna é o deus maia do céu, da noite e do dia. Considerado o inventor da escrita e dos livros na mitologia maia.",
            mythology: "Filho de Hunab Ku, Iztamna é um dos deuses criadores na mitologia maia, associado ao conhecimento, medicina e agricultura.",
            location: "Templo do Céu Maia",
            rewards: "Página do Códice Perdido, Glifo do Conhecimento",
            lore: "Iztamna ensinou aos maias a escrita, a medicina e a agricultura. Seu conhecimento abrange desde as estrelas até as raízes mais profundas.",
            origin: "Primeiro filho do deus criador Hunab Ku, Iztamna foi encarregado de trazer civilização e conhecimento aos maias.",
            motivations: "Preservar o conhecimento maia, guiar seu povo e manter o equilíbrio entre céu e terra.",
            abilities: [
                "Controle do Céu",
                "Criação de Conhecimento",
                "Manipulação Temporal",
                "Cura Ancestral",
                "Glifos Mágicos"
            ],
            weaknesses: [
                "Ignorância",
                "Magia Caótica",
                "Quebra de Tradições",
                "Destruição de Códices"
            ],
            strategies: "Use conhecimento contra ele - enigmas e quebra-cabeças podem confundi-lo. Magia caótica interrompe seus rituais ordenados.",
            stats: {
                power: 70,
                defense: 60,
                speed: 75,
                magic: 95
            },
            image: "img/imagens/Dimensional/iztamna.png"
        },
        {
            id: "forseti",
            name: "FORSETI",
            title: "BOSS VIKING",
            description: "Forseti é o deus nórdico da justiça e da reconciliação. Conhecido por sua sabedoria e habilidade em resolver disputas entre deuses e mortais.",
            mythology: "Filho de Balder e Nanna, Forseti é reverenciado como um deus justo que preside as assembleias e resolve conflitos com imparcialidade.",
            location: "Salão da Justiça (Glitnir)",
            rewards: "Martelo da Justiça, Manto da Imparcialidade",
            lore: "Forseti reina em Glitnir, o salão de prata e ouro onde nenhuma mentira pode ser dita. Suas decisões são finais e sempre justas.",
            origin: "Nascido do amor entre Balder e Nanna, Forseti herdou a luz do pai e a pureza da mãe, tornando-se o juiz perfeito.",
            motivations: "Manter a justiça em todos os nove reinos, resolver conflitos pacificamente e punir os que quebram seus juramentos.",
            abilities: [
                "Julgamento Imparcial",
                "Persuasão Divina",
                "Sabedoria Suprema",
                "Paz Restauradora",
                "Detecção de Mentiras"
            ],
            weaknesses: [
                "Injustiça",
                "Desespero",
                "Conflitos Internos",
                "Paradoxos Morais"
            ],
            strategies: "Apresente casos complexos que desafiem a lógica. Conflitos internos podem distraí-lo. Aja com honra para ganhar seu respeito.",
            stats: {
                power: 80,
                defense: 85,
                speed: 70,
                magic: 90
            },
            image: "img/imagens/Dimensional/forseti.png"
        },
        {
            id: "reidragao",
            name: "REI DRAGÃO",
            title: "BOSS CHINÊS",
            description: "O Rei Dragão é uma entidade poderosa na mitologia chinesa, governando os mares e controlando as chuvas. Ele é reverenciado como um símbolo de força e boa sorte.",
            mythology: "Na mitologia chinesa, o Rei Dragão é um ser divino que habita os oceanos e é responsável por regular o clima e as águas.",
            location: "Palácio do Mar do Leste",
            rewards: "Pérola do Dragão, Escama Imperial",
            lore: "O Rei Dragão governa os quatro mares com sabedoria milenar. Seu poder sobre as águas pode trazer prosperidade ou destruição total.",
            origin: "Nascido do Qi primordial, o Rei Dragão é a personificação do poder do oceano e da autoridade imperial.",
            motivations: "Manter o equilíbrio das águas, proteger seus domínios e receber o respeito e oferendas dos mortais.",
            abilities: [
                "Controle das Águas",
                "Manipulação do Clima",
                "Força Descomunal",
                "Transformação Dracônica",
                "Invocação de Serpentes Marinhas"
            ],
            weaknesses: [
                "Dragão de Fogo",
                "Magia Terrestre",
                "Símbolos Imperiais",
                "Ordens Celestiais"
            ],
            strategies: "Use magia de terra para contrabalançar sua água. Símbolos imperiais podem intimidá-lo. Ataques de fogo são eficazes.",
            stats: {
                power: 90,
                defense: 85,
                speed: 75,
                magic: 80
            },
            image: "img/imagens/Dimensional/Rei dragão.png"
        },
        {
            id: "poseidon",
            name: "POSEIDON",
            title: "BOSS GREGO",
            description: "Poseidon é o deus grego do mar, da terra e do trovão. Ele é conhecido por sua força e controle sobre os oceanos.",
            mythology: "Poseidon é um dos doze deuses olímpicos, governando o mar e os terremotos. Ele é frequentemente representado com um tridente.",
            location: "Palácio Submarino de Atlântida",
            rewards: "Tridente de Poseidon, Concha do Oceano",
            lore: "Poseidon reina sobre os mares com um temperamento tão volátil quanto as tempestades que comanda. Seu favor é buscado por marinheiros e sua ira é temida.",
            origin: "Filho de Cronos e Réia, Poseidon foi devorado por seu pai e depois libertado por Zeus, tornando-se senhor dos mares.",
            motivations: "Expandir seu domínio, receber homenagens dos mortais e manter sua autoridade sobre as águas.",
            abilities: [
                "Controle do Mar",
                "Manipulação de Terremotos",
                "Força Suprema",
                "Criação de Tempestades",
                "Domínio sobre Criaturas Marinhas"
            ],
            weaknesses: [
                "Fúria Incontrolável",
                "Desespero",
                "Conflitos Internos",
                "Limitações Territoriais"
            ],
            strategies: "Provocar sua ira para que ele atue impensadamente. Em terra, seu poder é reduzido. Use a lógica contra sua paixão.",
            stats: {
                power: 95,
                defense: 80,
                speed: 70,
                magic: 85
            },
            image: "img/imagens/Dimensional/poseidon.png"
        },
        {
            id: "tupa",
            name: "TUPÃ",
            title: "MINI BOSS INDÍGENA",
            description: "Tupã é o deus tupi-guarani do trovão, relâmpago e tempestade. Ele é considerado o criador do mundo e o responsável pela chuva que fertiliza a terra.",
            mythology: "Na mitologia tupi-guarani, Tupã é o deus supremo que criou o céu, a terra e todos os seres vivos. Ele é associado ao trovão e à fertilidade.",
            location: "Montanha Sagrada (Serra do Mar)",
            rewards: "Raio de Tupã, Semente da Vida",
            lore: "Tupã criou o mundo com trovões e relâmpagos. Seu poder pode fertilizar a terra ou destruí-la com tempestades furiosas.",
            origin: "Primeira consciência a emergir do Caos primordial, Tupã moldou o mundo com sua voz trovejante.",
            motivations: "Manter o ciclo da vida, proteger a natureza e punir aqueles que desrespeitam a criação.",
            abilities: [
                "Controle do Trovão",
                "Manipulação do Clima",
                "Criação da Vida",
                "Força Divina",
                "Comunhão com a Natureza"
            ],
            weaknesses: [
                "Secas Prolongadas",
                "Desequilíbrio Ecológico",
                "Rituais de Calma",
                "Símbolos da Terra Mãe"
            ],
            strategies: "Rituais de paz podem acalmar sua fúria. Proteja-se com símbolos da natureza. Evite confrontos durante tempestades.",
            stats: {
                power: 85,
                defense: 80,
                speed: 75,
                magic: 90
            },
            image: "img/imagens/Dimensional/tupã.png"
        },
        {
            id: "yepabelo",
            name: "YEPA BELO",
            title: "BOSS INDÍGENA",
            description: "Yepa Belo é um deus tupi-guarani associado à beleza, amor e fertilidade. Ele é reverenciado como um protetor das florestas e dos animais.",
            mythology: "Na mitologia tupi-guarani, Yepa Belo é um deus que simboliza a harmonia entre os seres humanos e a natureza, promovendo o amor e a beleza.",
            location: "Floresta Eterna (Amazônia)",
            rewards: "Flor da Eternidade, Colar da Harmonia",
            lore: "Yepa Belo caminha pela floresta, fazendo florescer a vida por onde passa. Sua presença traz beleza, amor e fertilidade a todos os seres.",
            origin: "Nascido do primeiro raio de sol a tocar a floresta virgem, Yepa Belo é a personificação da harmonia natural.",
            motivations: "Proteger a floresta e seus habitantes, promover o amor e a beleza, e manter o equilíbrio natural.",
            abilities: [
                "Encanto Natural",
                "Comunicação com Animais",
                "Cura da Natureza",
                "Manipulação da Beleza",
                "Crescimento Acelerado"
            ],
            weaknesses: [
                "Desmatamento",
                "Poluição",
                "Feitiços de Fealdade",
                "Armas de Metal"
            ],
            strategies: "Use armas naturais (madeira, pedra). Mostre respeito pela natureza. Evite magia que corrompa a beleza natural.",
            stats: {
                power: 80,
                defense: 85,
                speed: 70,
                magic: 95
            },
            image: "img/imagens/Dimensional/yepa belo.png"
        },
        {
            id: "wukong",
            name: "WUKONG",
            title: "MINI BOSS CHINÊS",
            description: "Wukong, também conhecido como o Rei Macaco, é uma figura lendária na mitologia chinesa. Ele é conhecido por sua astúcia, força e habilidades mágicas.",
            mythology: "Wukong é um personagem central no clássico romance chinês 'Jornada ao Oeste'. Ele é um macaco imortal que adquire poderes sobrenaturais através de práticas taoístas.",
            location: "Montanha das Flores e Frutas",
            rewards: "Bastão de Ouro, Pelo de Imortalidade",
            lore: "Wukong desafia deuses e budas com sua astúcia inigualável. Sua jornada de arrogância à iluminação é repleta de travessuras e batalhas épicas.",
            origin: "Nascido de uma pedra mágica banhada pela essência do céu e da terra, Wukong alcançou a imortalidade através do conhecimento taoísta.",
            motivations: "Provar sua força, buscar aventuras e desafiar a autoridade estabelecida.",
            abilities: [
                "Transformação Mágica",
                "Força Sobrenatural",
                "Velocidade Incomparável",
                "Manipulação de Energia",
                "72 Transformações"
            ],
            weaknesses: [
                "Anel de Ouro",
                "Sutras Budistas",
                "Armadilhas Mentais",
                "Sua Própria Arrogância"
            ],
            strategies: "Use enigmas e armadilhas mentais. Sutras podem contê-lo temporariamente. Explore sua arrogância para fazê-lo subestimar você.",
            stats: {
                power: 95,
                defense: 80,
                speed: 75,
                magic: 85
            },
            image: "img/imagens/Dimensional/Wukong.png"
        },
        {
            id: "seth",
            name: "SETH",
            title: "MINI BOSS EGÍPCIO",
            description: "Seth é o deus egípcio do caos, do deserto e das tempestades. Ele é conhecido por sua força bruta e por ser o antagonista na mitologia egípcia.",
            mythology: "Na mitologia egípcia, Seth é o deus do caos, do deserto e das tempestades. Ele é conhecido por sua força bruta e por ser o antagonista na mitologia egípcia.",
            location: "Deserto do Caos",
            rewards: "Cajado do Caos, Areia da Tempestade",
            lore: "Seth personifica as forças destrutivas da natureza. Seu domínio é o deserto implacável, onde a ordem cede lugar ao caos.",
            origin: "Irmão de Osíris, Ísis e Néftis, Seth nasceu com uma natureza violenta que o levou a matar seu irmão por ciúmes.",
            motivations: "Espalhar o caos, derrubar a ordem estabelecida e reivindicar o trono do Egito para si.",
            abilities: [
                "Força Bruta",
                "Controle do Deserto",
                "Manipulação de Tempestades",
                "Resistência à Magia",
                "Fúria do Caos"
            ],
            weaknesses: [
                "Ordem e Estrutura",
                "Rituais de Proteção",
                "Símbolos de Osíris",
                "Água e Fertilidade"
            ],
            strategies: "Use magia de ordem e proteção. Símbolos de Osíris podem enfraquecê-lo. Mantenha a calma para não alimentar seu caos.",
            stats: {
                power: 90,
                defense: 85,
                speed: 70,
                magic: 75
            },
            image: "img/imagens/Dimensional/seth.png"
        }
    ];

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
