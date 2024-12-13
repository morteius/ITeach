// Select the hamburger menu and the nav links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.navbar ul');

// Add click event to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});
