let person = [
    {
        name: "Ben",
        age: 29
    },
    {
        name: "Celeste",
        age: 75
    },
    {
        name: "Luke",
        age: 16
    },
    {
        name: "Matthew",
        age: 25
    },
    {
        name: "",
        age: 26
    },
    {
        name: "Ken",
        age: 9
    },
];

//  let ageSort = database.sort(function (person1, person2){
//      if (person1.age > person2.age){
//          return -1;
//      }else if(person1.age < person2.age){
//          return 1;
//      }else {
//         return 0
//     }
//  })

// ageSort.forEach(function(person){
//     console.log(person)
// })

let aveAge = person.reduce(function (total, person) {
    
    return total + person.age;
}) / person.length;

console.log(aveAge);

// let numbers = [1,2,3,4,5];

// let sum = numbers.reduce(function(total, num){
//     return total + num;
// });
// console.log(sum);
