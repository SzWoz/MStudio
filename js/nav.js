let prevScroll = window.scrollY;
console.log("seg")
let content = document.querySelector(".content");
let nav = document.querySelector("nav");
content.onscroll = () => {

    let currScroll = content.scrollTop;
    if (currScroll > prevScroll) {
        nav.classList.add("hidden")
    } else {
        nav.classList.remove("hidden");
    }
    prevScroll = currScroll;
}