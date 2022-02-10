const sliderContainer = document.querySelector(".slider");
const slider = document.querySelector(".slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const interval = 4000;

let slide = document.querySelectorAll(".slide");

let slidePos = 1;

let slideWidth = 500;

let firstSlide = slide[0].cloneNode(true);
let lastSlide = slide[slide.length - 1].cloneNode(true);

let animationFinished = true;

firstSlide.id = 'first-slide';
lastSlide.id = 'last-slide';


slider.append(firstSlide);
slider.prepend(lastSlide);



slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;


let timer = setInterval(intervalFunc, interval);


function intervalFunc() {
    slidePos++;
    slider.style.transition = "0.7s";

    slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
}


next.addEventListener("click", () => {
    if (animationFinished != false) {
        slide = document.querySelectorAll(".slide");

        slidePos++;
        slider.style.transition = "0.7s";

        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
        console.log(slide[slidePos])
        clearInterval(timer);
        timer = setInterval(intervalFunc, interval);
    }
    animationFinished = false;

});
prev.addEventListener("click", () => {
    if (animationFinished != false) {

        slide = document.querySelectorAll(".slide");

        slidePos--;
        slider.style.transition = "0.7s";

        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;

        clearInterval(timer);
        timer = setInterval(intervalFunc, interval);
    }
    animationFinished = false;

});

slider.addEventListener("transitionend", () => {
    animationFinished = true;
    slide = document.querySelectorAll(".slide");
    if (slide[slidePos].id === firstSlide.id) {
        slidePos = 1;
        slider.style.transition = "none"
        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
    } else if (slide[slidePos].id === lastSlide.id) {
        slider.style.transition = "none"

        slidePos = slide.length - 2;

        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
    }
});
