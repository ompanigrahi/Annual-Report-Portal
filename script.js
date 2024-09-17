// JavaScript for future interactivity, currently placeholders for navigation or actions.

// Scroll to section smoothly when clicking nav links (for future implementation)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Profile Dropdown
document.querySelector('.dropbtn').addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

