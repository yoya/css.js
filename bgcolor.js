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
    const bgColorText = document.getElementById("bgColorText");
    //
    dropFunction(document, function(file) {
        srcImage.src = dstImage.src = file;
    });
    const cssBackgroundFunction = function() {
        const bgColor = bgColorText.value;
        cssBackground(bgColor);
    }
    bgColorText.addEventListener("change", cssBackgroundFunction);
    cssBackgroundFunction();
}

function cssBackground(bgColor) {
    const srcContainer = document.getElementById("srcContainer");
    const dstContainer = document.getElementById("dstContainer");
    const styleText = document.getElementById("styleText");
    srcContainer.style["backgroundColor"] = "#"+bgColor;
    dstContainer.style["backgroundColor"] = "#"+bgColor;
    styleText.innerHTML = "style=\"background-color: #"+bgColor+";\"";
}
