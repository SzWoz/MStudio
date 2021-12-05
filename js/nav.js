// let prevScroll = window.scrollY;
// console.log("seg")
// let content = document.querySelector(".content");
// let nav = document.querySelector("nav");
// // content.onscroll = () => {

// //     let currScroll = content.scrollTop;
// //     if (currScroll > prevScroll) {
// //         nav.classList.add("hidden")
// //     } else {
// //         nav.classList.remove("hidden");
// //     }
// //     prevScroll = currScroll;
// // }

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