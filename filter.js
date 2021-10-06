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
    const srcContainer = document.getElementById("srcContainer");
    const dstContainer = document.getElementById("dstContainer");
    const filterSelect = document.getElementById("filterSelect");
    const filterRange  = document.getElementById("filterRange");
    const bgColorText = document.getElementById("bgColorText");
    //
    dropFunction(document, function(file) {
        srcImage.src = dstImage.src = file;
    });
    const cssFilterFunction = function() {
        const filter = filterSelect.value;
        const value   = filterRange.value;
        const bgColor = bgColorText.value;
        cssFilter(dstImage, filter, value);
        srcContainer.style["backgroundColor"] = "#"+bgColor;
        dstContainer.style["backgroundColor"] = "#"+bgColor;
    }
    filterSelect.addEventListener("change", cssFilterFunction);
    filterRange.addEventListener("input",   cssFilterFunction);
    bgColorText.addEventListener("change",  cssFilterFunction);
    cssFilterFunction();
}

function cssFilter(target, filter, value) {
    let filterValue = "";
    let transformValue = "";
    switch (filter) {
    case "blur": {  // range: 0 ... 10
        const v = value/10;
        filterValue = filter+"("+v+"px)";
    }
        break;
    case "brightness":
    case "contrast":
    case "saturate": {  // range: 0 ... 200
        const v = 2*value;
        filterValue = filter+"("+v+"%)";
    }
        break;
    case "drop-shadow": {  // range: 0 ... 10, 0 ... 12.5
        const v1 = value/10;
        const v2 = value/8;
        filterValue = filter+"("+v1+"px "+v1+"px "+v2+"px blue)";
    }
        break;
    case "grayscale":
    case "invert":
    case "opacity":
    case "sepia": {  // range: 0 ... 100
        filterValue = filter+"("+value+"%)";
    }
        break;
    case "hue-rotate": {  // range: 0 ... 360
        const v = 360*value/100;
        filterValue = filter+"("+v+"deg)";
    }
        break;
    case "rotate": {  // range: (X)180  0  180(Y)
        if (value < 50) {
            const v = ((50-value)/50)*180
            transformValue = "rotateX("+v+"deg)";
        } else {
            const v = ((value-50)/50)*180
            transformValue = "rotateY("+v+"deg)";
        }
    }
        break;
    default:
        console.error("unknown filter type:"+filter);
    }
    const styleText = document.getElementById("styleText");
    target.style["filter"] = filterValue;
    target.style["transform"] = transformValue;
    if (filterValue) {
        styleText.innerHTML = "style=\"filter: "+filterValue+";\"";
    }
    if (transformValue) {
        styleText.innerHTML = "style=\"transform: "+transformValue+";\"";1
    }
}
