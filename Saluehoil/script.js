document.addEventListener("DOMContentLoaded", () => {
  // Navbar solid saat scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (nav) {
      nav.classList.toggle("active", scrollTop > 0);
    }
  });

  //Hamburger menu toggle (mobile)
  const menuToggleInput = document.querySelector(".menu-toggle input");
  const navMenu = document.querySelector("nav ul");

  if (menuToggleInput && navMenu) {
    menuToggleInput.addEventListener("click", () => {
      navMenu.classList.toggle("slide");
    });
  }

  //Scroll Up Icon muncul saat discroll ke bawah
  const scrollUpBtn = document.querySelector(".fa-arrow-up");
  window.addEventListener("scroll", () => {
    if (!scrollUpBtn) return;
    const offset = 0;
    const st = window.pageYOffset;
    scrollUpBtn.classList.toggle("active", st > offset);
  });
});

// toggle visibility buat faq answers
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", !isExpanded);
    answer.hidden = isExpanded;

    const icon = question.querySelector(".icon");
    icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
  });
});
