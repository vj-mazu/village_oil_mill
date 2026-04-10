// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SPLASH SCREEN ANIMATION
    // ==========================================
    const splashScreen = document.getElementById('splashScreen');
    const splashTL = gsap.timeline();

    // Failsafe: Force-remove splash after 5 seconds no matter what
    setTimeout(() => {
        if (splashScreen && splashScreen.style.display !== 'none') {
            splashScreen.style.display = 'none';
        }
    }, 5000);

    splashTL
        .to("#splashBrand", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        })
        .to("#splashBrand", {
            scale: 1.05,
            duration: 0.8,
            ease: "power2.inOut"
        }, "-=0.3")
        .to("#splashScreen", {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                if (splashScreen) splashScreen.style.display = 'none';
            }
        })
        // Reveal hero content
        .from(".hero-badge", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3")
        .from(".hero-content h1", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        }, "-=0.5")
        .from(".hero-content p", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(".hero-btns", {
            opacity: 0,
            y: 25,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4");

    // ==========================================
    // 2. HEADER SCROLL EFFECT
    // ==========================================
    const header = document.querySelector('#header');
    const scrollTopBtn = document.querySelector('#scrollTop');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header shrink
        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // ScrollToTop visibility
        if (scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // ==========================================
    // 3. HAMBURGER MOBILE MENU
    // ==========================================
    const hamburger = document.querySelector('#hamburger');
    const navLinks = document.querySelector('#navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ==========================================
    // 4. SECTION TITLE ANIMATIONS
    // ==========================================
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 35,
            duration: 1,
            ease: "power3.out"
        });
    });

    gsap.utils.toArray('.section-divider').forEach(div => {
        gsap.from(div, {
            scrollTrigger: {
                trigger: div,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            scaleX: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });
    });

    gsap.utils.toArray('.section-subtitle').forEach(sub => {
        gsap.from(sub, {
            scrollTrigger: {
                trigger: sub,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3
        });
    });

    // ==========================================
    // 5. CARD REVEAL ANIMATIONS
    // ==========================================
    gsap.utils.toArray('.reveal-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.08,
            ease: "power3.out"
        });
    });

    // ==========================================
    // 6. ABOUT SECTION ANIMATION
    // ==========================================
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        gsap.from(aboutText, {
            scrollTrigger: {
                trigger: '.about-grid',
                start: "top 75%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: "power3.out"
        });
    }

    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: {
                trigger: '.about-grid',
                start: "top 75%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: 50,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.2
        });
    }

    // About stat badge counter
    const statNumber = document.querySelector('.stat-number');
    if (statNumber) {
        gsap.from(statNumber, {
            scrollTrigger: {
                trigger: statNumber,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out"
        });
    }

    // ==========================================
    // 7. PROCESS STEPS STAGGER
    // ==========================================
    const processSteps = gsap.utils.toArray('.process-step');
    if (processSteps.length > 0) {
        gsap.from(processSteps, {
            scrollTrigger: {
                trigger: '.process-grid',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }

    // ==========================================
    // 8. CONTACT BOX ANIMATION
    // ==========================================
    const contactBox = document.querySelector('.contact-box');
    if (contactBox) {
        gsap.from(contactBox, {
            scrollTrigger: {
                trigger: contactBox,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            scale: 0.98,
            duration: 1,
            ease: "power3.out"
        });
    }

    // ==========================================
    // 9. SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // 10. CURSOR GLOW (Desktop Only)
    // ==========================================
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    } else if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }

    // ==========================================
    // 11. PARALLAX HERO IMAGE ON SCROLL
    // ==========================================
    const heroBgImg = document.querySelector('.hero-bg-image img');
    if (heroBgImg) {
        gsap.to(heroBgImg, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: 100,
            scale: 1.1,
            ease: 'none'
        });
    }

    // ==========================================
    // 12. PRODUCT CARD IMAGE PARALLAX
    // ==========================================
    gsap.utils.toArray('.product-card').forEach(card => {
        const img = card.querySelector('.product-img img');
        if (img) {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -20,
                ease: "none"
            });
        }
    });

    // ==========================================
    // 13. FOOTER STAGGER REVEAL
    // ==========================================
    const footerSections = gsap.utils.toArray('.footer-section');
    if (footerSections.length > 0) {
        gsap.from(footerSections, {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out'
        });
    }

});
