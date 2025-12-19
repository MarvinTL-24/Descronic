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
        name: "ANÚBIS",
        title: "BOSS EGÍPCIO",
        description: "Anubis é um deus egípcio associado à mumificação e à vida após a morte. Ele é frequentemente representado como um homem com cabeça de chacal.",
        mythology: "Na mitologia egípcia, Anubis é o guardião dos mortos e o guia das almas no além. Ele supervisiona o processo de mumificação e protege os túmulos.",
        location: "Vale dos Reis",
        rewards: "Olho de Hórus, Manto do Guardião, Anel da Eternidade",
        lore: "Anubis vigia os portais entre o mundo dos vivos e dos mortos. Sua presença é um lembrete constante da inevitabilidade da morte e do julgamento que se segue.",
        origin: "Anubis nasceu da união de Nephthys e Set, mas foi criado por Ísis, que o nomeou guardião dos mortos.",
        motivations: "Proteger o equilíbrio entre a vida e a morte, garantir que as almas sejam julgadas corretamente e impedir que os vivos perturbem os mortos.",
        abilities: [
            "Controle sobre a Morte",
            "Mumificação Divina",
            "Julgamento das Almas",
            "Proteção dos Túmulos",
            "Visão sobre a Vida e a Morte"
        ],
        weaknesses: [
            "Falta de Mobilidade",
            "Dependência de Túmulos Sagrados",
            "Ineficácia contra Magia de Revitalização",
            "Fragilidade em Ambientes Abertos"
        ],
        strategies: "Use magia de proteção para resistir aos ataques de morte. Evite ambientes abertos onde ele possa usar sua visão sobre a vida e a morte. Ataques diretos podem ser eficazes se você não estiver em um túmulo sagrado.",
        stats: {
            power: 85,
            defense: 90,
            speed: 40,
            magic: 95
        },
        image: "img/imagens/Dimensional/anubis.png"
    },
    {
        id: "baldur",
        name: "BALDUR",
        title: "BOSS NÓRDICO",
        description: "Baldur é um deus nórdico associado à justiça e à proteção. Ele é conhecido por sua força e lealdade.",
        mythology: "Na mitologia nórdica, Baldur é o deus da luz e da justiça. Ele é filho de Odin e Frigg, e é considerado um dos deuses mais amados.",
        location: "Valhalla",
        rewards: "Espada do Céu, Escudo da Verdade",
        lore: "Baldur é um símbolo de justiça e proteção. Sua morte é uma das tragédias mais importantes da mitologia nórdica.",
        origin: "Baldur nasceu de Odin e Frigg, sendo o mais amado dos deuses nórdicos.",
        motivations: "Proteger a ordem divina e manter a justiça entre os seres vivos.",
        abilities: [
            "Força Divina",
            "Proteção Absoluta",
            "Justiça Infinita",
            "Resistência ao Mal"
        ],
        weaknesses: [
            "Fragilidade em Ambientes Sombrios",
            "Dependência da Luz Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes sombrios onde ele possa usar sua luz divina. Ataques diretos podem ser eficazes se você não estiver em um ambiente iluminado.",
        stats: {
            power: 90,
            defense: 95,
            speed: 50,
            magic: 80
        },
        image: "img/imagens/Dimensional/baldur.png"
    },
    {
        id: "forseti",
        name: "FORSETI",
        title: "MINI BOSS NÓRDICO",
        description: "Forseti é o deus nórdico da justiça e da reconciliação. Ele é conhecido por sua sabedoria e habilidade em resolver disputas.",
        mythology: "Na mitologia nórdica, Forseti é o deus da justiça e da reconciliação. Ele é filho de Balder e Nanna, e é conhecido por sua habilidade em resolver disputas pacificamente.",
        location: "Asgard - Salão de Justiça",
        rewards: "Martelo da Justiça, Capa da Reconciliação",
        lore: "Forseti é um símbolo de justiça e reconciliação. Sua habilidade em resolver disputas é lendária entre os deuses nórdicos.",
        origin: "Forseti nasceu de Balder e Nanna, sendo um deus dedicado à justiça e à paz.",
        motivations: "Proteger a ordem divina e promover a reconciliação entre os seres vivos.",
        abilities: [
            "Sabedoria Divina",
            "Justiça Infinita",
            "Reconciliação Divina",
            "Resistência à Violência"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Paz Divina",
            "Ineficácia contra Magia de Guerra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua sabedoria e justiça. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 80,
            defense: 85,
            speed: 60,
            magic: 90
        },
        image: "img/imagens/Dimensional/forseti.png"
    },
    {
        id: "Rei dragão",
        name: "REI DRAGÃO",
        title: "BOSS FINAL DIMENSIONAL",
        description: "O Rei Dragão é o boss final da dimensão dimensional. Ele é um ser poderoso e misterioso, conhecido por sua força e sabedoria.",
        mythology: "Na mitologia dimensional, o Rei Dragão é o guardião do reino dos dragões. Ele é um ser ancestral e poderoso, com habilidades mágicas que superam as de qualquer outro ser.",
        location: "Reino dos Dragões",
        rewards: "Coração de Dragão, Escama Mística",
        lore: "O Rei Dragão é um símbolo de poder e sabedoria. Sua história está ligada à fundação do reino dos dragões.",
        origin: "O Rei Dragão nasceu como um dragão ancestral, sendo o primeiro a dominar o reino dos dragões.",
        motivations: "Proteger o reino dos dragões e manter a ordem entre os seres vivos.",
        abilities: [
            "Força Mística",
            "Sabedoria Ancestral",
            "Magia Elemental",
            "Resistência Divina"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Sabedoria Ancestral",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua sabedoria ancestral. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 95,
            defense: 90,
            speed: 70,
            magic: 85
        },
        image: "img/imagens/Dimensional/Rei dragão.png"
    },
    {
        id: "Wukong",
        name: "WUKONG",
        title: "BOSS FINAL DIMENSIONAL",
        description: "Wukong é o Rei Macaco, um ser lendário conhecido por sua astúcia, força e habilidades mágicas. Ele é um mestre do combate e da transformação.",
        mythology: "Na mitologia chinesa, Wukong é um personagem central do clássico 'Jornada ao Oeste'. Ele é conhecido por sua rebeldia contra os céus e suas incríveis habilidades de combate.",
        location: "Montanha das Flores e Frutas",
        rewards: "Coração de Macaco, Escama Mística",
        lore: "Wukong é um símbolo de astúcia e força. Sua história está ligada à fundação do reino dos macacos.",
        origin: "Wukong nasceu como um macaco ancestral, sendo o primeiro a dominar o reino dos macacos.",
        motivations: "Proteger o reino dos macacos e manter a ordem entre os seres vivos.",
        abilities: [
            "Astúcia Divina",
            "Força Mística",
            "Transformação Elemental",
            "Resistência à Magia"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 90,
            defense: 85,
            speed: 80,
            magic: 85
        },
        image: "img/imagens/Dimensional/Wukong.png"
    },
    {
        id: "poseidon",
        name: "POSEIDON",
        title: "BOSS GREGO",
        description: "Poseidon é o deus grego dos mares, terremotos e cavalos. Ele é conhecido por seu temperamento volátil e sua habilidade de controlar as águas.",
        mythology: "Na mitologia grega, Poseidon é um dos doze deuses olímpicos e irmão de Zeus e Hades. Ele governa os oceanos e é frequentemente representado com um tridente.",
        location: "Oceano Profundo",
        rewards: "Tridente de Poseidon, Capa das Marés",
        lore: "Poseidon é um deus poderoso e imprevisível. Sua presença é sentida nas tempestades do mar e nos terremotos que sacodem a terra.",
        origin: "Poseidon nasceu de Cronos e Reia, sendo um dos três irmãos que dividiram o domínio do mundo após a derrota dos titãs.",
        motivations: "Controlar os mares e punir aqueles que desrespeitam suas águas.",
        abilities: [
            "Controle sobre as Águas",
            "Transformação Elemental",
            "Resistência à Magia"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 85,
            defense: 80,
            speed: 75,
            magic: 90
        },
        image: "img/imagens/Dimensional/poseidon.png"
    },
    {
        id: "tupã",
        name: "TUPÃ",
        title: "BOSS TUPI-GUARANI",
        description: "Tupã é o deus tupi-guarani do trovão, relâmpago e tempestades. Ele é considerado o criador do mundo e o responsável pela fertilidade da terra.",
        mythology: "Na mitologia tupi-guarani, Tupã é um dos doze deuses criadores. Ele é associado ao trovão e à chuva, sendo um deus benevolente que traz vida à terra.",
        location: "Céu e Terra",
        rewards: "Martelo de Tupã, Capa das Tempestades",
        lore: "Tupã é um deus benevolente que traz vida à terra. Ele é conhecido por sua habilidade de controlar o trovão e a chuva.",
        origin: "Tupã nasceu como um dos doze deuses criadores, sendo o responsável pela fertilidade da terra.",
        motivations: "Proteger a terra e manter a ordem entre os seres vivos.",
        abilities: [
            "Controle sobre o Trovão",
            "Transformação Elemental",
            "Resistência à Magia"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 85,
            defense: 80,
            speed: 75,
            magic: 90
        },
        image: "img/imagens/Dimensional/tupã.png"
    },
    {
        id: "yepa belo",
        name: "YEPA BELO",
        title: "MINI BOSS TUPI-GUARANI",
        description: "Yepa Belo é um deus tupi-guarani associado à caça e à guerra. Ele é conhecido por sua habilidade de liderar guerreiros e caçadores em batalhas e expedições.",
        mythology: "Na mitologia tupi-guarani, Yepa Belo é um dos doze deuses criadores. Ele é associado à caça e à guerra, sendo um deus guerreiro que protege seu povo.",
        location: "Florestas e Montanhas",
        rewards: "Arco de Yepa Belo, Capa do Caçador",
        lore: "Yepa Belo é um deus guerreiro que protege seu povo. Ele é conhecido por sua habilidade de liderar guerreiros e caçadores em batalhas e expedições.",
        origin: "Yepa Belo nasceu como um dos doze deuses criadores, sendo o responsável pela proteção de seu povo.",
        motivations: "Proteger seu povo e manter a ordem entre os seres vivos.",
        abilities: [
            "Habilidade de Caça",
            "Liderança em Batalhas",
            "Resistência à Magia"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 85,
            defense: 80,
            speed: 75,
            magic: 90
        },
        image: "img/imagens/Dimensional/yepa belo.png"
    },
    {
        id: "iztamna",
        name: "IZTAMINA",
        title: "MINI BOSS MAIA",
        description: "Iztamina é um deus maia associado à fertilidade, à agricultura e à medicina. Ela é conhecida por sua habilidade de curar doenças e trazer prosperidade à terra.",
        mythology: "Na mitologia maia, Iztamina é um dos doze deuses criadores. Ela é associada à fertilidade, à agricultura e à medicina, sendo uma deusa benevolente que traz vida à terra.",
        location: "Campos e Florestas",
        rewards: "Cetro de Iztamina, Capa da Fertilidade",
        lore: "Iztamina é uma deusa benevolente que traz vida à terra. Ela é conhecida por sua habilidade de curar doenças e trazer prosperidade à terra.",
        origin: "Iztamina nasceu como um dos doze deuses criadores, sendo a responsável pela fertilidade da terra.",
        motivations: "Proteger a terra e manter a ordem entre os seres vivos.",
        abilities: [
            "Habilidade de Cura",
            "Fertilidade da Terra",
            "Proteção da Natureza"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ela possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 80,
            defense: 85,
            speed: 70,
            magic: 95
        },
        image: "img/imagens/Dimensional/iztamna.png"
    },
    {
        id: "seth",
        name: "SETH",
        title: "BOSS EGÍPCIO",
        description: "Seth é um deus egípcio associado ao caos, à desordem e às tempestades. Ele é conhecido por sua rivalidade com Osíris e sua habilidade de controlar as forças do caos.",
        mythology: "Na mitologia egípcia, Seth é um dos doze deuses criadores. Ele é associado ao caos, à desordem e às tempestades, sendo um deus poderoso que desafia a ordem estabelecida.",
        location: "Desertos e Tempestades",
        rewards: "Cetro de Seth, Capa do Caos",
        lore: "Seth é um deus poderoso que desafia a ordem estabelecida. Ele é conhecido por sua rivalidade com Osíris e sua habilidade de controlar as forças do caos.",
        origin: "Seth nasceu como um dos doze deuses criadores, sendo o responsável pelo caos e pela desordem.",
        motivations: "Desafiar a ordem estabelecida e manter o equilíbrio entre as forças do caos e da ordem.",
        abilities: [
            "Controle sobre o Caos",
            "Transformação Elemental",
            "Resistência à Magia"
        ],
        weaknesses: [
            "Fragilidade em Ambientes de Conflito",
            "Dependência da Astúcia Divina",
            "Ineficácia contra Magia Negra"
        ],
        strategies: "Use magia de proteção para resistir aos ataques divinos. Evite ambientes de conflito onde ele possa usar sua astúcia. Ataques diretos podem ser eficazes se você não estiver em um ambiente pacífico.",
        stats: {
            power: 90,
            defense: 85,
            speed: 80,
            magic: 85
        },
        image: "img/imagens/Dimensional/seth.png"
    }
];

// Função para encontrar boss pelo ID
function getBossById(bossId) {
    return bossesData.find(boss => boss.id === bossId);
}

// Função para abrir o modal
function openBossModal(bossId) {
    console.log("Tentando abrir modal para:", bossId);
    
    const modalOverlay = document.getElementById('bossModal');
    const modal = document.querySelector('.boss-modal');
    const bossData = getBossById(bossId);
    
    if (!bossData) {
        console.error("Boss não encontrado:", bossId);
        return;
    }
    
    // Preencher dados básicos
    document.getElementById('modalBossName').textContent = bossData.name;
    document.getElementById('modalBossTitle').textContent = bossData.title;
    
    // Imagem
    const imgElement = document.getElementById('modalBossImage');
    imgElement.src = bossData.image;
    imgElement.alt = bossData.name;
    
    // Preencher aba Informações
    document.getElementById('bossDescription').textContent = bossData.description;
    document.getElementById('bossMythology').textContent = bossData.mythology;
    document.getElementById('bossLocation').textContent = bossData.location;
    document.getElementById('bossRewards').textContent = bossData.rewards;
    
    // Preencher aba Lore
    document.getElementById('bossLore').textContent = bossData.lore;
    document.getElementById('bossOrigin').textContent = bossData.origin;
    document.getElementById('bossMotivations').textContent = bossData.motivations;
    
    // Preencher habilidades
    const abilitiesList = document.getElementById('bossAbilities');
    abilitiesList.innerHTML = '';
    bossData.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability;
        abilitiesList.appendChild(li);
    });
    
    // Preencher fraquezas
    const weaknessesList = document.getElementById('bossWeaknesses');
    weaknessesList.innerHTML = '';
    bossData.weaknesses.forEach(weakness => {
        const li = document.createElement('li');
        li.textContent = weakness;
        weaknessesList.appendChild(li);
    });
    
    // Preencher estratégias
    document.getElementById('bossStrategies').textContent = bossData.strategies;
    
    // Preencher estatísticas
    if (bossData.stats) {
        document.getElementById('statPower').textContent = bossData.stats.power;
        document.getElementById('statDefense').textContent = bossData.stats.defense;
        document.getElementById('statSpeed').textContent = bossData.stats.speed;
        document.getElementById('statMagic').textContent = bossData.stats.magic;
        
        setTimeout(() => {
            document.getElementById('statFillPower').style.width = `${bossData.stats.power}%`;
            document.getElementById('statFillDefense').style.width = `${bossData.stats.defense}%`;
            document.getElementById('statFillSpeed').style.width = `${bossData.stats.speed}%`;
            document.getElementById('statFillMagic').style.width = `${bossData.stats.magic}%`;
        }, 100);
    }
    
    // Resetar para a primeira aba
    switchTab('info');
    
    // Mostrar modal
    modalOverlay.style.display = 'flex';
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modal.classList.add('active');
    }, 10);
    
    // Prevenir scroll
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeBossModal() {
    const modalOverlay = document.getElementById('bossModal');
    const modal = document.querySelector('.boss-modal');
    
    modal.classList.remove('active');
    modalOverlay.style.opacity = '0';
    
    setTimeout(() => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Função para trocar abas
function switchTab(tabName) {
    // Remover active de todas as abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Remover active de todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Adicionar active na aba clicada
    const activeTabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTabBtn) {
        activeTabBtn.classList.add('active');
    }
    
    // Mostrar conteúdo correspondente
    const activeContent = document.getElementById(`${tabName}Tab`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

// Inicialização quando o DOM carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Carregado - Inicializando bosses");
    
    // Event listeners para os cards dos bosses
    document.querySelectorAll('.single_gallery_item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const bossId = this.getAttribute('data-boss-id');
            console.log("Card clicado:", bossId);
            if (bossId) {
                openBossModal(bossId);
            }
        });
    });
    
    // Event listener para fechar modal com botão
    document.getElementById('modalCloseBtn').addEventListener('click', closeBossModal);
    
    // Event listener para fechar modal clicando fora
    document.getElementById('bossModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBossModal();
        }
    });
    
    // Event listener para trocar abas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeBossModal();
        }
    });
    
    // Menu mobile (adicione se precisar)
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
});

// Torna as funções globais
window.openBossModal = openBossModal;
window.closeBossModal = closeBossModal;
window.switchTab = switchTab;

// REMOVE PRELOADER SIMPLES
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Adiciona efeito de fade
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        
        // Remove após animação
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Timeout de segurança (remove após 3 segundos mesmo se a página não carregar totalmente)
setTimeout(function() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.style.display = 'none';
    }
}, 3000);