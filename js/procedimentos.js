document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o carrossel de antes e depois
    const antesDepsCarrossel = new Swiper('.antes-depois-carrossel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        }
    });

    // Inicializar o carrossel de procedimentos clínicos
    const procedimentosCarrossel = new Swiper('.procedimentos-carrossel', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-procedimentos',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-procedimentos',
            prevEl: '.swiper-button-prev-procedimentos',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Animação para os cards de procedimentos
    const procedimentosCards = document.querySelectorAll('.procedimento-card');
    
    procedimentosCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });

    // Inicializar o lightbox para as imagens
    const lightbox = GLightbox({
        selector: '.procedimento-lightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
});
