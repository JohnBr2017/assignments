let str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";
// let newarr = []
// let theRepeats = [];

// findRepeats = function (str) {
//     let splittedStr = str.split(" ");
//     newarr.push(splittedStr);
//     return newarr
//     for(let i = 0; i < newarr.length; i++)
//         if (i !== newarr.match(/i/gi)){
//             return theRepeats
//         }else {
//             return theRepeats.push(i);
//         }
//         return theRepeats
// }


// console.log(findRepeats(str));

//seperate all the words in an an array
//loop through the array
//for each string to see if it appears elsewhere in the array
//if so, check if it is not already in output array and push it there


let matchWords = (str) => {
    let output = [];
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr.splice(arr[i][0])
        currentWord = currentWord.replace(/[^\w]/g);
        for (let j = 0; j < arr.length; j++) {
            let checkAgainst = arr[j].replace(/[^\w]/g);
            if (currentWord === checkAgainst && !output.includes(checkAgainst)) {
                output.push(currentWord);
                arr.splice(j, 1);
            }
        }
    }
    return output

}
console.log(matchWords(str))
