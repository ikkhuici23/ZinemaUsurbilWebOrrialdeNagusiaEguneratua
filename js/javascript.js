// JavaScript for Burger Menu Toggle and Countdown Timer

// Burger Menu Toggle
const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    let faIcon = `<i class='fa-solid {} fa-2xl'></i>`;

    nav.style.display = nav.style.display === "block" ? "none" : "block";
    burger.innerHTML = faIcon.replace("{}", nav.style.display === "block" ? "fa-xmark" : "fa-bars");
});

// Countdown Timer
const days = document.querySelector(".countdown-numbers .days");
const hours = document.querySelector(".countdown-numbers .hours");
const minutes = document.querySelector(".countdown-numbers .minutes");
const seconds = document.querySelector(".countdown-numbers .seconds");

// Set target date for countdown
const targetDate = new Date("2025-12-31T23:59:59").getTime();

// Update countdown every second
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If countdown is finished
    if (distance < 0) {
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";

        clearInterval(this);

        return;
    }

    // Calculate time components
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers to always have two digits
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    // Update HTML
    days.innerHTML = formatNumber(d);
    hours.innerHTML = formatNumber(h);
    minutes.innerHTML = formatNumber(m);
    seconds.innerHTML = formatNumber(s);
}, 1000);
