(() => {
  const START_MINUTES = 25;
  const INITIAL_SECONDS = START_MINUTES * 60;

  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const statusEl = document.getElementById("status");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");

  let remaining = INITIAL_SECONDS;
  let timerId = null;

  const format = (value) => value.toString().padStart(2, "0");

  const renderTime = () => {
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    minutesEl.textContent = format(mins);
    secondsEl.textContent = format(secs);
  };

  const setStatus = (text) => {
    statusEl.textContent = `Status: ${text}`;
  };

  const stopTimer = (newStatus = "Stopped") => {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
    remaining = INITIAL_SECONDS;
    renderTime();
    setStatus(newStatus);
    startBtn.disabled = false;
  };

  const tick = () => {
    if (remaining <= 0) {
      stopTimer("Finished");
      return;
    }
    remaining -= 1;
    renderTime();
    if (remaining === 0) {
      stopTimer("Finished");
    }
  };

  const startTimer = () => {
    if (timerId) return;
    if (remaining <= 0) {
      remaining = INITIAL_SECONDS;
      renderTime();
    }
    setStatus("Running");
    timerId = setInterval(tick, 1000);
    startBtn.disabled = true;
  };

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", () => stopTimer("Stopped"));

  renderTime();
  setStatus("Stopped");
})();
