const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const site = document.querySelector(".site");
site.style.transition = "filter 2s ease";

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('cross')) {
        hamburger.classList.add('cross');
        menu.classList.remove('disabled');
        site.style.filter = "grayscale(100%)";
    } else {
        hamburger.classList.remove('cross');
        menu.classList.add('disabled');
        site.style.filter = null;
    }
})