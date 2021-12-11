/*
 * (c) 2021/12/12- yoya@awm.jp
 */
"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    cssFilterMain();
});

function cssFilterMain() {
    const srcImage = document.getElementById("srcImage");
    const dstImage = document.getElementById("dstImage");
    const orientationSelect = document.getElementById("orientationSelect");
    //
    dropFunction(document, function(file) {
        srcImage.src = dstImage.src = file;
    });
    const cssImageOrientationFunction = function() {
        const orientation = orientationSelect.value;
        cssImageOrientation(orientation);
    }
    orientationSelect.addEventListener("change", cssImageOrientationFunction);
    cssImageOrientationFunction();
}

function cssImageOrientation(orientation) {
    const dstImage = document.getElementById("dstImage");
    const styleText = document.getElementById("styleText");
    dstImage.style["image-orientation"] = orientation;
    if (orientation === "") {
        styleText.innerHTML = "";
    } else {
        styleText.innerHTML = "style=\"image-orientation: "+orientation+";\"";
    }
}
