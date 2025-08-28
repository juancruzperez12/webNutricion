document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    nav.classList.toggle("show");
  });

// Close mobile menu when clicking on navigation links
document.querySelectorAll(".navlist, .navlist-especial").forEach((link) => {
  link.addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    nav.classList.remove("show");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});
