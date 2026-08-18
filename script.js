function openEnvelope() {
    const music = document.getElementById("bgMusic");
music.play();

    const envelope = document.querySelector(".envelope");
    const flap = document.querySelector(".flap");
    const seal = document.querySelector(".seal");
    const letter = document.querySelector(".letter");
    const content = document.querySelector(".letter-content");
    const landing = document.querySelector(".landing");

    envelope.onclick = null;

    // Open flap
    flap.style.transform = "rotateX(180deg)";

    // Hide seal
    seal.style.opacity = "0";

    // Letter comes out
    setTimeout(() => {
        letter.style.transform = "translateY(-60px)";
    }, 600);

    // Letter becomes fullscreen
    setTimeout(() => {
        letter.style.transform = "";
        letter.classList.add("open");
    }, 1600);

    // Show text
    setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 2000);

    // Fade the text only
    setTimeout(() => {
        content.style.opacity = "0";
    }, 4500);

    // Fade the white letter
    setTimeout(() => {
        letter.style.transition = "opacity 1s ease";
        letter.style.opacity = "0";
    }, 5500);

    // Show landing page
    setTimeout(() => {

    document.querySelector(".opening").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".opening").style.display = "none";

        landing.style.display = "block";

        document.body.style.overflowY = "auto";

    }, 100);

}, 5500);

}
window.addEventListener("scroll", function () {

    const text = document.getElementById("landingContent");

    if (!text) return;

    let scrollY = window.scrollY;

    // Move the names upward while scrolling
    text.style.transform =
        `translate(-50%, calc(-50% - ${scrollY * 0.5}px))`;

});
const revealsLeft = document.querySelectorAll(".reveal-left");
const revealsRight = document.querySelectorAll(".reveal-right");
const revealsUp = document.querySelectorAll(".reveal-up");

window.addEventListener("scroll", () => {

    revealsLeft.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            item.classList.add("show");
        }
    });

    revealsRight.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            item.classList.add("show");
        }
    });
revealsUp.forEach((item) => {

    const top = item.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
        item.classList.add("show");
    }

});
});
/* ================= COUNTDOWN ================= */

const weddingDate = new Date("August 26, 2026 15:31:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);