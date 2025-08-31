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

let A = X.cloneNode(true);
A.symbol = "x";
let B = O.cloneNode(true);
B.symbol = "o";
let C = X.cloneNode(true);
C.symbol = "x";
let D = O.cloneNode(true);
D.symbol = "o";
let E = X.cloneNode(true);
E.symbol = "x";
let F = O.cloneNode(true);
F.symbol = "o";
let G = X.cloneNode(true);
G.symbol = "x";
let H = O.cloneNode(true);
H.symbol = "o";
let I = X.cloneNode(true);
I.symbol = "x";
let symbols = [A, B, C, D, E, F, G, H, I];
let index = 0;

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
    checkWinOrLose();
}

function checkWinOrLose(){
    try{
        if( b1.children[0].symbol === b2.children[0].symbol &&
            b2.children[0].symbol === b3.children[0].symbol &&
            b3.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b1.children[0].symbol);
        }
        if( b4.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b6.children[0].symbol &&
            b6.children[0].symbol === b4.children[0].symbol
        ){
            PlayerWon(b4.children[0].symbol);
        }
        if( b7.children[0].symbol === b8.children[0].symbol &&
            b8.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b7.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
        if( b1.children[0].symbol === b4.children[0].symbol &&
            b4.children[0].symbol === b7.children[0].symbol &&
            b7.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
        if( b2.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b8.children[0].symbol &&
            b8.children[0].symbol === b2.children[0].symbol
        ){
            PlayerWon(b2.children[0].symbol);
        }
        if( b3.children[0].symbol === b6.children[0].symbol &&
            b6.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b3.children[0].symbol
        ){
            PlayerWon(b6.children[0].symbol);
        }
        if( b1.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b9.children[0].symbol);
        }
        if( b7.children[0].symbol === b3.children[0].symbol &&
            b5.children[0].symbol === b7.children[0].symbol &&
            b3.children[0].symbol === b5.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
    }
    catch(e){

    }
}

function PlayerWon(whoWon){
    if(whoWon === "x"){
        console.log("X wins");
    }else if(whoWon === "o"){
        console.log("O wins");
    }
}

boxes.forEach((e) => {
    e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    e.addEventListener("click", () => {
        if(e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore){
            clickBox(e);
        }
    });
})
