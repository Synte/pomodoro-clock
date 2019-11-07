let hidden = document.createElement("span");
hidden.style.position = "absolute";
hidden.style.height = 0;
hidden.style.overflow = "hidden";
hidden.style.whiteSpace = "pre";

customRepeatCount.addEventListener("input", resize);
resize();

function resize() {
    hidden.textContent = customRepeatCount.value;
    document.getElementById("options").appendChild(hidden);
    customRepeatCount.style.width = hidden.offsetWidth + 2 + "px";
    hidden.remove();
}