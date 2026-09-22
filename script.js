// =========================
// Mobile Navigation
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

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
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

}

// =========================
// Project 001 Mobile Navigation
// =========================

const tradingMenuToggle = document.querySelector(".trading-menu-toggle");
const tradingNavLinks = document.querySelector(".trading-nav-links");

if (tradingMenuToggle && tradingNavLinks) {

    tradingMenuToggle.addEventListener("click", () => {
        tradingNavLinks.classList.toggle("trading-nav-open");

        const isOpen = tradingNavLinks.classList.contains("trading-nav-open");

        tradingMenuToggle.textContent = isOpen ? "✕" : "☰";
        tradingMenuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        tradingMenuToggle.setAttribute("aria-expanded", isOpen);
    });

    const tradingLinks = tradingNavLinks.querySelectorAll("a");

    tradingLinks.forEach((link) => {
        link.addEventListener("click", () => {
            tradingNavLinks.classList.remove("trading-nav-open");
            tradingMenuToggle.textContent = "☰";
            tradingMenuToggle.setAttribute("aria-label", "Open navigation menu");
            tradingMenuToggle.setAttribute("aria-expanded", "false");
        });
    });
}