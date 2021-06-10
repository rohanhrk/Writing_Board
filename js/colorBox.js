"use strict";

let colorBox = document.querySelector(".color-box");
let colorDiv1 = document.createElement("div");
colorDiv1.setAttribute("class", "box-row");
colorDiv1.innerHTML = `
    <div class="tc">
        <div class="box-col #f44336" id="r1"></div>
    </div>
    <div class="tc">
        <div class="box-col #e91e63" id="r2"></div>
    </div>
    <div class="tc">
        <div class="box-col #9c27b0" id="r3"></div>
    </div>
    <div class="tc">
        <div class="box-col #673ab7" id="r4"></div>
    </div>
`
colorBox.appendChild(colorDiv1);

let colorDiv2 = document.createElement("div");
colorDiv2.setAttribute("class", "box-row");
colorDiv2.innerHTML = `
    <div class="tc">
        <div class="box-col #3f51b5" id="r5"></div>
    </div>
    <div class="tc">
        <div class="box-col #2196f3" id="r6"></div>
    </div>
    <div class="tc">
        <div class="box-col #009688" id="r7"></div>
    </div>
    <div class="tc">
        <div class="box-col #4caf50" id="r8"></div>
    </div>
`
colorBox.append(colorDiv2);

let colorDiv3 = document.createElement("div");
colorDiv3.setAttribute("class", "box-row");
colorDiv3.innerHTML = `
    <div class="tc">
        <div class="box-col #8bc34a" id="r9"></div>
    </div>
    <div class="tc">
        <div class="box-col #cddc39" id="r10"></div>
    </div>
    <div class="tc">
        <div class="box-col #ffeb3b" id="r11"></div>
    </div>
    <div class="tc">
        <div class="box-col #ffc107" id="r12"></div>
    </div>
`
colorBox.append(colorDiv3);


let colorDiv4 = document.createElement("div");
colorDiv4.setAttribute("class", "box-row");
colorDiv4.innerHTML = `
    <div class="tc">
        <div class="box-col #ff5722" id="r13"></div>
    </div>
    <div class="tc">
        <div class="box-col white" id="r14"></div>
    </div>
    <div class="tc">
        <div class="box-col #9e9e9e" id="r15"></div>
    </div>
    <div class="tc">
        <div class="box-col #607d8b" id="r16"></div>
    </div>
`
colorBox.append(colorDiv4);
