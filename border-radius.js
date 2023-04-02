"use strict";

console.log("main")

function roundByDecimalDigit(n, d) {
    const scale = 10**d;
    return String(Math.round(n * scale) / scale);
}

function setStyle(target) {
    const aspected = aspectedCheckbox.checked;
    const round = Number(target.value);
    let style = "...";
    if (aspected) {
        const value = String(round * 50) + "%";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius: " + value;
    } else {
        const { width, height }  = image;
        const radius = Math.min(width, height) / 2 * round;
        const value = roundByDecimalDigit(radius, 3)+ "px";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius: " + value;
    }
}

roundRange.addEventListener("input", function(e) {
    setStyle(roundRange);
});

aspectedCheckbox.addEventListener("input", function(e) {
    setStyle(roundRange);
});

fileSelect.addEventListener("input", function(e) {
    const idx = fileSelect.selectedIndex;
    image.src = fileSelect.options[idx].value;
    image.onload = (e) => {
        setStyle(roundRange);
    }
});

dropFunction(document, function(file) {
    image.src = file;
    image.onload = (e) => {
        setStyle(roundRange);
    }
});

setStyle(roundRange);