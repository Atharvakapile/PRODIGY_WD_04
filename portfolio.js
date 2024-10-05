// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Simple Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
