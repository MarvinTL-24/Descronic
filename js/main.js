// Dados das classes (estrutura completa)
        const cyberClasses = [
            {
                id: 'assassin',
                name: 'ASSASSIN',
                description: 'Mestre da furtividade e ataques precisos. Especialista em eliminar alvos importantes antes que percebam sua presença. Movimentação ágil e golpes letais são suas marcas registradas.',
                logo: 'img/imagens/classes.logo/Logo.Assasino.jpg',
                tokens: [
                    { src: 'src/assets/classes/Assasin/tokens/Assasin_1.png', name: 'Assassin'},
                    { src: 'src/assets/classes/Assasin/tokens/Assasin_1t.png', name: 'Assassin' },
                    { src: 'src/assets/classes/Assasin/tokens/Assasin_2t.png', name: 'Assassin' }
                ],
                subclasses: [
                    {
                        name: 'SHADOW BLADE',
                        description: 'Especialista em ataques furtivos com adagas envenenadas. Pode se tornar invisível por curtos períodos e atacar pelas sombras.',
                        stats: [
                            { icon: 'fas fa-bolt', label: 'Dano', value: 'Alto' },
                            { icon: 'fas fa-shield-alt', label: 'Defesa', value: 'Baixa' },
                            { icon: 'fas fa-running', label: 'Mobilidade', value: 'Alta' },
                            { icon: 'fas fa-eye-slash', label: 'Furtividade', value: 'Máxima' }
                        ]
                    },
                    {
                        name: 'NIGHT STALKER',
                        description: 'Caçador noturno que usa o ambiente a seu favor. Habilidades de controle de área e emboscadas em grupo.',
                        stats: [
                            { icon: 'fas fa-bolt', label: 'Dano', value: 'Médio' },
                            { icon: 'fas fa-shield-alt', label: 'Defesa', value: 'Baixa' },
                            { icon: 'fas fa-eye', label: 'Visão', value: 'Expandida' },
                            { icon: 'fas fa-moon', label: 'Nocturno', value: 'Sim' }
                        ]
                    }
                ]
            },
            {
                id: 'atirador',
                name: 'ATIRADOR',
                description: 'Especialista em combate à distância com armas de fogo e arcos. Mestre da precisão e posicionamento tático. Mantém inimigos à distância enquanto causa dano contínuo.',
                logo: 'img/imagens/classes.logo/Logo.Atirador.jpg',
                tokens: [
                    { src: 'src/assets/classes/Atirador/tokens/Atirador_1.png', name: 'Atirador'},
                    { src: 'src/assets/classes/Atirador/tokens/Atirador_1t.png', name: 'Atirador' },
                    { src: 'src/assets/classes/Atirador/tokens/Atirador_2t.png', name: 'Atirador' }
                ],
                subclasses: [
                    {
                        name: 'SNIPER ELITE',
                        description: 'Precisão extrema à longa distância. Dano crítico aumentado contra alvos isolados e em posições elevadas.',
                        stats: [
                            { icon: 'fas fa-crosshairs', label: 'Precisão', value: 'Máxima' },
                            { icon: 'fas fa-bolt', label: 'Dano', value: 'Extremo' },
                            { icon: 'fas fa-running', label: 'Mobilidade', value: 'Baixa' },
                            { icon: 'fas fa-bullseye', label: 'Alcance', value: 'Extremo' }
                        ]
                    },
                    {
                        name: 'GUNSLINGER',
                        description: 'Especialista em armas de fogo rápidas. Alta taxa de disparo e movimento durante o ataque, ideal para combate em movimento.',
                        stats: [
                            { icon: 'fas fa-tachometer-alt', label: 'Velocidade', value: 'Alta' },
                            { icon: 'fas fa-bolt', label: 'Dano', value: 'Médio' },
                            { icon: 'fas fa-redo', label: 'Recarga', value: 'Rápida' },
                            { icon: 'fas fa-fire', label: 'Cadência', value: 'Alta' }
                        ]
                    }
                ]
            },
            {
                id: 'berserker',
                name: 'BERSERKER',
                description: 'Guerreiro de fúria incontrolável que ganha poder conforme perde vida. Quanto mais ferido, mais perigoso se torna. Entra em frenesi quando à beira da morte.',
                logo: 'img/imagens/classes.logo/Logo.Berserker.jpg',
                tokens: [
                    { src: 'src/assets/classes/Berserker/tokens/Berserker_1.png', name: 'Berserker'},
                    { src: 'src/assets/classes/Berserker/tokens/Berserker_1t.png', name: 'Berserker' },
                    { src: 'src/assets/classes/Berserker/tokens/Berserker_2t.png', name: 'Berserker' }
                ],
                subclasses: [
                    {
                        name: 'BLOOD FURY',
                        description: 'Converte dano recebido em poder de ataque. Fúria aumenta com cada golpe recebido, tornando-se imbatível em batalhas prolongadas.',
                        stats: [
                            { icon: 'fas fa-fist-raised', label: 'Força', value: 'Extrema' },
                            { icon: 'fas fa-heart', label: 'Vida', value: 'Média' },
                            { icon: 'fas fa-fire', label: 'Fúria', value: 'Crescente' },
                            { icon: 'fas fa-skull', label: 'Frenesi', value: 'Sim' }
                        ]
                    },
                    {
                        name: 'WAR MACHINE',
                        description: 'Foco em armas de duas mãos e destruição em área. Pode quebrar defesas inimigas e causar dano massivo a grupos.',
                        stats: [
                            { icon: 'fas fa-shield-alt', label: 'Quebra-defesa', value: 'Alta' },
                            { icon: 'fas fa-bolt', label: 'Dano em Área', value: 'Alto' },
                            { icon: 'fas fa-user-shield', label: 'Armadura', value: 'Pesada' },
                            { icon: 'fas fa-users', label: 'Vs Grupos', value: '+50%' }
                        ]
                    }
                ]
            },
            {
                id: 'desbravador',
                name: 'DESBRAVADOR',
                description: 'Explorador e sobrevivente nato. Especialista em terreno desconhecido e armadilhas. Conhece os segredos da natureza e usa o ambiente como arma.',
                logo: 'img/imagens/classes.logo/Logo.Desbravador.jpg',
                tokens: [
                    { src: 'src/assets/classes/Desbravador/tokens/Desbravador_1.png', name: 'Desbravador'},
                    { src: 'src/assets/classes/Desbravador/tokens/Desbravador_1t.png', name: 'Desbravador' },
                    { src: 'src/assets/classes/Desbravador/tokens/Desbravador_2t.png', name: 'Desbravador' }
                ],
                subclasses: [
                    {
                        name: 'PATHFINDER',
                        description: 'Mestre na navegação e descoberta de rotas secretas. Consegue encontrar recursos ocultos e atalhos em qualquer terreno.',
                        stats: [
                            { icon: 'fas fa-map', label: 'Navegação', value: 'Perfeita' },
                            { icon: 'fas fa-compass', label: 'Orientação', value: 'Excelente' },
                            { icon: 'fas fa-tree', label: 'Sobrevivência', value: 'Alta' },
                            { icon: 'fas fa-road', label: 'Atalhos', value: 'Múltiplos' }
                        ]
                    },
                    {
                        name: 'TRAPPER',
                        description: 'Especialista em armadilhas e emboscadas. Prepara o campo de batalha com vantagens táticas antes do confronto.',
                        stats: [
                            { icon: 'fas fa-tools', label: 'Engenharia', value: 'Média' },
                            { icon: 'fas fa-mask', label: 'Furtividade', value: 'Alta' },
                            { icon: 'fas fa-brain', label: 'Estratégia', value: 'Alta' },
                            { icon: 'fas fa-exclamation-triangle', label: 'Armadilhas', value: '10+' }
                        ]
                    }
                ]
            },
            {
                id: 'espiritualista',
                name: 'ESPIRITUALISTA',
                description: 'Mestre das artes espirituais, capaz de invocar espíritos e manipular energias sobrenaturais. Seu poder está em controlar o campo de batalha com entidades invisíveis.',
                logo: 'img/imagens/classes.logo/Logo.pactualista.jpg',
                tokens: [
                    { src: 'src/assets/classes/Espiritualista/tokens/Espiritualista_1.png', name: 'Espiritualista'},
                    { src: 'src/assets/classes/Espiritualista/tokens/Espiritualista_1t.png', name: 'Espiritualista' },
                    { src: 'src/assets/classes/Espiritualista/tokens/Espiritualista_2t.png', name: 'Espiritualista' }
                ],
                subclasses: [
                    {
                        name: 'SPIRIT CALLER',
                        description: 'Invoca espíritos ancestrais para lutar ao seu lado. Cada espírito tem habilidades únicas de combate e suporte.',
                        stats: [
                            { icon: 'fas fa-ghost', label: 'Invocações', value: 'Múltiplas' },
                            { icon: 'fas fa-magic', label: 'Poder Espiritual', value: 'Alto' },
                            { icon: 'fas fa-users', label: 'Controle', value: 'Múltiplo' },
                            { icon: 'fas fa-history', label: 'Espíritos', value: '3-5' }
                        ]
                    },
                    {
                        name: 'MIND WEAVER',
                        description: 'Manipula mentes e emoções dos inimigos. Pode causar confusão, medo ou até controlar oponentes temporariamente.',
                        stats: [
                            { icon: 'fas fa-brain', label: 'Manipulação', value: 'Alta' },
                            { icon: 'fas fa-eye', label: 'Percepção', value: 'Extrema' },
                            { icon: 'fas fa-head-side-virus', label: 'Controle Mental', value: 'Médio' },
                            { icon: 'fas fa-user-friends', label: 'Alvos', value: 'Múltiplos' }
                        ]
                    }
                ]
            },
            {
                id: 'guerreiro',
                name: 'GUERREIRO',
                description: 'Mestre do combate corpo a corpo com equilíbrio perfeito entre ataque e defesa. Versátil e adaptável a qualquer situação de combate.',
                logo: 'img/imagens/classes.logo/Logo.Guerreiro.jpg',
                tokens: [
                    { src: 'src/assets/classes/Guerreiro/tokens/Guerreiro_1.png', name: 'Guerreiro'},
                    { src: 'src/assets/classes/Guerreiro/tokens/Guerreiro_1t.png', name: 'Guerreiro' },
                    { src: 'src/assets/classes/Guerreiro/tokens/Guerreiro_2t.png', name: 'Guerreiro' }
                ],
                subclasses: [
                    {
                        name: 'KNIGHT',
                        description: 'Especialista em defesa e proteção. Usa armadura pesada e escudo para proteger aliados enquanto mantém a linha de frente.',
                        stats: [
                            { icon: 'fas fa-shield-alt', label: 'Defesa', value: 'Máxima' },
                            { icon: 'fas fa-heart', label: 'Resistência', value: 'Alta' },
                            { icon: 'fas fa-hands-helping', label: 'Proteção', value: 'Aliados' },
                            { icon: 'fas fa-user-shield', label: 'Armadura', value: 'Pesada' }
                        ]
                    },
                    {
                        name: 'CHAMPION',
                        description: 'Guerreiro equilibrado com habilidades ofensivas e defensivas. Excelente em duelos e combate individual.',
                        stats: [
                            { icon: 'fas fa-balance-scale', label: 'Equilíbrio', value: 'Perfeito' },
                            { icon: 'fas fa-sword', label: 'Ataque', value: 'Alto' },
                            { icon: 'fas fa-shield-alt', label: 'Defesa', value: 'Alto' },
                            { icon: 'fas fa-trophy', label: 'Duelos', value: 'Excelente' }
                        ]
                    }
                ]
            },
            {
                id: 'mago',
                name: 'MAGO',
                description: 'Mestre das artes arcanas e manipulação elemental. Controla os elementos da natureza para causar destruição em massa ou suporte estratégico.',
                logo: 'img/imagens/classes.logo/Logo.Mago.jpg',
                tokens: [
                    { src: 'src/assets/classes/Mago/tokens/Mago_1.png', name: 'Mago'},
                    { src: 'src/assets/classes/Mago/tokens/Mago_1t.png', name: 'Mago' },
                    { src: 'src/assets/classes/Mago/tokens/Mago_2t.png', name: 'Mago' }
                ],
                subclasses: [
                    {
                        name: 'ELEMENTALIST',
                        description: 'Controla os quatro elementos: fogo, água, terra e ar. Combina elementos para criar efeitos devastadores.',
                        stats: [
                            { icon: 'fas fa-fire', label: 'Elementos', value: '4' },
                            { icon: 'fas fa-bolt', label: 'Dano', value: 'Extremo' },
                            { icon: 'fas fa-snowflake', label: 'Controle', value: 'Área' },
                            { icon: 'fas fa-wind', label: 'Versatilidade', value: 'Alta' }
                        ]
                    },
                    {
                        name: 'ARCHMAGE',
                        description: 'Mestre em magias complexas e rituais. Pode lançar feitiços poderosos que alteram a realidade ao seu redor.',
                        stats: [
                            { icon: 'fas fa-book', label: 'Conhecimento', value: 'Ilimitado' },
                            { icon: 'fas fa-star', label: 'Poder Arcano', value: 'Máximo' },
                            { icon: 'fas fa-hourglass', label: 'Conjuração', value: 'Lenta' },
                            { icon: 'fas fa-hat-wizard', label: 'Feitiços', value: 'Complexos' }
                        ]
                    }
                ]
            },
            {
                id: 'paladino',
                name: 'PALADINO',
                description: 'Cavaleiro sagrado que combina força divina com combate físico. Protege os inocentes e purifica o mal com luz sagrada e justiça divina.',
                logo: 'img/imagens/classes.logo/Logo.Paladino.jpg',
                tokens: [
                    { src: 'src/assets/classes/Paladino/tokens/Paladino_1.png', name: 'Paladino'},
                    { src: 'src/assets/classes/Paladino/tokens/Paladino_1t.png', name: 'Paladino' },
                    { src: 'src/assets/classes/Paladino/tokens/Paladino_2t.png', name: 'Paladino' }
                ],
                subclasses: [
                    {
                        name: 'HOLY KNIGHT',
                        description: 'Focado em cura e proteção divina. Usa bênçãos sagradas para curar aliados e fortalecer defesas contra o mal.',
                        stats: [
                            { icon: 'fas fa-heart', label: 'Cura', value: 'Alta' },
                            { icon: 'fas fa-shield-alt', label: 'Proteção', value: 'Divina' },
                            { icon: 'fas fa-cross', label: 'Sagrado', value: 'Puro' },
                            { icon: 'fas fa-hands', label: 'Suporte', value: 'Excelente' }
                        ]
                    },
                    {
                        name: 'CRUSADER',
                        description: 'Guerreiro sagrado ofensivo. Canaliza poder divino para causar dano massivo a criaturas das trevas e não-mortos.',
                        stats: [
                            { icon: 'fas fa-sun', label: 'Luz', value: 'Ofensiva' },
                            { icon: 'fas fa-bolt', label: 'Dano Sagrado', value: 'Alto' },
                            { icon: 'fas fa-skull-crossbones', label: 'Vs. Trevas', value: '+50%' },
                            { icon: 'fas fa-hammer', label: 'Justiça', value: 'Divina' }
                        ]
                    }
                ]
            }
        ];

        // Estado da aplicação
        let currentClassIndex = 0;
        let currentSubclassIndex = 0;

        // Elementos DOM
        const preloader = document.getElementById('cyber-preloader');
        const swapButton = document.getElementById('cyber-swap');
        const prevSubclassBtn = document.getElementById('cyber-prev-subclass');
        const nextSubclassBtn = document.getElementById('cyber-next-subclass');
        const subclassNameElement = document.getElementById('cyber-subclass-name');
        const classListContainer = document.getElementById('class-list-container');
        const subclassContainer = document.getElementById('subclass-container');
        const tokensContainer = document.getElementById('tokens-container');
        const currentLogo = document.getElementById('current-logo');
        const currentClassName = document.getElementById('current-class-name');
        const currentClassDesc = document.getElementById('current-class-desc');
        const tokenModal = document.getElementById('token-modal');
        const closeTokenModal = document.getElementById('close-token-modal');
        const modalTokenImage = document.getElementById('modal-token-image');
        const modalTokenName = document.getElementById('modal-token-name');
        const modalTokenDesc = document.getElementById('modal-token-desc');

        // Inicialização
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1500);

            renderClassList();
            updateClassDisplay();
            initEventListeners();
        });

        // Renderizar lista de classes
        function renderClassList() {
            cyberClasses.forEach((cls, index) => {
                const classItem = document.createElement('div');
                classItem.className = `cyber-class-item ${index === 0 ? 'active' : ''}`;
                classItem.setAttribute('data-index', index);
                classItem.innerHTML = `
                    <div class="cyber-class-icon" style="background: ${getClassColor(index)}">
                        ${cls.name.charAt(0)}
                    </div>
                    <div class="cyber-class-name">${cls.name}</div>
                    <i class="fas fa-chevron-right"></i>
                `;
                classItem.addEventListener('click', () => selectClass(index));
                classListContainer.appendChild(classItem);
            });
        }

        // Atualizar display da classe
        function updateClassDisplay() {
            const currentClass = cyberClasses[currentClassIndex];
            
            // Atualizar elementos principais
            currentLogo.src = currentClass.logo;
            currentClassName.textContent = currentClass.name;
            currentClassDesc.textContent = currentClass.description;
            
            // Atualizar subclasses
            renderSubclasses();
            
            // Atualizar tokens
            renderTokens();
            
            // Atualizar nome da subclasse ativa
            updateSubclassName();
            
            // Atualizar lista de classes ativa
            updateActiveClassItem();
        }

        // Renderizar subclasses
        function renderSubclasses() {
            subclassContainer.innerHTML = '';
            const currentClass = cyberClasses[currentClassIndex];
            
            currentClass.subclasses.forEach((subclass, index) => {
                const subclassCard = document.createElement('div');
                subclassCard.className = `cyber-subclass-card ${index === currentSubclassIndex ? 'active' : ''}`;
                subclassCard.setAttribute('data-index', index);
                
                // Gerar HTML dos stats
                const statsHTML = subclass.stats.map(stat => `
                    <div class="cyber-stat-item">
                        <i class="${stat.icon}"></i>
                        <span>${stat.label}: <strong>${stat.value}</strong></span>
                    </div>
                `).join('');
                
                subclassCard.innerHTML = `
                    <h4>${subclass.name}</h4>
                    <p>${subclass.description}</p>
                    <div class="cyber-subclass-stats">
                        ${statsHTML}
                    </div>
                `;
                
                subclassCard.addEventListener('click', () => selectSubclass(index));
                subclassContainer.appendChild(subclassCard);
            });
        }

        // Renderizar tokens
        function renderTokens() {
            tokensContainer.innerHTML = '';
            const currentClass = cyberClasses[currentClassIndex];
            
            currentClass.tokens.forEach((token, index) => {
                const tokenItem = document.createElement('div');
                tokenItem.className = 'cyber-token-item';
                tokenItem.innerHTML = `
                    <img src="${token.src}" alt="${token.name}" loading="lazy">
                    <span>${token.name}</span>
                `;
                tokenItem.addEventListener('click', () => showTokenModal(token));
                tokensContainer.appendChild(tokenItem);
            });
        }

        // Atualizar nome da subclasse
        function updateSubclassName() {
            const currentClass = cyberClasses[currentClassIndex];
            subclassNameElement.textContent = currentClass.subclasses[currentSubclassIndex].name;
        }

        // Atualizar item ativo na lista
        function updateActiveClassItem() {
            document.querySelectorAll('.cyber-class-item').forEach((item, index) => {
                item.classList.toggle('active', index === currentClassIndex);
            });
        }

        // Selecionar classe
        function selectClass(index) {
            if (index === currentClassIndex) return;
            
            currentClassIndex = index;
            currentSubclassIndex = 0;
            
            // Animação de transição
            const classView = document.getElementById('cyber-class-view');
            classView.style.opacity = '0.7';
            
            setTimeout(() => {
                updateClassDisplay();
                classView.style.opacity = '1';
            }, 300);
            
            // Efeito sonoro (opcional)
            playSoundEffect('select');
        }

        // Selecionar subclasse
        function selectSubclass(index) {
            if (index === currentSubclassIndex) return;
            
            currentSubclassIndex = index;
            updateSubclassName();
            
            // Atualizar cards de subclasse
            document.querySelectorAll('.cyber-subclass-card').forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            // Efeito sonoro (opcional)
            playSoundEffect('click');
        }

        // Mostrar modal do token
        function showTokenModal(token) {
            modalTokenImage.src = token.src;
            modalTokenName.textContent = token.name;
            modalTokenDesc.textContent = `Token da classe ${cyberClasses[currentClassIndex].name}`;
            tokenModal.classList.add('active');
            
            // Bloquear scroll do body
            document.body.style.overflow = 'hidden';
        }

        // Fechar modal do token
        function closeModal() {
            tokenModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Inicializar event listeners
        function initEventListeners() {
            // Botão de trocar classe
            swapButton.addEventListener('click', () => {
                selectClass((currentClassIndex + 1) % cyberClasses.length);
                playSoundEffect('swap');
            });

            // Botões de navegação de subclasse
            prevSubclassBtn.addEventListener('click', () => {
                const currentClass = cyberClasses[currentClassIndex];
                const newIndex = (currentSubclassIndex - 1 + currentClass.subclasses.length) % currentClass.subclasses.length;
                selectSubclass(newIndex);
            });

            nextSubclassBtn.addEventListener('click', () => {
                const currentClass = cyberClasses[currentClassIndex];
                const newIndex = (currentSubclassIndex + 1) % currentClass.subclasses.length;
                selectSubclass(newIndex);
            });

            // Fechar modal
            closeTokenModal.addEventListener('click', closeModal);
            tokenModal.addEventListener('click', (e) => {
                if (e.target === tokenModal) closeModal();
            });

            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'ArrowRight':
                        selectClass((currentClassIndex + 1) % cyberClasses.length);
                        break;
                    case 'ArrowLeft':
                        selectClass((currentClassIndex - 1 + cyberClasses.length) % cyberClasses.length);
                        break;
                    case 'ArrowUp':
                        const currentClass = cyberClasses[currentClassIndex];
                        const prevSub = (currentSubclassIndex - 1 + currentClass.subclasses.length) % currentClass.subclasses.length;
                        selectSubclass(prevSub);
                        break;
                    case 'ArrowDown':
                        const currClass = cyberClasses[currentClassIndex];
                        const nextSub = (currentSubclassIndex + 1) % currClass.subclasses.length;
                        selectSubclass(nextSub);
                        break;
                    case 'Escape':
                        closeModal();
                        break;
                }
            });
        }

        // Gerar cor para a classe (baseado no índice)
        function getClassColor(index) {
            const colors = [
                'linear-gradient(135deg, #8a2be2, #00ccff)',
                'linear-gradient(135deg, #ff2a6d, #ffcc00)',
                'linear-gradient(135deg, #00ccff, #8a2be2)',
                'linear-gradient(135deg, #27ae60, #229954)',
                'linear-gradient(135deg, #8e44ad, #732d91)',
                'linear-gradient(135deg, #7f8c8d, #616a6b)',
                'linear-gradient(135deg, #3498db, #2980b9)',
                'linear-gradient(135deg, #f39c12, #d68910)'
            ];
            return colors[index % colors.length];
        }

        // Efeitos sonoros (opcional - pode ser implementado com Web Audio API)
        function playSoundEffect(type) {
            // Esta é uma implementação básica
            // Para uma experiência completa, implemente com Web Audio API
            console.log(`Playing sound: ${type}`);
        }

        // Efeitos de partículas (opcional)
        function createParticles(x, y) {
            // Implementação opcional de partículas
        }
        document.addEventListener('DOMContentLoaded', function() {
            // ==============================================
            // MENU MOBILE
            // ==============================================
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenu = document.getElementById('mobileMenu');
            
            function openMobileMenu() {
                mobileMenuOverlay.classList.add('active');
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function closeMobileMenu() {
                mobileMenuOverlay.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            mobileMenuToggle.addEventListener('click', openMobileMenu);
            mobileMenuClose.addEventListener('click', closeMobileMenu);
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
            
            // Fecha o menu ao clicar em um link
            const mobileLinks = document.querySelectorAll('.mobile-nav a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });

            // ==============================================
            // HEADER SCROLL EFFECT
            // ==============================================
            const header = document.querySelector('.main-header');
            
            function updateHeaderOnScroll() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
            
            window.addEventListener('scroll', updateHeaderOnScroll);
            updateHeaderOnScroll();

            // Adiciona efeito de rolagem suave para links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });