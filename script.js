// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 60, // Offset to account for fixed nav
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out! I'll get back to you shortly.");
    } else {
        alert("Please fill in all fields.");
    }

    // Clear the form
    document.getElementById("contact-form").reset();
});