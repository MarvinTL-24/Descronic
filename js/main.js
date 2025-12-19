document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const swapButton = document.getElementById('swap');
    const classContents = document.querySelectorAll('.class-content');
    const prevSubclassBtn = document.getElementById('prev-subclass');
    const nextSubclassBtn = document.getElementById('next-subclass');
    const subclassControls = document.getElementById('subclass-controls');
    const subclassNameElement = document.getElementById('subclass-name');
    
    // Elementos do seletor móvel
    const currentClassName = document.getElementById('current-class-name');
    const currentClassImg = document.getElementById('current-class-img');
    const currentSubclass = document.getElementById('current-subclass');
    
    // Estado atual
    let currentClassIndex = 0;
    let currentSubclassIndex = 0;
    let currentClass = classContents[0];
    
    // Dados completos de todas as classes
    const classesData = [
        {
            name: 'Assassin',
            token: 'src/assets/classes/Assasin/tokens/Assasin_1.png',
            subclasses: ['Shadow Blade', 'Night Stalker']
        },
        {
            name: 'Atirador',
            token: 'src/assets/classes/Atirador/tokens/Atirador_1.png',
            subclasses: ['Sniper Elite', 'Gunslinger']
        },
        {
            name: 'Berserker',
            token: 'src/assets/classes/Berserker/tokens/Berserker_1.png',
            subclasses: ['Blood Fury', 'War Machine']
        },
        {
            name: 'Desbravador',
            token: 'src/assets/classes/Desbravador/tokens/Desbravador_1.png',
            subclasses: ['Pathfinder', 'Trapper']
        },
        {
            name: 'Espiritualista',
            token: 'src/assets/classes/Espiritualista/tokens/Espiritualista_1.png',
            subclasses: ['Spirit Caller', 'Mind Weaver']
        },
        {
            name: 'Guerreiro',
            token: 'src/assets/classes/Guerreiro/tokens/Guerreiro_1.png',
            subclasses: ['Knight', 'Champion']
        },
        {
            name: 'Mago',
            token: 'src/assets/classes/Mago/tokens/Mago_1.png',
            subclasses: ['Elementalist', 'Archmage']
        },
        {
            name: 'Paladino',
            token: 'src/assets/classes/Paladino/tokens/Paladino_1.png',
            subclasses: ['Holy Knight', 'Crusader']
        }
    ];
    
    // Cores específicas para cada classe
    const classColors = {
        'assassin': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        'atirador': 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
        'berserker': 'linear-gradient(135deg, #d35400 0%, #a04000 100%)',
        'desbravador': 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        'espiritualista': 'linear-gradient(135deg, #8e44ad 0%, #732d91 100%)',
        'guerreiro': 'linear-gradient(135deg, #7f8c8d 0%, #616a6b 100%)',
        'mago': 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
        'paladino': 'linear-gradient(135deg, #f39c12 0%, #d68910 100%)'
    };
    
    // Função para trocar de classe principal
    function switchClass() {
        // Remove classe active da classe atual
        currentClass.classList.remove('active');
        
        // Atualiza índice (circular)
        currentClassIndex = (currentClassIndex + 1) % classContents.length;
        
        // Obtém nova classe
        currentClass = classContents[currentClassIndex];
        
        // Ativa nova classe
        currentClass.classList.add('active');
        
        // Reseta índice da subclasse
        currentSubclassIndex = 0;
        
        // Atualiza cor de fundo da classe principal
        updateClassColor();
        
        // Atualiza controles de subclasse
        updateSubclassControls();
        
        // Atualiza seletor móvel
        updateMobileSelector();
        
        // Animação de transição
        animateTransition();
    }
    
    // Função para trocar subclasse
    function switchSubclass(direction) {
        const currentSubclasses = currentClass.querySelectorAll('.subclass');
        
        // Remove active da subclasse atual
        currentSubclassIndex = getCurrentActiveSubclassIndex();
        
        // Atualiza índice baseado na direção
        if (direction === 'next') {
            currentSubclassIndex = (currentSubclassIndex + 1) % currentSubclasses.length;
        } else {
            currentSubclassIndex = (currentSubclassIndex - 1 + currentSubclasses.length) % currentSubclasses.length;
        }
        
        // Remove active de todas as subclasses
        currentSubclasses.forEach(subclass => subclass.classList.remove('active'));
        
        // Adiciona active à nova subclasse
        currentSubclasses[currentSubclassIndex].classList.add('active');
        
        // Atualiza controles
        updateSubclassControls();
        updateMobileSelector();
    }
    
    // Função para obter índice da subclasse ativa atual
    function getCurrentActiveSubclassIndex() {
        const subclasses = currentClass.querySelectorAll('.subclass');
        for (let i = 0; i < subclasses.length; i++) {
            if (subclasses[i].classList.contains('active')) {
                return i;
            }
        }
        return 0;
    }
    
    // Função para atualizar controles de subclasse
    function updateSubclassControls() {
        const subclasses = currentClass.querySelectorAll('.subclass');
        
        // Mostra/oculta controles baseado no número de subclasses
        if (subclasses.length > 1) {
            subclassControls.classList.remove('hidden');
            
            // Atualiza nome da subclasse ativa
            const activeSubclass = currentClass.querySelector('.subclass.active');
            if (activeSubclass) {
                const title = activeSubclass.querySelector('.subclass-title');
                subclassNameElement.textContent = title.textContent;
            }
        } else {
            subclassControls.classList.add('hidden');
        }
    }
    
    // Função para atualizar seletor móvel
    function updateMobileSelector() {
        const currentClassData = classesData[currentClassIndex];
        
        // Atualiza nome da classe
        currentClassName.textContent = currentClassData.name;
        
        // Atualiza imagem
        currentClassImg.src = currentClassData.token;
        currentClassImg.alt = currentClassData.name;
        
        // Atualiza subclasse
        const activeSubclass = currentClass.querySelector('.subclass.active');
        if (activeSubclass) {
            const title = activeSubclass.querySelector('.subclass-title');
            currentSubclass.textContent = title.textContent;
        }
    }
    
    // Função para atualizar cor da classe
    function updateClassColor() {
        const classType = currentClass.getAttribute('data-class');
        const mainClassElement = currentClass.querySelector('.main-class');
        
        if (classColors[classType] && mainClassElement) {
            mainClassElement.style.background = classColors[classType];
        }
    }
    
    // Função para animação de transição
    function animateTransition() {
        const content = document.getElementById('content');
        content.style.opacity = '0.7';
        
        setTimeout(() => {
            content.style.opacity = '1';
        }, 300);
    }
    
    // Função para inicializar eventos de tokens
    function initTokenEvents() {
        document.querySelectorAll('.class-tokens img').forEach(token => {
            token.addEventListener('click', function() {
                showTokenFullView(this.src, this.alt);
            });
        });
    }
    
    // Função para visualização completa do token
    function showTokenFullView(src, alt) {
        const overlay = document.createElement('div');
        overlay.className = 'token-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.cssText = `
            max-width: 80%;
            max-height: 70%;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.7);
            animation: zoomIn 0.4s ease;
            border: 5px solid white;
        `;
        
        const caption = document.createElement('div');
        caption.textContent = alt;
        caption.style.cssText = `
            color: white;
            font-size: 1.5rem;
            margin-top: 20px;
            text-align: center;
            background: rgba(0,0,0,0.7);
            padding: 10px 30px;
            border-radius: 10px;
            font-weight: bold;
        `;
        
        overlay.appendChild(img);
        overlay.appendChild(caption);
        overlay.addEventListener('click', function() {
            document.body.removeChild(this);
        });
        
        document.body.appendChild(overlay);
    }
    
    // Event Listeners
    swapButton.addEventListener('click', switchClass);
    prevSubclassBtn.addEventListener('click', () => switchSubclass('prev'));
    nextSubclassBtn.addEventListener('click', () => switchSubclass('next'));
    
    // Navegação por teclado
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                switchClass();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                // Voltar para classe anterior
                currentClassIndex = (currentClassIndex - 1 + classContents.length) % classContents.length;
                currentClass.classList.remove('active');
                currentClass = classContents[currentClassIndex];
                currentClass.classList.add('active');
                updateClassColor();
                updateSubclassControls();
                updateMobileSelector();
                animateTransition();
                break;
            case ',':
            case '<':
                switchSubclass('prev');
                break;
            case '.':
            case '>':
                switchSubclass('next');
                break;
        }
    });
    
    // Navegação por clique direto nas subclasses
    document.querySelectorAll('.subclass').forEach(subclass => {
        subclass.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                const subclasses = this.parentElement.querySelectorAll('.subclass');
                subclasses.forEach(s => s.classList.remove('active'));
                this.classList.add('active');
                updateSubclassControls();
                updateMobileSelector();
            }
        });
    });
    
    // Inicialização
    function init() {
        updateClassColor();
        updateSubclassControls();
        updateMobileSelector();
        initTokenEvents();
        
        // Adiciona hover às subclasses
        document.querySelectorAll('.subclass').forEach(subclass => {
            subclass.addEventListener('mouseenter', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                }
            });
            
            subclass.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
        
        // Adiciona efeito de clique nas classes
        document.querySelectorAll('.class-content').forEach(classContent => {
            classContent.addEventListener('click', function(e) {
                if (!e.target.closest('.subclass') && !e.target.closest('.class-tokens')) {
                    // Remove active de todas as classes
                    classContents.forEach(c => c.classList.remove('active'));
                    // Ativa esta classe
                    this.classList.add('active');
                    currentClassIndex = Array.from(classContents).indexOf(this);
                    currentClass = this;
                    updateClassColor();
                    updateSubclassControls();
                    updateMobileSelector();
                }
            });
        });
    }
    
    init();
});