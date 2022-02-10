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

firstSlide.id = 'first-slide';
lastSlide.id = 'last-slide';


slider.append(firstSlide);
slider.prepend(lastSlide);



slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;




setInterval(() => {
    slidePos++;
    slider.style.transition = "0.7s";

    slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
}, interval);


next.addEventListener("click", () => {
    slide = document.querySelectorAll(".slide");

    slidePos++;
    slider.style.transition = "0.7s";

    slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
    console.log(slide[slidePos])

    if (slidePos > 10) slidePos = 10;
    console.log(slidePos)


});
prev.addEventListener("click", () => {
    slide = document.querySelectorAll(".slide");

    slidePos--;
    slider.style.transition = "0.7s";

    slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;

    console.log(slidePos)

    console.log(slideWidth * slidePos)
    if (slidePos < 0) slidePos = 0;

});

slider.addEventListener("transitionend", () => {
    slide = document.querySelectorAll(".slide");
    if (slide[slidePos].id === firstSlide.id) {
        slidePos = 1;
        slider.style.transition = "none"
        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
        console.log("jeeeac")
    } else if (slide[slidePos].id === lastSlide.id) {
        slider.style.transition = "none"

        slidePos = slide.length - 2;

        slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;

        console.log(slideWidth * slidePos)
    }
});

