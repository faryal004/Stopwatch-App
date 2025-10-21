let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStop() {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = '';
  running = false;
}

function lap() {
  if (!running) return;
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');
  const lapTime = `${h}:${m}:${s}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap - ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}
