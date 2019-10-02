
function checkPrime(){
    var inputNumber = document.getElementsByClassName("result").value;
    var flag = true;
    if (inputNumber == 0){
        flag = false;
    }
    if (inputNumber == 1){
        flag = true;
    }
    for(var i = 2; i < inputNumber; i++) {
        if(inputNumber % i === 0) {
            flag = false;
        }
        
    }if (flag == true){
        document.getElementById("result").innerHTML ="The number " + inputNumber + " is a prime number.";
    }if (flag == false){
        document.getElementById("result").innerHTML = "The number " + inputNumber + " is not a prime number.";
    }
    // console.log(flag)
    return flag;
}
// var prime = checkPrime();
// console.log(checkPrime(num)+ " this is the num "+ num);
// var result = document.getElementById("result").innerHTML
// var prime = checkPrime(number);