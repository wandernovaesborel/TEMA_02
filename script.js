// === MENU MOBILE ===
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// === FAQ (TOGGLE RESPOSTAS) ===
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// === TEMA ESCURO/CLARO ===
document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});