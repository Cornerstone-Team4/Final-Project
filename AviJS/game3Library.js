// Input
var Num1 = document.getElementById("num1").value;
var Num2 = document.getElementById("num2").value;
// Output
var result = document.getElementById("res").value;

/*===================
        Addition
=====================*/
function add(num1, num2, answer){
    var answer;
    if (answer != num1 + num2){
        return false;
    }else {return true;
}
}

/*========================
        Subtraction
========================*/
function subtract(num1,num2,answer){
    var answer;
    if (answer != num1 - num2){
        return false;
    }else {return true;
}
}

/*========================
        Multiplication
========================*/
function multiply(num1,num2,answer){
    var answer;
    if (answer != num1 * num2){
        return false;
    }else {return true;
}
}
/*========================
        Division
========================*/
function divide(num1,num2,answer){
    var answer;
    if (answer != num1 / num2){
        return false;
    }else {return true;
}
}

/*==========================
        Integration
==========================*/
function checkSymbol(){
    switch (symbol){
        case '+':
            add(Num1, Num2, result);
            break;
        case '-':
            subtract(Num1, Num2, result);
            break;
        case '*':
            multiply(Num1, Num2, result);
            break;
        case '/':
            divide(Num1, Num2, result);
            break;
    }
}

function checkRes(){
    if (checkSymbol()){
        document.getElementById("result").innerHTML = "You are correct!";
    }else {document.getElementById("result").innerHTML = "You are wrong.";}
}