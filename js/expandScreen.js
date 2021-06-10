"use strict";

expandBtn.addEventListener("click", function () {

    expandFlag = !expandFlag;
    if (expandFlag) {
        document.documentElement.requestFullscreen();
    }
    else {
        document.exitFullscreen();
    }

});

document.addEventListener("fullscreenchange", function () {

    let expandicon = document.querySelector(".expand-btn");
    if (document.fullscreenElement) {                          
        expandicon.innerText = "";
        expandicon.innerText = "fullscreen_exit";
    }
    else {
        expandicon.innerText = "";
        expandicon.innerText = "fullscreen";
    }


})