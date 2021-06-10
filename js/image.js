"use strict";

let downloadBtn = document.querySelector(".save");     
let newBtn = document.querySelector(".new");

// =========================================== Download ===========================================
downloadBtn.onclick = function () {
    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.download = "file.png";
    a.href = url;
    a.click();
    a.remove();
}

// =========================================== new ===========================================
newBtn.addEventListener("click", function () {
    tool.fillStyle = effectColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);
})