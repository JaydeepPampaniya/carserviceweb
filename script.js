document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("heade");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 999) {
      navbar.style.backgroundColor = "black"; // Change to your desired color
      navbar.style.opacity="0.6"
      navbar.style.transition="background-color 1s ease";
    }
    else{
      navbar.style.backgroundColor = "transparent"; // Change to the default color when not scrolled
      navbar.style.opacity="1"
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
