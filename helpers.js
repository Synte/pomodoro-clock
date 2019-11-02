function disableControls(controlArray, isDisabled) {
    controlArray.forEach(control => control.disabled = isDisabled);
}

function pad(time) {
    return time.toString().padStart(2, "0");
}

let errorShowing = false;
const customRepeatError = document.createElement("p");
customRepeatError.textContent = "Invalid number of times to repeat. Please enter a positive number.";
customRepeatError.setAttribute("id", "repeat-error-message");

function displayRepeatError(showError) {
    if (errorShowing === false && showError === false) return;

    if (showError === false) {
        document.getElementById("options").removeChild(customRepeatError);
        errorShowing = false;
    } else {
        document.getElementById("options").appendChild(customRepeatError);
        errorShowing = true;
    }
}