// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  // Toggle hamburger menu on mobile
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
    });
  });
  function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
  
    body.classList.toggle('dark');
  
    if (body.classList.contains('dark')) {
      icon.textContent = '☀️'; // Light mode icon
    } else {
      icon.textContent = '🌙'; // Dark mode icon
    }
  }



  function scrollProjects(direction) {
    const carousel = document.getElementById("projectCarousel");
    const scrollAmount = 320;
  
    if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
  