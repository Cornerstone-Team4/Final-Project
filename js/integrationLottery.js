const minValue = 1;
const maxValue = 5;
const length = 3;
var targetArray = [];
var inputArray = [];
var outputInPosition, outputOutOfOrder, outputBestSequence = 0;

function onClickLottery(){
    targetArray = RandomNumberGenerator(minValue,maxValue,length,false);
    inputArray = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
    ];
    outputInPosition =  CheckHowManyInPosition(targetArray, inputArray,length);
    outputOutOfOrder = CheckHowManyOutOfOrder(targetArray,inputArray,length);
    outputBestSequence = CheckBestSequence(targetArray,inputArray,length);
    
    document.getElementById("result").innerHTML = 
        ("Lottery number: "+targetArray) + "<br>" + "<br>" + 
        ("In the same place: "+outputInPosition) + "<br>" +
        ("Anywhere: "+outputOutOfOrder) + "<br>" +
        ("Your best sequence was "+outputBestSequence+" long");
}