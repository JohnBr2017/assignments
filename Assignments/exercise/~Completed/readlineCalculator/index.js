var rs = require("readline-sync");

var numOne = rs.question("Please enter your first number?");
var numTwo = rs.question("Please enter your second number?");

var num1 = Number(numOne);
var num2 = Number(numTwo);

var calculate = ["add", "subt", "mult", "divide"];
var process = rs.keyInSelect(calculate, "calculation choice?");

function calculator() {
    if (process == 0){
        return num1 + num2;
    }else if (process == 1){
        return num1 - num2;
    }else if (process == 2){
        return num1 * num2;
    }else if (process == 3){
        return num1 / num2;
    }
}
console.log(calculator(num1, num2));