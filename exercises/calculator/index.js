var num1ToAdd = document.getElementById("num1ToAdd");
var num2ToAdd = document.getElementById("num2ToAdd");
var num1ToSubt = document.getElementById("num1ToSubt");
var num2ToSubt = document.getElementById("num2ToSubt");
var num1ToMult = document.getElementById("num1ToMult");
var num2ToMult = document.getElementById("num2ToMult");
var add = document.getElementById("add");
var subt = document.getElementById("subt");
var multiply = document.getElementById("multiply");
var resultOfAdd = document.getElementById("resultOfAdd");
var resultOfSubt = document.getElementById("resultOfSubt");
var resultOfMult = document.getElementById("resultOfMult");


add.onclick = function () {
    var numOne = Number(num1ToAdd.value);
    var numTwo = Number(num2ToAdd.value);
    if (isNaN(num1ToAdd.value) || isNaN(num2ToAdd.value)) {
        resultOfAdd.innerHTML = "Not Number Used"
    } else {
        resultOfAdd.innerHTML = numOne + numTwo;
        clearInputsAdd();
    }
}
subt.onclick = function () {
    var numOne = Number(num1ToSubt.value);
    var numTwo = Number(num2ToSubt.value);
    if (isNaN(num1ToSubt.value) || isNaN(num2ToSubt.value)) {
        resultOfSubt.innerHTML = "Not Number Used"
    } else {
        resultOfSubt.innerHTML = numOne + numTwo;
        clearInputsSubt();
    }
}
multiply.onclick = function () {
    var numOne = Number(num1ToMult.value);
    var numTwo = Number(num2ToMult.value);
    if (isNaN(num1ToMult.value) || isNaN(num2ToMult.value)) {
        resultOfMult.innerHTML = "Not Number Used"
    } else {
        resultOfMult.innerHTML = numOne + numTwo;
        clearInputsMult();
    }
}
function clearInputsAdd() {
    num1ToAdd.value = "";
    num2ToAdd.value = ""
}
function clearInputsSubt() {
    num1ToSubt.value = "";
    num2ToSubt.value = ""
}
function clearInputsMult() {
    num1ToMult.value = "";
    num2ToMult.value = ""
}




// console.log(Number(input.value));     changes to a number   number === number    letter === NaN
// console.log(input.value);    leaves it a string
// display .innerHTML