// let sortedOfAge = (arr) => {
    arr = arr.filter((person)=>{
        return person.age >=18;
    });
    return arr.sort((person1, person2)=>{
        return person1.lastName.localeCompare(person2.lastName)
    })
}
module.exports = sortedOfAge;



let data = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    }, {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }, {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }, {
        firstName: "Morty",
        lastName: "Smith",
        age: 13
    }, {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }
];

// let sortByAge = (arr) => {
//     return arr.sort((p1, p2) => p1.age - p2.age);
// }
// let displayToHtml = (arr) => {
//     let sortedPeeps = sortByAge(arr)
// };

// console.log(sortByAge())