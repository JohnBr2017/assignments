// let arr1 = ["1", 2, "3"];
// let arr2 = ["ben", "jacob", "bob"];

// function allNumber(arr) {
//     for (let i = 0; i <= arr.length; i++){
//         // return isNaN(arr[i])
//         return typeof (arr[i]) === "number"
//     }
// }
// console.log(allNumber(arr1));

function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i])) {
            return false;
        }
    }
    return true;
}


// Example:  
// every([1,2,"3"], (num)=>{  
//   return typeof num === "number";
// });
// returns false

// function someName(arr){

// }

function some(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return true;
        }
    }
    return false;


}

// Example:  
// some(["ben", "jacob", "bob"], (name)=>{  
//   return name === "jacob";
// });
// returns true