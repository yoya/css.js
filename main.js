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
        const filter = filterSelect.value;
        const value = filterRange.value;
        cssFilter(dstContainer, filter, value);
    });
    filterRange.addEventListener("input", function(e) {
        const filter = filterSelect.value;
        const value = filterRange.value;
        cssFilter(dstContainer, filter, value);
    });
}

function cssFilter(target, filter, value) {
    let filterValue = "";
    switch (filter) {
    case "blur": {
        const v = value/10;
        filterValue = filter+"("+v+"px)";
    }
        break;
    case "brightness":
    case "contrast":
    case "saturate": {
        const v = 2*value;
        filterValue = filter+"("+v+"%)";
    }
        break;
    case "drop-shadow": {
        const v1 = value/10;
        const v2 = value/8;
        filterValue = filter+"("+v1+"px "+v1+"px "+v2+"px blue)";
    }
        break;
    case "grayscale":
    case "invert":
    case "opacity":
    case "sepia": {
        filterValue = filter+"("+value+"%)";
    }
        break;
    case "hue-rotate": {
        const v = 360*value/100;
        filterValue = filter+"("+v+"deg)";
    }
        break;
    default:
        console.error("unknown filter type:"+filter);
    }
    target.style["filter"] =  filterValue;
}
