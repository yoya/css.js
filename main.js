/*
 * (c) 2021/07/27- yoya@awm.jp
 */
"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    cssFilterMain();
});

function cssFilterMain() {
    const srcImage = document.getElementById("srcImage");
    const dstImage = document.getElementById("dstImage");
    const dstContainer = document.getElementById("dstContainer");
    dropFunction(document, function(file) {
        srcImage.src = file;
        dstImage.src = file;
    });
}
