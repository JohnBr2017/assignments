var rs = require("readline-sync");

var numOne = rs.question("Please enter your first number?");
var numTwo = rs.question("Please enter your second number?");

var calculate = ["add", "subt", "mult", "divide"];
var process = rs.keyInSelect(calculate, "calculation choice?");

function calculator(numOne, numTwo) {
    var num1 = Number(numOne);
    var num2 = Number(numTwo);
    if (){
        console.log(num1 + num2);
    }
}
console.log(calculator());