// 1. Scroll Reveal Logic (Apple style slow fade-up)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve to keep the animation loaded once
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// 2. Premium Mouse Spotlight Effect for Bento Cards
// This creates the subtle "flashlight" effect when hovering over cards
document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // Calculate mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables dynamically
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 3. Contact Form Submission Prevention
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;
    
    // UI Feedback
    btn.innerText = 'Sent Successfully';
    btn.style.background = '#25d366'; // Green success color
    btn.style.color = '#fff';

    contactForm.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = 'var(--text-main)';
        btn.style.color = '#000';
    }, 3000);
});