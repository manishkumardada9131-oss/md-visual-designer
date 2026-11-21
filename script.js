
// MD — Visual Designer

// Reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  observer.observe(section);
});

// Project card animation
document.querySelectorAll(".projects article").forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

// Current year
const footer = document.querySelector("footer");
if (footer) {
  footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());
}
