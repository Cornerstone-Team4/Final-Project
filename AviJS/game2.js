var number = document.getElementById("num").value;

function checkPrime(inputNumber){
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
            document.write("The number " + inputNumber + " is a prime number.");
        }if (flag == false){
            document.write("The number " + inputNumber + " is not a prime number.");
        }
    return flag;
    
}
