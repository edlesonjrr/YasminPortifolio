const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

elements.forEach((el) => observer.observe(el));

// =====================================
// Animação do mouse (IGNORA navbar/footer)
// =====================================
document.addEventListener("mousemove", (e) => {
  const target = e.target;

  // se o mouse estiver na navbar ou no footer, não anima
  if (target.closest(".navbar") || target.closest("footer")) {
    return;
  }

  const particle = document.createElement("span");
  particle.classList.add("trail");

  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 800);
});

//Animação do scroll
let scrollTimeout;

window.addEventListener("scroll", () => {
  document.body.classList.add("scrolling");

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    document.body.classList.remove("scrolling");
  }, 800);
});

// ===============================
// Animação do footer (REFATORADA)
// ===============================
function animateFooterText(element, delayStep = 0.08) {
  if (!element) return;

  const text = element.innerText;
  element.innerText = "";

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * delayStep}s`;
    element.appendChild(span);
  });
}

animateFooterText(document.getElementById("footerTextStart"));
animateFooterText(document.getElementById("footerTextEnd"));

// Neon animado na logo da navbar
const logo = document.getElementById("logoNeon");

if (logo) {
  const text = logo.textContent;
  logo.textContent = "";

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * 0.1}s`;
    logo.appendChild(span);
  });
}

// Navbar com efeito liquid glass ao scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
