const inputArray = [ "this", "is", "an", "array"]

// function longest(arr) {
//     let long = arr[0] + ',' + arr[1] + ',' + arr[2];
//     for (let i = 0; i < arr.length - 2; i++) {
//         let newLong = arr[i] + ',' + arr[i + 1] + ',' + arr[i + 2];
//         if (long.length < newLong.length) {
//             long = newLong
//         }
//     }
//     return long.split(",")
// }

function longest(arr) {
    let count = 0;
    let output = [];
    for (let i = 0; i < arr.length - 2; i++) {
        let combinedLength = arr[i].length + arr[i + 1].length + arr[i + 2].length;
        if (count === 0 || combinedLength > count) {
            count = combinedLength;
            output = [arr[i], arr[i + 1], arr[i + 2]]
        }
    }
    return output;
}

console.log(longest(inputArray))