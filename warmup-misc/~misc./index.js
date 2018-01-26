// greedy approximation algorithms

var input = "bookkeeper larry";

var removeDups = function (str) {
    var output = {
        noDups: "",
        dups: "",
    }
    for(var i = 0; i < str.length; i++){
        if(output.noDups.indexOf(str[i]) < 0){
            output.noDups += str[i];
        }else {
            output.dups += str[i];
        }
    }
    return output;
}
console.log(removeDups("bookkeeper larry"));

