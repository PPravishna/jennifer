let intervalId;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startClock() {
    if (!running) {
        intervalId = setInterval(updateTime, 1000);
        running = true;
    }
}

function stopClock() {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
}

function resetClock() {
    stopClock();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time').textContent = timeString;
}

resetClock(); // Initialize the clock display

