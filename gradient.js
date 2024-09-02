/*
 * (c) 2021/10/06- yoya@awm.jp
 */
"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    cssFilterMain();
});

function cssFilterMain() {
    const srcImage = document.getElementById("srcImage");
    const dstImage = document.getElementById("dstImage");
    const gradColorText = document.getElementById("gradColorText");
    const gradColorText2 = document.getElementById("gradColorText2");
    //
    const cssBackgroundFunction = function() {
        const gradColor = gradColorText.value;
        const gradColor2 = gradColorText2.value;
        cssBackground(gradColor, gradColor2);
    }
    gradColorText.addEventListener("change", cssBackgroundFunction);
    gradColorText2.addEventListener("change", cssBackgroundFunction);
    cssBackgroundFunction();
}

function cssBackground(gradColor, gradColor2) {
    const gradBarList = document.getElementsByClassName("gradBar");
    const styleText = document.getElementById("styleText");
    const [col1, col2] = [ "#"+gradColor, "#"+gradColor2 ];
    styleText.innerHTML = 'linear-gradient(in *colorspace* to right, '+col1+', '+col2+')';
    for (const gradBar of gradBarList) {
        const cs = gradBar.id;
        const color = 'linear-gradient(in '+cs+' to right, '+col1+', '+col2+')';
        gradBar.style.background = color;
    }
}
