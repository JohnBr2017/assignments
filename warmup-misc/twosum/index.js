function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let input1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let input2 = arr[j];
            if (input1 + input2 === target) {
                return [i, j];
            }
        }
    }
}



console.log(twoSum([1, 2, 3], 4));










//returns [0, 2] because 1 + 3 equals 4