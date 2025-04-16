document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.querySelector('#imageSlider');
    if (imageSlider) {
        const carousel = new bootstrap.Carousel(imageSlider, {
            interval: 2000, // Set auto-slide interval to 2 seconds
            ride: 'carousel' // Start the carousel automatically
        });
    }
});

function toggleMenu(header) {
    let content = header.nextElementSibling;
    let icon = header.querySelector('.toggle-icon');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
        icon.classList.remove("rotate");
    } else {
        content.style.display = "block";
        icon.textContent = "×";
        icon.classList.add("rotate");
    }
}