function theSum(num1, num2) {
    return num1 + num2
}
console.log(theSum(1, 2));

x = findMax(5, 999, 46);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(x))

var t = 498375;
var isEven = function (t) {
   if (t % 2 === 0){
       return "it is even";
   }else{
       return "it is odd";
   }
};
console.log(isEven(t));

var str = "Hello World!";
var n = str.length;
console.log(n)
