let X;
let O;
RESET_IMAGES();
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

function RESET_IMAGES(){
    X = new Image(100, 100);
    O = new Image(100, 100);
    X.src = "images/x.jpg";
    O.src = "images/o.png";
}