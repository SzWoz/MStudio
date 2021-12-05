const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('cross')) {
        hamburger.classList.add('cross');
        menu.classList.remove('disabled');
    } else {
        hamburger.classList.remove('cross');
        menu.classList.add('disabled');
    }
})