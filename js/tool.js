"use strict";

// =================================================== tool-container ===================================================
let toolActive = document.querySelectorAll(".tool");
let menuBtn = document.querySelector(".tool.menu");
let pencilBtn = document.querySelector(".tool.pencil");
let eraserBtn = document.querySelector(".tool.eraser");

let shapesBtn = document.querySelector(".tool.shapes");
let effectBtn = document.querySelector(".tool.effect");
let board = document.querySelector(".canvas-container");
let expandBtn = document.querySelector(".full-screen");
let expandFlag = false;         
// =================================================== tool-bar-container ===================================================
let toolbar = document.querySelector(".tool-bar-container");
let menuBar = document.querySelector(".menu-bar");
let pencilBar = document.querySelector(".pencil-bar");
let eraserBar = document.querySelector(".eraser-bar");
let screenBar = document.querySelector(".screen-present-bar");
let shapesBar = document.querySelector(".shapes-bar");
let effectBar = document.querySelector(".effect-bar");
let toolbarActive = document.querySelectorAll(".toolbar")



for (let i = 0; i < toolActive.length; i++) {
    toolActive[i].addEventListener("click", function () {
        for (let i = 0; i < toolActive.length; i++) {
            if (toolActive[i].classList[2] == "active-btn") {
                toolActive[i].classList.remove("active-btn");
            }
        }
        toolActive[i].classList.add("active-btn");

        for (let i = 0; i < toolbarActive.length; i++) {
            if (toolbarActive[i].classList[2] == "active") {
                toolbarActive[i].classList.remove("active");
            }
        }
        toolbar.classList.add("active");
        toolbarActive[i].classList.add("active");
    })
}
board.addEventListener("mousedown", function () {
    for (let i = 0; i < toolbarActive.length; i++) {
        toolbarActive[i].classList.remove("active");
        toolbar.classList.remove("active");
        toolActive[i].classList.remove("active-btn");
        
    }
})

menuBar.addEventListener("click", function () {
    toolbar.classList.remove("active");
})
screenBar.addEventListener("click", function() {
    toolbar.classList.remove("active");

})

