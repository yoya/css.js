"use strict";

function dropFunction(target, callback) {
    const cancelEvent = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    target.addEventListener("dragover" , cancelEvent, false);
    target.addEventListener("dragenter", cancelEvent, false);
    target.addEventListener("drop"     , function(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                callback(e.target.result);
            }
            reader.readAsDataURL(file);
        }
    }, false);
};
