// Carousel switching logic for features.html
document.addEventListener('DOMContentLoaded', function() {
    const carouselSet1 = document.getElementById('carouselSet1');
    const carouselSet2 = document.getElementById('carouselSet2');
    let currentCarousel = 1;
    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() === 'd') {
            if (currentCarousel === 1) {
                carouselSet1.style.display = 'none';
                carouselSet2.style.display = 'block';
                currentCarousel = 2;
            }
        } else if (event.key.toLowerCase() === 'a') {
            if (currentCarousel === 2) {
                carouselSet2.style.display = 'none';
                carouselSet1.style.display = 'block';
                currentCarousel = 1;
            }
        }
    });
});
// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll Indicator
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 11, 26, 0.95)';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Hero Scroll Animation
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            heroScroll.style.opacity = '0';
        } else {
            heroScroll.style.opacity = '1';
        }
    });
}

// Intersection Observer for animations
const sections = document.querySelectorAll('.section, .preview-content');
const observerOptions = {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('fade-up');
    sectionObserver.observe(section);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        const formData = new FormData(contactForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        // You would typically send this data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Page Transition Effects
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});