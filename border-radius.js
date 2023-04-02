"use strict";

console.log("main")

function setStyle(target) {
    const aspected = aspectedCheckbox.checked;
    const round = Number(target.value);
    let style = "...";
    if (aspected) {
        const value = String(round * 50) + "%";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius:" + value;
    } else {
        const { width, height }  = image;
        const radius = Math.min(width, height) / 2 * round;
        const value = String(radius) + "px";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius:" + value;
    }
}

roundRange.addEventListener("input", function(e) {
    setStyle(roundRange);
});

aspectedCheckbox.addEventListener("input", function(e) {
    setStyle(roundRange);
});

setStyle(roundRange);
