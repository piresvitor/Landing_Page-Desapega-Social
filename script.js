// Ativação da animação ao rolar a página
document.addEventListener('DOMContentLoaded', () => {
    
    // Configura o Observer para detectar quando o elemento entra na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'active' que ativa a transição no CSS
                entry.target.classList.add('active');
                // Opcional: Descomente a linha abaixo se quiser que a animação ocorra apenas 1 vez
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Smooth scroll para os links da navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste devido ao header fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});
