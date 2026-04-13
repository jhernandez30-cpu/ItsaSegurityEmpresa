window.itsaPages = {
    initParticles: function (elementId) {
        if (!window.particlesJS || !document.getElementById(elementId)) return;

        particlesJS(elementId, {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: "#00aaff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
                size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.3 } },
                line_linked: { enable: true, distance: 150, color: "#00aaff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 1.5, direction: "none", random: true, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" }
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    },

    initGsap: function () {
        if (!window.gsap) return;

        if (window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.utils.toArray('.servicio-card, .metodologia-item, .categoria-tech, .glass-card, .tech-item').forEach((el, index) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                scale: el.classList.contains('tech-item') ? 0.9 : 1,
                duration: 0.6,
                delay: index * 0.02,
                ease: 'power2.out'
            });
        });
    },

    initThreeBackground: async function (containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        if (container.dataset.initialized === "true") return;

        if (!window.__itsaThreeLoader) {
            window.__itsaThreeLoader = import('https://unpkg.com/three@0.128.0/build/three.module.js');
        }

        const THREE = await window.__itsaThreeLoader;

        container.innerHTML = "";
        container.dataset.initialized = "true";

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0x00aaff,
            size: 0.05,
            transparent: true,
            opacity: 0.6
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const boxGeometry = new THREE.BoxGeometry(2.2, 2.2, 2.2);
        const boxMaterial = new THREE.MeshBasicMaterial({
            color: 0x00aaff,
            wireframe: true,
            transparent: true,
            opacity: 0.25
        });

        const cube = new THREE.Mesh(boxGeometry, boxMaterial);
        scene.add(cube);

        function animate() {
            if (!document.body.contains(container)) return;

            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            particles.rotation.x += 0.0005;
            cube.rotation.x += 0.003;
            cube.rotation.y += 0.005;
            renderer.render(scene, camera);
        }

        animate();

        const resizeHandler = () => {
            if (!document.body.contains(container)) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener('resize', resizeHandler);
    }
};