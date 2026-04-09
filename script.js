gsap.registerPlugin(ScrollTrigger);

// 1. Smooth Custom Cursor
const cursor = document.getElementById('cursor');
if (cursor) {
    // Keep the custom cursor centered on the pointer.
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.4,
            ease: "power3.out"
        });
    });
}

// 2. 3D Tilt Card Effect
const cardWrapper = document.querySelector('.card-3d-wrapper');
if (cardWrapper) {
    document.addEventListener('mousemove', (e) => {
        const rotateX = (window.innerHeight / 2 - e.clientY) / 20;
        const rotateY = (e.clientX - window.innerWidth / 2) / 20;

        gsap.to(cardWrapper, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.8,
            ease: "power2.out"
        });
    });
}

// 3. Hero Zoom on Scroll
if (document.querySelector('.card-3d') && document.querySelector('.hero')) {
    gsap.to(".card-3d", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        scale: 1.8,
        y: 100,
        filter: "blur(10px)",
        opacity: 0
    });
}

// 4. Horizontal Filmstrip Scroll
const filmstrip = document.querySelector('.filmstrip');
const horizontalSection = document.querySelector('.horizontal-section');

if (filmstrip && horizontalSection) {
    const getShiftDistance = () => Math.max(0, filmstrip.scrollWidth - window.innerWidth);

    gsap.to(filmstrip, {
        x: () => -getShiftDistance(),
        ease: "none",
        scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true
        }
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());
}

// 5. Hover Effects for Links
const navLinks = document.querySelectorAll('.nav-link');
if (cursor && navLinks.length) {
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 6, opacity: 0.2 });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, opacity: 1 });
        });
    });
}

// 6. Reveal New Sections on Scroll
const revealItems = gsap.utils.toArray('.reveal-item');
if (revealItems.length) {
    revealItems.forEach((item, index) => {
        gsap.from(item, {
            y: 68,
            opacity: 0,
            duration: 0.9,
            delay: (index % 3) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// 7. Subtle CTA Parallax
const ctaHeadline = document.querySelector('.cta-section h2');
if (ctaHeadline) {
    gsap.to(ctaHeadline, {
        y: -60,
        ease: "none",
        scrollTrigger: {
            trigger: ".cta-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}
