//===================================================no scroll=========================================================

const startBtn = document.querySelector("#btn-start");
let videoCover = document.querySelector(".video-cover");
let helper = 0;

content.addEventListener('scroll', scrollBlock)
function scrollBlock() {
    content.scrollTo(0, 0);
}
startBtn.addEventListener('click', () => {
    videoCover.animate([
        { transform: 'translateY(0%)' },
        { transform: 'translateY(5%)' },
        { transform: 'translateY(-100%)' }
    ], {
        duration: 1000,
        fill: "forwards",
    });
    setTimeout(() => {
        videoCover.remove();
        helper++
    }, 1100);

    content.removeEventListener('scroll', scrollBlock);
})

//==================================================================bg animation==========================================================

const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() { // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < 360; i++) {
        videoCover.style.setProperty("--rotation", i + "deg");
        if (i == 359) i = 0;
        if (helper == 1) break;
        await timer(50);
    }
}

load();