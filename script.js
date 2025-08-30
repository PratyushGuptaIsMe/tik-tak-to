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

let boxes = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
boxes.forEach((e) => {
    e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
})
boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if(e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore){
            clickBox(e);
        }
    });
})

let A = X.cloneNode(true);
let B = O.cloneNode(true);
let C = X.cloneNode(true);
let D = O.cloneNode(true);
let E = X.cloneNode(true);
let F = O.cloneNode(true);
let G = X.cloneNode(true);
let H = O.cloneNode(true);
let I = X.cloneNode(true);
let symbols = [A, B, C, D, E, F, G, H, I];
let index = 0;
a();
function RESET_IMAGES(){
    X = new Image(80, 80);
    O = new Image(80, 80);
    X.src = "images/x.jpg";
    O.src = "images/o.png";
}

function clickBox(e){
    e.appendChild(symbols[index]);
    index++;
    e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = false;
}

function a(){
    console.log(index);
    requestAnimationFrame(a);
}
