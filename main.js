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
    const filterSelect = document.getElementById("filterSelect");
    const filterRange = document.getElementById("filterRange");
    let filter = filterSelect.value;
    dropFunction(document, function(file) {
        srcImage.src = dstImage.src = file;
    });
    filterSelect.addEventListener("change", function(e) {
        filter = e.target.value;
    });
    filterRange.addEventListener("input", function(e) {
        const v = e.target.value;
        let filterValue = "";
        switch (filter) {
        case "sepia":
            filterValue = "sepia("+v+"%)";
            break;
        case "blur":
            const vv = v/10;
            filterValue = "blur("+vv+"px)";
            break;
        default:
            console.error("unknown filter type:"+filter);
        }
        dstContainer.style["filter"] =  filterValue;
    });
}
