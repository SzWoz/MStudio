let items = document.querySelectorAll(".lazy-load");
const navbar = document.querySelector("nav");
const content = document.querySelector(".content");
const lazyLoading = item => {
    const input = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('image')) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src')
                    img.setAttribute('src', src);
                    img.animate([
                        { opacity: 0 },
                        { opacity: 1 }
                    ], {
                        duration: 600,
                        fill: "forwards"
                    });
                    observer.unobserve(entry.target);
                } else {
                    const text = entry.target;
                    text.animate([
                        { transform: 'translateX(0%)' }
                    ], {
                        duration: 600,
                        fill: "forwards"
                    });
                    navbar.style.background = "rgba(0,0,0,0.3)";
                    observer.unobserve(entry.target);
                }
            }


        });

    }, { rootMargin: "0px 0px -50px 0px" });
    input.observe(item);
};
items.forEach(lazyLoading);