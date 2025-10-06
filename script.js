let countdown = document.getElementById("countdown");
let timeLeft = 60;

const timer = setInterval(() => {
  timeLeft--;
  countdown.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    countdown.textContent = "Time Over!";
  }
}, 1000);
