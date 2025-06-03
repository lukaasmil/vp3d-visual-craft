
// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Generate portfolio items
function generatePortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    for (let i = 1; i <= 8; i++) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item animate-fade-in`;
        portfolioItem.style.animationDelay = `${i * 100}ms`;
        
        portfolioItem.innerHTML = `
            <div class="portfolio-content">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                </svg>
                <div class="title">Obrázek portfolia</div>
                <div class="number">#${i.toString().padStart(2, '0')}</div>
            </div>
            <div class="portfolio-overlay"></div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    }
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-on-scroll');
        observer.observe(section);
    });

    // Observe individual elements
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    elements.forEach(element => {
        element.classList.add('fade-in-on-scroll');
        observer.observe(element);
    });
}

// Add scroll effect to navigation
function setupNavScrollEffect() {
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add parallax effect to hero background
function setupParallaxEffect() {
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        heroBg.style.transform = `translateY(${parallax}px)`;
    });
}

// Add hover effects to buttons
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .nav-cta, .footer-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
}

// Add click animations
function setupClickAnimations() {
    const clickableElements = document.querySelectorAll('button, .portfolio-item, .service-card');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generatePortfolioItems();
    setupScrollAnimations();
    setupNavScrollEffect();
    setupParallaxEffect();
    setupButtonEffects();
    setupClickAnimations();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any size-dependent animations if needed
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or overlays
    }
    
    if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
        e.target.click();
    }
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll event handlers here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);
