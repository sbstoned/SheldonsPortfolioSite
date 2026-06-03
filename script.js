document.documentElement.classList.add("js");

const fadeElements = document.querySelectorAll(".fade-in");
const navbar = document.getElementById("navbar");
const backgroundVideo = document.getElementById("background-video");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach((element) => {
    observer.observe(element);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function tryPlayBackgroundVideo() {
    if (!backgroundVideo) return;

    backgroundVideo.muted = true;
    backgroundVideo.setAttribute("muted", "");
    backgroundVideo.setAttribute("playsinline", "");
    backgroundVideo.setAttribute("webkit-playsinline", "");

    backgroundVideo.play().catch(() => {
        console.log("Mobile browser blocked autoplay.");
    });
}

window.addEventListener("load", tryPlayBackgroundVideo);
document.addEventListener("touchstart", tryPlayBackgroundVideo, { once: true });
document.addEventListener("click", tryPlayBackgroundVideo, { once: true });