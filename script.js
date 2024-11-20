  <!-- JavaScript for Mobile Menu -->
  // Select the mobile menu and toggle button
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');

  // Toggle mobile menu visibility
  mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Scroll-triggered animation for Bella's section
  document.addEventListener("DOMContentLoaded", () => {
      const bellaSection = document.querySelector("#bella");
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const elements = bellaSection.querySelectorAll(".fade-in-up");
                  elements.forEach((el) => el.classList.add("animate-fadeInUp"));
              }
          });
      });
      observer.observe(bellaSection);
  });

  // Scroll-triggered animation for Kirby's section
  document.addEventListener("DOMContentLoaded", () => {
      const kirbySection = document.querySelector("#kirby");
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const elements = kirbySection.querySelectorAll(".slide-in-left");
                  elements.forEach((el) => el.classList.add("animate-slideInLeft"));
              }
          });
      });
      observer.observe(kirbySection);
  });


  // Scroll-triggered animation for Floyd's section
  document.addEventListener("DOMContentLoaded", () => {
      const floydSection = document.querySelector("#floyd");
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  const elements = floydSection.querySelectorAll(".slide-in-right");
                  elements.forEach((el) => el.classList.add("animate-slideInRight"));
              }
          });
      });
      observer.observe(floydSection);
  });