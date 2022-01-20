function openDiscord(){
  var win = window.open("https://discord.owae.tk", '_blank');
  win.focus();
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        // Toggle the navbar
        nav.classList.toggle("nav-active");

        // Burger links animated
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger button animation
        burger.classList.toggle("toggle");
    });
}
navSlide();