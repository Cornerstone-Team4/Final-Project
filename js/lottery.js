function CheckHowManyInOrder(target, input,length){
}

function CheckHowManyOutOfOrder(target, input, length){
    var output = 0;
    for(var i=0; i<length; i++){
        for (var j=0; j<length; j++){
            if(target[j]==input[i]){
                output++;
            }
        }
        
    }
    return output;
}

function RandomNumberGenerator(min, max,length){
    var output = [];
    for (i=0 ; i<length; i++){
        output.push(Math.floor(Math.random()*((max+1)-min)+min));
    }
    return output;
}

const length = 3;
var target = [3,4,5];
var input = [1,5,3];
//var output = RandomNumberGenerator(1,10,length);
//console.log(output);
var check = [] 
check = CheckHowManyOutOfOrder(target,input,length);
console.log(check);