function disableControls(controlArray, isDisabled) {
    controlArray.forEach(control => control.disabled = isDisabled);
}

function pad(time) {
    return time.toString().padStart(2, "0");
}