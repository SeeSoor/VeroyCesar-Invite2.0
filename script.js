/* Countdown Timer */
const targetDate = new Date("May 3, 2026 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (difference < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "¡Llegó el gran día!";
    }

}, 1000);
/* Countdown Timer */
