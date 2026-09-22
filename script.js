// =========================
// Mobile Navigation
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");

    if (navLinks.classList.contains("nav-open")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});


const mobileNavLinks = document.querySelectorAll(".nav-links a");

mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open");
    });
});
link.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation menu");
});