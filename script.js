// Highlight navigation links when clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll to sections smoothly when navigation links are clicked
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to menu section when Explore Menu button is clicked
document.getElementById('exploreButton').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

// Example: Adding fade-in animations to sections as they appear on scroll
const sections = document.querySelectorAll('section');

function onScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', onScroll);

// Fade-in effect for sections
sections.forEach(section => {
    section.classList.add('invisible');
});

// Add dynamic year to footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validate registration form
document.getElementById('registrationForm').addEventListener('submit', event => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const nameRegex = /^[A-Za-z]{6,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(firstName)) {
        alert('First Name must contain only alphabets and be at least 6 characters long.');
        return;
    }

    if (!lastName) {
        alert('Last Name cannot be empty.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one special character.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Mobile Number must contain exactly 10 digits.');
        return;
    }

    if (!address) {
        alert('Address cannot be empty.');
        return;
    }

    alert('Registration successful!');
});
