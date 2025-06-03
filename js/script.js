// Script para funcionalidades interativas do site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');

            const redimention = window.screen.width

            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if(redimention < 767){
                    window.scrollTo({
                        top: targetElement.offsetTop - 300,
                        behavior: 'smooth'
                    })
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 130,
                        behavior: 'smooth'
                    });

                }

                
                // Fechar o menu mobile após clicar em um link
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Animação para os cards de tratamentos e depoimentos
    const animatedItems = document.querySelectorAll('.treatment-item, .testimonial-card');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Função para adicionar classe de animação aos elementos visíveis
    function handleScrollAnimation() {
        animatedItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('animated');
            }
        });
    }
    
    // Verificar elementos visíveis no carregamento inicial
    handleScrollAnimation();
    
    // Verificar elementos visíveis durante a rolagem
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Destacar item de menu ativo com base na posição de rolagem
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && sectionId) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
    });
    
    // Inicializar tooltips do Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Adicionar efeito de hover nos cards de tratamentos
    const treatmentItems = document.querySelectorAll('.treatment-item');
    treatmentItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = '#731837';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = '#c69c6d';
        });
    });
});


