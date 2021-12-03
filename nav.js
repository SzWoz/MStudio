let prevScroll = window.scrollY;
let nav = document.querySelector("nav");
window.onscroll = () => {
    let currScroll = window.scrollY;
    if (currScroll > prevScroll) {
        nav.classList.add("hidden")
    } else {
        nav.classList.remove("hidden");
    }
    prevScroll = currScroll;
}