const selWorkTime = document.getElementById("work-minutes");
const selPlayTime = document.getElementById("play-minutes");

for (let i = 1; i < 61; i++) {
    selWorkTime.appendChild(new Option(i));
    selPlayTime.appendChild(new Option(i));
}

selWorkTime.options[24].selected = true;
selPlayTime.options[4].selected = true;