// ===========================
// Smooth Scroll & Navigation
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ===========================
    // AI/ML Neural Network Background
    // ===========================
    const createNeuralNetwork = () => {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.opacity = '0.4';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create nodes (neurons)
        const nodes = [];
        const nodeCount = 60;
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 2.5 + 1.5,
                activation: Math.random()
            });
        }

        function drawNeuralNetwork() {
            ctx.fillStyle = 'rgba(250, 251, 252, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                node.activation = Math.sin(Date.now() / 1000 + node.x / 100) * 0.5 + 0.5;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw node with activation
                const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
                gradient.addColorStop(0, `rgba(37, 99, 235, ${node.activation * 0.6})`);
                gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
                
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(37, 99, 235, ${node.activation * 0.8})`;
                ctx.fill();
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw connections between nearby nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        const opacity = (1 - distance / 150) * (nodes[i].activation + nodes[j].activation) / 2;
                        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.2})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawNeuralNetwork);
        }

        drawNeuralNetwork();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    };

    createNeuralNetwork();

    // ===========================
    // Enhanced Scroll Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate timeline items with stagger
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(item);
    });

    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(40px)';
        category.style.transition = `all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.12}s`;
        observer.observe(category);
    });

    // Animate highlights
    const highlights = document.querySelectorAll('.highlight-item');
    highlights.forEach((highlight, index) => {
        highlight.style.opacity = '0';
        highlight.style.transform = 'translateX(-30px)';
        highlight.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(highlight);
    });

    // Animate stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        card.style.transition = `all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.15}s`;
        observer.observe(card);
    });

    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.8s ease';
        observer.observe(title);
    });

    // Animate title lines
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach(line => {
        line.style.transform = 'scaleX(0)';
        line.style.transition = 'transform 0.8s ease 0.2s';
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'scaleX(1)';
                }
            });
        });
        lineObserver.observe(line);
    });

    // ===========================
    // Stat Counter Animation
    // ===========================
    const animateCounter = (element, target) => {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };

        updateCounter();
    };

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.stat-number');
                const targetValue = parseInt(numberElement.textContent);
                if (!isNaN(targetValue)) {
                    animateCounter(numberElement, targetValue);
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(card => {
        statObserver.observe(card);
    });

    // ===========================
    // Enhanced Skill Tag Interactions
    // ===========================
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        // Ripple effect on click
        tag.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(37, 99, 235, 0.4)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ===========================
    // Typing Effect for Hero Subtitle
    // ===========================
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let charIndex = 0;

        const typeWriter = () => {
            if (charIndex < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 40);
            }
        };

        setTimeout(typeWriter, 1500);
    }

    // ===========================
    // Back to Top Button
    // ===========================
    const createBackToTop = () => {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'back-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
            font-size: 1.2rem;
        `;

        document.body.appendChild(button);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
            } else {
                button.style.opacity = '0';
                button.style.pointerEvents = 'none';
            }
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px) scale(1.1)';
            button.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.5)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.3)';
        });
    };

    createBackToTop();

    // ===========================
    // Achievement Badge Animation
    // ===========================
    const achievementBadges = document.querySelectorAll('.achievement-badge');
    achievementBadges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        badge.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s';
        
        const badgeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        });
        
        badgeObserver.observe(badge);
    });

    // ===========================
    // Hero Tags Stagger Animation
    // ===========================
    const heroTags = document.querySelectorAll('.tag');
    heroTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        setTimeout(() => {
            tag.style.transition = 'all 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 1200 + (index * 100));
    });

    // ===========================
    // Terminal Typing Effect
    // ===========================
    const codeLines = document.querySelectorAll('.code-line');
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                codeLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.style.opacity = '1';
                    }, index * 100);
                });
                terminalObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const terminal = document.querySelector('.code-terminal');
    if (terminal) {
        terminalObserver.observe(terminal);
    }

    // ===========================
    // Console Easter Egg
    // ===========================
    console.log('%c🤖 AI/ML Engineer Portfolio', 'color: #2563eb; font-size: 18px; font-weight: bold;');
    console.log('%c⚡ Powered by Neural Networks & Deep Learning', 'color: #7c3aed; font-size: 14px;');
    console.log('%c✨ Clean design with smooth animations', 'color: #0891b2; font-size: 12px;');
    console.log('%c💌 Let\'s build the future together!', 'color: #475569; font-size: 11px;');
});
