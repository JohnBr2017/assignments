// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// for (j = 10; j > 0; j--){
//     console.log(j);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"];

// for (k = 0; k < 4; k++){
//     console.log(fruit[k]);
// }

// var numbArray = [];

// for (l = 0; l < 10; l++){
//     numbArray.push(l);
// }
//     console.log(numbArray);

// for (m = 0; m <= 100; m++){
//     if ((m % 2) == 0)
//     console.log(m);
// }


// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var fruitArray = [];

// for (n = 0; n < fruit.length; n++) {
//     if (n % 2 === 0){
//         fruitArray.push(fruit[n])
//     }
// }
// console.log(fruitArray)


var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]
    let names= [];
    let occupations= []
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
    
}
console.log(names)

// var peopleNames = []
// var peopleOccupations = []
// for (var i = 0; i < peopleArray.length; i++) {
//         peopleNames.push(peopleArray[i].name);
//         peopleOccupations.push(peopleArray[i].occupation);
// }
// console.log(peopleNames);
// console.log(peopleOccupations)