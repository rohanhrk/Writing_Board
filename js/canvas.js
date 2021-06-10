"use strict";

let canvas = document.querySelector(".canvas");
let canvasContaier = document.querySelector(".canvas-container");
let body = document.querySelector(".body");
let bodyStyle = getComputedStyle(body);
let bodyRectObj = body.getBoundingClientRect();
let tool = canvas.getContext("2d");
canvas.width = Number(bodyStyle.width.split("px")[0]);
canvas.height = Number(bodyStyle.height.split("px")[0]);
canvas.style.top = bodyRectObj.top;
canvas.style.left = bodyRectObj.left;

let effectColor = "white";
let pencilThickness = 1;
let eraserThickness = 1;

let color = "red";
let activeTool;
let track;


// =================================================== Pencil Tool ===================================================
let pencilElem = document.querySelector(".pencil");
let penChoice = document.querySelectorAll(".pen");
let pencilThick = document.querySelector(".slider");
let thicksize = document.querySelector(".pencilThicknes");
let row = document.querySelectorAll(".box-row");

// ************** cursor select **************
pencilElem.addEventListener("click", function () {
    canvas.style.cursor = "crosshair";
    draw(color, pencilThickness);
})

// ************** thickness **************
pencilThick.addEventListener("input", function () {
    pencilThickness = pencilThick.value;
    tool.lineWidth = pencilThickness;
    thicksize.innerText = pencilThickness;
    draw(color, pencilThickness);
})

// ************** color change **************
for (let i = 0; i < row.length; i++) {
    let col = document.querySelectorAll(".box-col");
    for (let j = 0; j < col.length; j++) {
        col[j].addEventListener("click", function () {
            color = col[j].classList[1];
            tool.strokeStyle = color;
            tool.lineWidth = pencilThickness;
            draw(color, pencilThickness);
            toolbar.classList.remove("active");

        })

    }
}

// ========================================================== eraser Tool ==========================================================
let eraser = document.querySelector(".eraser-slider");
eraserBtn.addEventListener("click", function () {
    canvas.style.cursor = "grabbing";
    draw(effectColor, eraserThickness);
    
})
let eraserThicksize = document.querySelector(".eraserThicknes");
eraser.addEventListener("input", function () {
    eraserThickness = eraser.value;
    eraserThicksize.innerText = eraserThickness;
    draw(effectColor, eraserThickness)
})


// ========================================================== draw ==========================================================
function draw(color, width) {
    let isDown = false;
    canvas.addEventListener("mousedown", function (e) {
        isDown = true;
        let x = e.offsetX;
        let y = e.offsetY;

        tool.strokeStyle = color;
        tool.lineWidth = width;
        tool.beginPath();
        tool.moveTo(x, y);


    })

    canvas.addEventListener("mousemove", function (e) {
        if (isDown == true) {
            let x = e.offsetX;
            let y = e.offsetY;
            tool.lineTo(x, y);
            tool.stroke();
        }

    })
    canvas.addEventListener("mouseup", function (e) {
        isDown = false;

    })
}

// ========================================================== effect ==========================================================
let effectElem = document.querySelectorAll(".color");
for (let i = 0; i < effectElem.length; i++) {
    effectElem[i].addEventListener("click", function () {
        effectColor = effectElem[i].classList[2];
        tool.fillStyle = effectColor;
        tool.fillRect(0, 0, canvas.width, canvas.height);
        toolbar.classList.remove("active");
        body.style.backgroundColor = effectColor;
    })
}