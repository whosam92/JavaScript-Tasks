document.addEventListener("DOMContentLoaded", () => {
  const timerInput = document.getElementById("timerInput");
  const startTimerBtn = document.getElementById("startTimerBtn");
  const timerDisplay = document.getElementById("timerDisplay");

  let countdown; // Variable to hold the countdown interval

  startTimerBtn.addEventListener("click", () => {
    // Clear any existing countdown
    clearInterval(countdown);

    const duration = parseInt(timerInput.value.trim(), 10);

    // Validate the input
    if (isNaN(duration) || duration <= 0) {
      timerDisplay.textContent = "Please enter a valid number greater than 0.";
      timerDisplay.style.color = "red";
      return;
    }

    // Start the countdown
    let remainingTime = duration;
    timerDisplay.style.color = "black"; // Reset color

    countdown = setInterval(() => {
      if (remainingTime > 0) {
        timerDisplay.textContent = `Time remaining: ${remainingTime} seconds`;
        remainingTime--;
      } else {
        clearInterval(countdown);
        timerDisplay.textContent = "Time's up!";
        timerDisplay.style.color = "Red";
      }
    }, 1000);
  });
});
