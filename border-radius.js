"use strict";

// round by DecimalDigit (小数点以下で丸める)
function roundByDD(n, d) {
    const scale = 10**d;
    return Math.round(n * scale) / scale;
}

function setStyle(target) {
    const aspected = aspectedCheckbox.checked;
    const round = Number(target.value);
    if (aspected) {
        const value = String(round * 50) + "%";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius: " + value;
    } else {
        const { width, height }  = image;
        const radius = Math.min(width, height) / 2 * round;
        const value = String(roundByDD(radius, 3)) + "px";
        image.style.borderRadius = value;
        radiusText.innerText = "border-radius: " + value;
    }
}

function update() { setStyle(roundRange); }

roundRange.addEventListener("input", update);
aspectedCheckbox.addEventListener("input", update);
image.onload = update;

fileSelect.addEventListener("input", function(e) {
    const idx = fileSelect.selectedIndex;
    const file = fileSelect.options[idx].value;
    image.src = file;
});

dropFunction(document, function(file) {
    image.src = file;
});

update();
