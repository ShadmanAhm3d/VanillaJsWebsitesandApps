// var circle = document.getElementById("circle");
// var upbtn = document.getElementById("upbtn");
// var downbtn = document.getElementById("downbtn");

let circle = document.querySelector("#circle")
let upbtn = document.querySelector("#upbtn")
let downbtns = document.querySelector("#downbtn")

var rotateValue = circle.style.transform;
var rotateSum;

downbtn.onclick = function(){
    rotateSum = rotateValue + "rotate (90deg)" ;
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

}