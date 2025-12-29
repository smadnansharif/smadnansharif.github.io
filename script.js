// ==================== Navigation & Smooth Scrolling ====================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe expertise and service cards
const cards = document.querySelectorAll('.expertise-card, .service-card, .skill-category');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== Typewriter Effect (Optional Enhancement) ====================
function typewriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Apply typewriter to hero title on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typewriter(heroTitle, originalText, 80);
    }
});

// ==================== Parallax Effect ====================
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// ==================== Contact Form Enhancement ====================
const contactLinks = document.querySelectorAll('.contact-item a');
contactLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.parentElement.parentElement.style.transform = 'translateX(10px)';
    });

    link.addEventListener('mouseleave', (e) => {
        e.target.parentElement.parentElement.style.transform = 'translateX(0)';
    });
});

// ==================== Service Card Click Animation ====================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 100);
    });
});

// ==================== Skill Tag Interaction ====================
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            tag.style.animation = '';
        }, 600);
    });
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(pulseStyle);

// ==================== Scroll-to-Top Button ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #e63946 0%, #a4161a 100%);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 24px;
    display: none;
    z-index: 999;
    box-shadow: 0 8px 25px rgba(230, 57, 70, 0.3);
    transition: all 0.3s ease;
    font-weight: bold;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-5px)';
    scrollTopBtn.style.boxShadow = '0 12px 35px rgba(230, 57, 70, 0.4)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0)';
    scrollTopBtn.style.boxShadow = '0 8px 25px rgba(230, 57, 70, 0.3)';
});

// ==================== Performance Optimization ====================
// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}
