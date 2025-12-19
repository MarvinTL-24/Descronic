// informações.js - JavaScript para a página de informações

document.addEventListener('DOMContentLoaded', function() {
    // ==============================================
    // 1. PRELOADER TEMÁTICO PARA CLASSES
    // ==============================================
    const preloader = document.getElementById('preloader');
    
    // Remove o preloader após 1.5 segundos (tempo da animação)
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // ==============================================
    // 2. ANIMAÇÃO DO PRELOADER (ESPADAS, ESCUDO, CAJADO)
    // ==============================================
    const classLoader = document.querySelector('.class-loader');
    if (classLoader) {
        const sword = classLoader.querySelector('.sword');
        const shield = classLoader.querySelector('.shield');
        const staff = classLoader.querySelector('.staff');
        
        // Anima cada elemento com timing diferente
        setTimeout(() => {
            if (sword) sword.style.animation = 'swordSwing 2s infinite ease-in-out';
        }, 300);
        
        setTimeout(() => {
            if (shield) shield.style.animation = 'shieldPulse 2s infinite ease-in-out 0.5s';
        }, 600);
        
        setTimeout(() => {
            if (staff) staff.style.animation = 'staffGlow 2s infinite ease-in-out 1s';
        }, 900);
    }

    // ==============================================
    // 3. MENU MOBILE
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
    // 4. HEADER SCROLL EFFECT
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

    // ==============================================
    // 5. PARTICULAS ANIMADAS NO HERO
    // ==============================================
    function createParticles() {
        const heroSection = document.querySelector('.classes-hero');
        if (!heroSection) return;
        
        // Cria um container para as partículas se não existir
        let particlesContainer = document.getElementById('particles');
        if (!particlesContainer) {
            particlesContainer = document.createElement('div');
            particlesContainer.id = 'particles';
            particlesContainer.className = 'particles-container';
            heroSection.appendChild(particlesContainer);
        }
        
        const particleCount = 60;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Tamanho aleatório
            const size = Math.random() * 5 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Posição aleatória
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Cor aleatória baseada nas classes
            const colors = ['#8a2be2', '#00ccff', '#ff2a6d', '#00ff88', '#ffcc00', '#ff3366'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = color;
            
            // Opacidade aleatória
            particle.style.opacity = Math.random() * 0.6 + 0.1;
            
            // Duração da animação aleatória
            const duration = Math.random() * 25 + 15;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // Animação de flutuação
            particle.style.animationName = 'float';
            particle.style.animationTimingFunction = 'ease-in-out';
            particle.style.animationIterationCount = 'infinite';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();

    // ==============================================
    // 6. CARDS DE CLASSE COM ANIMAÇÕES 3D
    // ==============================================
    const classCards = document.querySelectorAll('.class-card');
    
    classCards.forEach(card => {
        // Efeito de entrada ao scroll
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        
        // Adiciona atributo para rastrear se já foi animado
        card.setAttribute('data-animated', 'false');
        
        // Efeito 3D no hover
        card.addEventListener('mouseenter', function(e) {
            if (this.getAttribute('data-animated') === 'false') return;
            
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateY = ((mouseX - cardCenterX) / cardRect.width) * 15;
            const rotateX = ((cardCenterY - mouseY) / cardRect.height) * 15;
            const scale = 1.05;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), var(--shadow-glow)';
            
            // Anima o ícone
            const icon = this.querySelector('.card-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#00ccff';
            }
            
            // Efeito no overlay da imagem
            const overlay = this.querySelector('.card-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'translateY(0)';
            }
        });
        
        card.addEventListener('mousemove', function(e) {
            if (this.getAttribute('data-animated') === 'false') return;
            
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const rotateY = ((mouseX - cardCenterX) / cardRect.width) * 15;
            const rotateX = ((cardCenterY - mouseY) / cardRect.height) * 15;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '';
            
            // Reseta o ícone
            const icon = this.querySelector('.card-icon i');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
            
            // Reseta o overlay
            const overlay = this.querySelector('.card-overlay');
            if (overlay) {
                overlay.style.opacity = '';
                overlay.style.transform = '';
            }
        });
        
        // Efeito de brilho ao clicar
        card.addEventListener('click', function(e) {
            // Só aplica se não for um link interno
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Cria efeito de onda
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'radial-gradient(circle, rgba(138,43,226,0.3) 0%, transparent 70%)';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.top = `${y}px`;
            ripple.style.left = `${x}px`;
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ==============================================
    // 7. ANIMAÇÃO DE ENTRADA DAS SEÇÕES AO SCROLL
    // ==============================================
    const animatedSections = document.querySelectorAll('.classes-main > .container > *');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Anima a seção
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                // Anima os cards dentro da seção
                if (entry.target.classList.contains('classes-grid')) {
                    animateClassCards();
                }
                
                // Anima as estatísticas
                if (entry.target.classList.contains('stats-section')) {
                    animateStatsCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Aplica animação inicial a todos os elementos
    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });

    // ==============================================
    // 8. ANIMAÇÃO DOS CARDS EM SEQUÊNCIA
    // ==============================================
    function animateClassCards() {
        const cards = document.querySelectorAll('.class-card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                card.setAttribute('data-animated', 'true');
                
                // Efeito adicional no ícone
                const icon = card.querySelector('.card-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                    icon.style.transition = 'transform 0.5s ease';
                    
                    setTimeout(() => {
                        icon.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            icon.style.transform = 'scale(1)';
                        }, 300);
                    }, 300);
                }
                
                // Anima as barras de estatística
                const statBars = card.querySelectorAll('.stat-fill');
                statBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    
                    setTimeout(() => {
                        bar.style.transition = 'width 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
                        bar.style.width = width;
                    }, 500);
                });
                
            }, index * 150); // Delay escalonado
        });
    }

    // ==============================================
    // 9. SLIDER DE CITAÇÕES
    // ==============================================
    const quoteSlider = document.querySelector('.quote-slider');
    const quoteSlides = document.querySelectorAll('.quote-slide');
    const quoteDots = document.querySelectorAll('.quote-dot');
    const quotePrev = document.querySelector('.quote-prev');
    const quoteNext = document.querySelector('.quote-next');
    
    let currentQuoteIndex = 0;
    let quoteInterval;
    
    if (quoteSlider && quoteSlides.length > 0) {
        // Inicializa o slider
        function showQuote(index) {
            // Remove a classe active de todos os slides
            quoteSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove a classe active de todos os dots
            quoteDots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Adiciona a classe active ao slide atual
            quoteSlides[index].classList.add('active');
            quoteDots[index].classList.add('active');
            
            currentQuoteIndex = index;
        }
        
        // Função para próximo slide
        function nextQuote() {
            let nextIndex = currentQuoteIndex + 1;
            if (nextIndex >= quoteSlides.length) {
                nextIndex = 0;
            }
            showQuote(nextIndex);
        }
        
        // Função para slide anterior
        function prevQuote() {
            let prevIndex = currentQuoteIndex - 1;
            if (prevIndex < 0) {
                prevIndex = quoteSlides.length - 1;
            }
            showQuote(prevIndex);
        }
        
        // Event listeners
        if (quoteNext) {
            quoteNext.addEventListener('click', nextQuote);
        }
        
        if (quotePrev) {
            quotePrev.addEventListener('click', prevQuote);
        }
        
        // Event listeners para os dots
        quoteDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showQuote(index);
            });
        });
        
        // Auto-play
        function startQuoteAutoPlay() {
            quoteInterval = setInterval(nextQuote, 6000); // Muda a cada 6 segundos
        }
        
        function stopQuoteAutoPlay() {
            clearInterval(quoteInterval);
        }
        
        // Pausa o auto-play quando o mouse está sobre o slider
        if (quoteSlider) {
            quoteSlider.addEventListener('mouseenter', stopQuoteAutoPlay);
            quoteSlider.addEventListener('mouseleave', startQuoteAutoPlay);
        }
        
        // Inicia o auto-play
        startQuoteAutoPlay();
        
        // Anima a primeira citação
        setTimeout(() => {
            if (quoteSlides[0]) {
                quoteSlides[0].style.opacity = '1';
                quoteSlides[0].style.transform = 'translateY(0)';
            }
        }, 500);
    }

    // ==============================================
    // 10. ANIMAÇÃO DOS CONTADORES DE ESTATÍSTICAS
    // ==============================================
    function animateStatsCounters() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 segundos
            const step = Math.ceil(target / (duration / 16)); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                // Formatação especial para números grandes
                let displayNumber;
                if (target >= 1000) {
                    displayNumber = current.toLocaleString('pt-BR');
                } else {
                    displayNumber = current;
                }
                
                stat.textContent = displayNumber;
                
                // Efeito visual no número
                if (current % Math.ceil(target / 10) === 0 || current === target) {
                    stat.style.transform = 'scale(1.1)';
                    stat.style.color = '#00ccff';
                    
                    setTimeout(() => {
                        stat.style.transform = 'scale(1)';
                        setTimeout(() => {
                            stat.style.color = '';
                        }, 200);
                    }, 150);
                }
            }, 16); // Aproximadamente 60fps
        });
        
        // Anima os ícones das estatísticas
        const statIcons = document.querySelectorAll('.stat-icon');
        statIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.color = '#8a2be2';
                
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                    setTimeout(() => {
                        icon.style.color = '';
                    }, 300);
                }, 300);
            }, index * 200);
        });
    }

    // ==============================================
    // 11. ANIMAÇÃO DOS CARDS DE RECOMPENSA
    // ==============================================
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        // Anima em sequência
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Efeito no ícone
            const icon = item.querySelector('.feature-icon');
            if (icon) {
                setTimeout(() => {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.5)';
                    
                    setTimeout(() => {
                        icon.style.transform = 'scale(1)';
                        setTimeout(() => {
                            icon.style.boxShadow = '';
                        }, 300);
                    }, 300);
                }, 300);
            }
        }, index * 200);
    });

    // ==============================================
    // 12. ANIMAÇÃO DO HERO SECTION
    // ==============================================
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Esconde inicialmente para animação
        heroContent.style.opacity = '0';
        
        // Anima após o preloader
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            
            // Anima o título
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                const text = heroTitle.textContent;
                heroTitle.textContent = '';
                
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        heroTitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 50);
                    } else {
                        // Após terminar, anima os elementos restantes
                        animateHeroStats();
                    }
                }
                
                setTimeout(typeWriter, 300);
            }
            
            // Anima os stats do hero
            function animateHeroStats() {
                const heroStats = document.querySelectorAll('.hero-stats .stat');
                heroStats.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.opacity = '1';
                        stat.style.transform = 'translateY(0)';
                        
                        // Efeito no número
                        const number = stat.querySelector('.stat-number');
                        if (number) {
                            number.style.transform = 'scale(1.2)';
                            number.style.color = '#00ccff';
                            
                            setTimeout(() => {
                                number.style.transform = 'scale(1)';
                                setTimeout(() => {
                                    number.style.color = '';
                                }, 300);
                            }, 300);
                        }
                    }, index * 200);
                });
            }
        }, 1600);
    }

    // ==============================================
    // 13. ANIMAÇÃO DOS BOTÕES DE LINK
    // ==============================================
    const cardLinks = document.querySelectorAll('.card-link');
    
    cardLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 204, 255, 0.3)';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(45deg)';
                icon.style.marginLeft = '10px';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = '';
                icon.style.marginLeft = '';
            }
        });
    });

    // ==============================================
    // 14. FILTRO DE CATEGORIAS DE CARDS
    // ==============================================
    // Se houver filtros de categoria na página
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Remove active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Filtra os cards
                classCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        
                        // Anima o card
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ==============================================
    // 15. ATUALIZAR ANO NO FOOTER
    // ==============================================
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ==============================================
    // 16. ANIMAÇÃO DO SCROLL SUAVE
    // ==============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==============================================
    // 17. EFEITO DE RIPPLE PARA TODOS OS BOTÕES
    // ==============================================
    document.querySelectorAll('button, .btn, .card-link, .social-link').forEach(button => {
        button.addEventListener('click', function(e) {
            // Cria efeito de onda
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.top = `${y}px`;
            ripple.style.left = `${x}px`;
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ==============================================
    // 18. KEYFRAMES DINÂMICOS PARA ANIMAÇÕES
    // ==============================================
    // Adiciona keyframes para o efeito ripple se não existir
    if (!document.querySelector('#ripple-keyframes')) {
        const style = document.createElement('style');
        style.id = 'ripple-keyframes';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes swordSwing {
                0% { transform: rotate(0deg) translateY(0); }
                25% { transform: rotate(45deg) translateY(-10px); }
                50% { transform: rotate(0deg) translateY(0); }
                75% { transform: rotate(-45deg) translateY(-10px); }
                100% { transform: rotate(0deg) translateY(0); }
            }
            
            @keyframes shieldPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            @keyframes staffGlow {
                0%, 100% { 
                    box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);
                    filter: brightness(1);
                }
                50% { 
                    box-shadow: 0 0 20px rgba(0, 204, 255, 0.8);
                    filter: brightness(1.5);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ==============================================
    // 19. DETECÇÃO DE VISIBILIDADE DA PÁGINA
    // ==============================================
    // Pausa animações quando a página não está visível
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Pausa o slider de citações
            if (quoteInterval) clearInterval(quoteInterval);
        } else {
            // Retoma o slider
            if (quoteSlider) {
                startQuoteAutoPlay();
            }
        }
    });

    // ==============================================
    // 20. EFICIÊNCIA DE PERFORMANCE
    // ==============================================
    // Otimiza animações para melhor performance
    const animatedElements = document.querySelectorAll('.class-card, .feature-item, .stat-card');
    animatedElements.forEach(el => {
        el.style.willChange = 'transform, opacity';
    });
    
    // Remove will-change após animações
    setTimeout(() => {
        animatedElements.forEach(el => {
            el.style.willChange = 'auto';
        });
    }, 3000);
});

// ==============================================
// 21. ANIMAÇÃO DO BACKGROUND DO HERO
// ==============================================
// Adiciona um efeito de parallax ao background do hero
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.classes-hero');
    if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroSection.style.backgroundPosition = `center ${rate}px`;
    }
});

// ==============================================
// 22. RESIZE OBSERVER PARA RESPONSIVIDADE
// ==============================================
// Ajusta animações baseado no tamanho da tela
const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        // Recalcula posições para animações 3D
        const classCards = document.querySelectorAll('.class-card');
        classCards.forEach(card => {
            card.style.transform = ''; // Reseta transformações
        });
    }
});

// Observa mudanças no container principal
const mainContainer = document.querySelector('.classes-main');
if (mainContainer) {
    resizeObserver.observe(mainContainer);
}

// ==============================================
// 23. HOTKEYS PARA NAVEGAÇÃO
// ==============================================
document.addEventListener('keydown', function(e) {
    // Navegação do slider de citações com setas
    if (e.key === 'ArrowRight') {
        const quoteNext = document.querySelector('.quote-next');
        if (quoteNext) quoteNext.click();
    }
    
    if (e.key === 'ArrowLeft') {
        const quotePrev = document.querySelector('.quote-prev');
        if (quotePrev) quotePrev.click();
    }
    
    // Tecla ESC fecha menu mobile
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// ==============================================
// 24. LOADING DINÂMICO DE IMAGENS
// ==============================================
// Adiciona loading lazy para imagens
document.querySelectorAll('.card-image img').forEach(img => {
    // Adiciona uma classe para estilo de loading
    img.classList.add('lazy-load');
    
    // Carrega a imagem se já estiver no viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                // Simula loading
                setTimeout(() => {
                    img.style.opacity = '1';
                    
                    // Adiciona efeito de entrada
                    img.style.filter = 'brightness(1.2)';
                    setTimeout(() => {
                        img.style.filter = 'brightness(1)';
                    }, 300);
                }, 300);
                
                observer.unobserve(img);
            }
        });
    });
    
    observer.observe(img);
});

// ==============================================
// 25. DEBUG E LOGS (APENAS PARA DESENVOLVIMENTO)
// ==============================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('DESCRONIC\'S Informações - JavaScript carregado com sucesso!');
    console.log(`Total de cards: ${classCards.length}`);
    console.log(`Total de citações: ${quoteSlides ? quoteSlides.length : 0}`);
}