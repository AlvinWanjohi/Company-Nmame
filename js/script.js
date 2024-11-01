// Navigation Toggle for Mobile
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('#navbarNav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('collapse');
        });
    }
});

// Simple form submission handler
document.querySelector('#contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset(); // Reset form fields
});
