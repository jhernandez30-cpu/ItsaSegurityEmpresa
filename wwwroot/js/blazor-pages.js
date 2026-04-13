// wwwroot/js/blazor-pages.js (versión sin librerías externas)

window.itsaPages = {
    initParticles: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Agregamos una clase para el fondo animado definido en app.css
        container.classList.add('animated-bg');

        // Creamos partículas CSS simples
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'css-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.width = particle.style.height = (Math.random() * 6 + 2) + 'px';
            container.appendChild(particle);
        }
    },

    initGsap: function () {
        // Animaciones con JS nativo (sin GSAP)
        const elements = document.querySelectorAll('.hero-title, .hero-subtitle, .btn, .servicio-card, .metodologia-item');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Revelado al scroll con Intersection Observer
        const revealElements = document.querySelectorAll('.reveal, .servicio-card, .metodologia-item, .glass-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    },

    initThreeBackground: function (containerId) {
        const container = document.getElementById(containerId);
        if (!container || container.dataset.initialized === 'true') return;

        // Creamos un canvas con gradiente animado (alternativa a Three.js)
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        container.appendChild(canvas);
        container.dataset.initialized = 'true';

        const ctx = canvas.getContext('2d');
        let width, height;
        let hue = 200; // tono azul

        function resizeCanvas() {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function draw() {
            if (!container.isConnected) return;

            hue = (hue + 0.2) % 360;
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, `hsl(${hue}, 70%, 8%)`);
            gradient.addColorStop(0.5, `hsl(${(hue + 40) % 360}, 60%, 12%)`);
            gradient.addColorStop(1, `hsl(${(hue + 80) % 360}, 70%, 5%)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            requestAnimationFrame(draw);
        }
        draw();
    }
};

// Definimos siteEffects.initReveal (si no existe en el componente se puede ignorar)
window.siteEffects = {
    initReveal: function () {
        // Ya manejado por initGsap con Intersection Observer
    }
};
