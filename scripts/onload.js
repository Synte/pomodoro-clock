/* Populate time dropdowns & set defaults */
const selWorkTime = document.getElementById("work-minutes");
const selPlayTime = document.getElementById("play-minutes");

for (let i = 1; i < 61; i++) {
    selWorkTime.appendChild(new Option(i));
    selPlayTime.appendChild(new Option(i));
}

selWorkTime.options[24].selected = true;
selPlayTime.options[4].selected = true;


/* Create variables for other DOM elements */
const timerDisplay = document.getElementById("timer-display");
const timerMessage = document.getElementById("timer-message");

const noRepeat = document.getElementById("no-repeat");
const repeatX = document.getElementById("repeat-x");
const repeatForever = document.getElementById("repeat-forever");

const customRepeatCount = document.getElementById("custom-repeat-count");
const repeatMessage = document.getElementById("repeat-message");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

const playSound = document.getElementById("play-sound");
const workSound = document.getElementById("work-sound");

disableControls([pauseButton, stopButton], true);

/* Times in milliseconds */
const mSecond = 1000;
const mMinute = 60 * mSecond;
const mHour = 60 * mMinute;