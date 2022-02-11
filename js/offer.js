const sliderContainer = document.querySelector(".slider");
const slider = document.querySelector(".slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const interval = 4000;

let timer;



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




//-------------------------------------------observer and timer functions----------------------------------
let target = document.querySelector(".slider-section");


let observerFunction = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target == target) {
                timer = setInterval(intervalFunc, interval);

                observer.unobserve(entry.target);
            }
        }
    })

}
const observer = new IntersectionObserver(observerFunction);


observer.observe(target);




function intervalFunc() {
    slidePos++;
    slider.style.transition = "0.7s";

    slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;
}
//----------------------------------------------------------------------------------------------------

//---------------------------------------------buttons and transition behavior----------------------------------------

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
//--------------------------------------------------------------------------------------------------

//--------------------------------------------swiping------------------------------------------

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
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
        } else {
            if (animationFinished != false) {

                slide = document.querySelectorAll(".slide");

                slidePos--;
                slider.style.transition = "0.7s";

                slider.style.transform = `translateX(${-slideWidth * slidePos}px)`;

                clearInterval(timer);
                timer = setInterval(intervalFunc, interval);
            }
            animationFinished = false;
        }
    }
}
/* reset values */
xDown = null;
yDown = null;
