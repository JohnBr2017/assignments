// function checkTypes(arr) {
//     for (let i = 0, j = 1; i < arr.length, j < arr.length; i++ , j++) {
//         if (typeof arr[i].every === typeof arr[j].every) {
//             return true;
//         }
//         else {
//             return false
//         }
//     }
// }


// loop through the first layer
//check whether each arrays' contents all share the same data type whithin the array
//check whether each arrays' contents all share the same data type ACROSS the arrays

function checkTypes(arr) {
    let initial = arr[0][0];
    return arr.every(subArr => 
        subArr.every(value => 
            typeof(value) === typeof(initial)
        )
    )
}

// function checkTypes(arr) {
//     for (let i = 0; i < arr.length; i++){
//         let subArr = arr[i];
//         let check = typeof subArr[0];
//         for(let j = 0; j < subArr.length; j++){

//         }
//     }
// }




const multiD1 = [[1, 2, 3], ["a", "b", "c"], [true, true, true]]
// checkTypes(multiD1)  
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true, false, true], [false, false, true]]
// checkTypes(multiD2)  
// returns true (each inner array contains the same data type as the others)


console.log(checkTypes(multiD2));
