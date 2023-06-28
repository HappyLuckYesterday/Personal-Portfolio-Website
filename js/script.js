// Active section manager
let navLinks = document.querySelectorAll("header nav a");
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // remove navbar when a nav link is clicked
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("show-menu");
};


// scroll reveal 
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .heading', { origin: 'top' });
ScrollReveal().reveal('.portfolio-box, .services-container', { origin: 'bottom' });