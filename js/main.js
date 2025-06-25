document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.store-section , .who-are-we, .our-vision, .why-us');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}); 