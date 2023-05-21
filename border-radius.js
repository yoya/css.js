"use strict";

// round by DecimalDigit (小数点以下で丸める)
function roundByDD(n, d) {
    const scale = 10**d;
    return Math.round(n * scale) / scale;
}

function setStyle() {
    console.debug(setStyle);
    const aspected = aspectedCheckbox.checked;
    const round = Number(roundRange.value);
    const blur = Number(backdropBlurRange.value);
    const contrast = Number(backdropContrastRange.value);
    console.log({aspected, round, blur, contrast, backdropContrastRange},  backdropContrastRange.value);
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
    if (blur) {
        background.style.backgroundImage = "url("+image.src+")";
        backdrop.style.backdropFilter = "blur("+blur+"px) contrast("+contrast+"%)";
    } else {
        background.style.backgroundImage = "";
    }
}

function update() { setStyle(); }

[roundRange, aspectedCheckbox,
 backdropBlurRange, backdropContrastRange, ].forEach((e) => {
    e.addEventListener("input", update);
});

image.onload = update;

function setImage(url) {
    image.src = url;
    background.style.backgroundImage = "url("+url+")";
}

fileSelect.addEventListener("input", function(e) {
    const idx = fileSelect.selectedIndex;
    const file = fileSelect.options[idx].value;
    setImage(file);
});

dropFunction(document, function(file) {
    setImage(file);
});

update();
