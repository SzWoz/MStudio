const images = document.querySelectorAll(".slider-img");
const slider = document.querySelector(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let count = 1;
let imgWidth = 0;
let currMargin = 0;
setTimeout(() => {
    imgWidth = images[count].offsetWidth + 52;

}, 200)
console.log(imgWidth)
next.addEventListener('click', () => {
    count++
    if (count == images.length - 1) {
        images[count].classList.toggle('main-img');
        images[count - 1].classList.toggle('main-img');

    } else if (count >= images.length) {
        images[count - 1].classList.toggle('main-img');
        count = 0;
        slider.style.transform = `translateX(${-imgWidth * (count)}px)`;
        images[count].classList.toggle('main-img');

    }
    else {
        slider.style.transform = `translateX(${-imgWidth * (count - 1)}px)`;
        images[count - 1].classList.toggle('main-img');
        images[count].classList.toggle('main-img');
    }
})

prev.addEventListener('click', () => {
    count--;
    if (count == 0) {
        images[count].classList.toggle('main-img');
        images[count + 1].classList.toggle('main-img');

    } else if (count == -1) {
        images[count + 1].classList.toggle('main-img');
        count = 8;
        slider.style.transform = `translateX(${-imgWidth * (count - 2)}px)`;
        images[count].classList.toggle('main-img');

    } else if (count == images.length - 2) {
        images[count].classList.toggle('main-img');
        images[count + 1].classList.toggle('main-img');

    } else {
        slider.style.transform = `translateX(${-imgWidth * (count - 1)}px)`;
        images[count].classList.toggle('main-img');
        images[count + 1].classList.toggle('main-img');
        console.log('g')
    }
})