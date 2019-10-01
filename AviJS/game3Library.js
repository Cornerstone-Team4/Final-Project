// Input
// var Num1 = document.getElementById("num1").value;
// var Num2 = document.getElementById("num2").value;
// // Output
// var result = document.getElementById("res").value;
var Num1 = 4;
var Num2 = 2;
var result = 8;
/*===================
        Addition
=====================*/
function add(num1, num2, answer){
    if (answer != num1 + num2){
        return false;
    }else {return true;
}
}

/*========================
        Subtraction
========================*/
function subtract(num1,num2,answer){
    if (answer != num1 - num2){
        return false;
    }else {return true;
}
}

/*========================
        Multiplication
========================*/
function multiply(num1,num2,answer){
    if (answer != num1 * num2){
        return false;
    }else {return true;
}
}
/*========================
        Division
========================*/
function divide(num1,num2,answer){
    if (answer != num1 / num2){
        return false;
    }else {return true;
}
}

/*==========================
        Integration
==========================*/
function checkSymbol(symbol){
    var boolOutput;
    switch (symbol){
        case '+':
            boolOutput = add(Num1, Num2, result);
            break;
        case '-':
            boolOutput = subtract(Num1, Num2, result);
            break;
        case '*':
            boolOutput = multiply(Num1, Num2, result);
            break;
        case '/':
            boolOutput = divide(Num1, Num2, result);
            break;
    } return boolOutput;
}

function checkRes(symbol){
    if (checkSymbol(symbol)){
        document.getElementById("result").innerHTML = "You are correct!";
    }else {document.getElementById("result").innerHTML = "You are wrong.";}
}
