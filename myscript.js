document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;

      // Adjust the height value below to determine when the color change should happen
      if (scrollPosition > 100) {
        navbar.style.backgroundColor = "blue"; // Change to your desired color
      } else {
        navbar.style.backgroundColor = "transparent"; // Change to the default color when not scrolled
      }
    });
  });