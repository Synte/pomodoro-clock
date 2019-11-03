const WORK_TIME = "Work";
const PLAY_TIME = "Play";

let timer = 0;
let timerType = WORK_TIME;
let goalTime = 0;
let cyclesRemaining = 0;
let timeAfterPause = 0;

let allOptions = [selWorkTime, selPlayTime, noRepeat, repeatForever, repeatX, customRepeatCount];

pauseButton.addEventListener("click", pauseTimer);

function getRepeatOption() {
    displayRepeatError(false);

    switch (true) {
        case noRepeat.checked: return 1;
        case repeatForever.checked: return -1;
        case repeatX.checked:
            if (/^[\d]+$/.test(customRepeatCount.value) === true) {
                return parseInt(customRepeatCount.value);
            } else {
                displayRepeatError(true);
                return 0;
            }
    }
}

function newTimer() {
    cyclesRemaining = getRepeatOption();
    if (cyclesRemaining === 0) return;

    startTimer();
}

function startTimer() {
    timeDropdown = (timerType === WORK_TIME) ? selWorkTime : selPlayTime;

    let startTime = Date.now();
    goalTime = startTime + (timeDropdown.value * 60000);
    timer = setInterval(timeRemaining, 100);

    disableControls(allOptions, true);
    disableControls([startButton], true);
    disableControls([pauseButton, stopButton], false);
}

function pauseTimer() {
    clearInterval(timer);
    timeAfterPause = goalTime - Date.now();
    pauseButton.textContent = "Resume";
    pauseButton.removeEventListener("click", pauseTimer);
    pauseButton.addEventListener("click", resumeTimer);
    document.title = `[${timerType}] PAUSED`;
}

function resumeTimer() {
    goalTime = Date.now() + timeAfterPause;
    timer = setInterval(timeRemaining, 100);
    pauseButton.textContent = "Pause";
    pauseButton.removeEventListener("click", resumeTimer);
    pauseButton.addEventListener("click", pauseTimer);
}

function stopTimer() {
    clearInterval(timer);
    timerType = WORK_TIME;
    timerDisplay.textContent = "00:00:00";

    if (pauseButton.textContent === "Resume") {
        pauseButton.textContent = "Pause";
        pauseButton.removeEventListener("click", resumeTimer);
        pauseButton.addEventListener("click", pauseTimer);
    }
    
    disableControls(allOptions, false);
    disableControls([startButton], false);
    disableControls([pauseButton, stopButton], true);
    document.title = "Pomodoro Clock";
}

function timerFinish() {
    if (timerType === WORK_TIME) {
        playSound.currentTime = 0;
        playSound.play();

        timerType = PLAY_TIME;
        startTimer();
    } else if (timerType === PLAY_TIME) {
        workSound.currentTime = 0;
        workSound.play();

        cyclesRemaining -= 1;
        if (cyclesRemaining === 0) {
            stopTimer();
        } else {
            timerType = WORK_TIME;
            startTimer();
        }
    }
}

function timeRemaining() {
    let remaining = goalTime - Date.now();
    
    let hours = Math.floor(remaining / mHour);
    let minutes = Math.floor((remaining % mHour) / mMinute);
    let seconds = Math.floor(((remaining % mHour) % mMinute) / mSecond);

    if (remaining <= 0) {
        clearInterval(timer);
        timerDisplay.textContent = "00:00:00";
        timerFinish();
    } else {
        timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        document.title = `[${timerType}] ${timerDisplay.textContent}`;
    }
}

