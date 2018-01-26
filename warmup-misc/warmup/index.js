// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.
// ``` sameDigit(74, 24) // returns true```


// first define if numbers are not negitive
// second define if numbers are same last digit

// var lastDigit = String(number).substr(-1);

// var evenNumber = function (num1, num2) {
//     if (num1 % 2 == 0 && num2 % 2 == 0) {
//         var lastDigit1 = String(num1).substr(-1)
//         var lastDigit2 = String(num2).substr(-1)
//         if (lastDigit1 === lastDigit2) {
//             return (num1 + " and " + num2 + " are even and true")
//         }
//     } else {
//         var lastDigit1 = String(num1).substr(-1)
//         var lastDigit2 = String(num2).substr(-1)
//         if (lastDigit1 === lastDigit2) {
//             return (num1 + " and " + num2 + " are odd and true")
//         }
//     }
// }
//     return num1%10 ===num2%10;
// }


// console.log(evenNumber(33, 95))












// function Animal(name) {
//     this.name = name;
//     this.hasCellWall = false;
// }
// Animal.prototype.print = function () {
//     for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log(`${key}: ${this[key]}`);
//         }
//     }
// }

// function Mammal() {
//     Animal.call(this);
//     this.hasFur = true;
// }
// Mammal.prototype = Object.create(Animal.prototype);

// class Animal {
//     constructor(name) {
//         this.hasCellWall = false;
//         this.name = name;
//     }
//     print() {
//         for (let key in this) {
//             if (this.hasOwnProperty(key)) {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     }
// }

// class Mammal extends Animal {
//     constructor(name, furType) {
//         super(name);
//         this.hasFur = true;
//         this.furType = furType;
//     }
// }


// let coyote = new Animal("coyote");
// coyote.print();
// let whale = new Mammal("whale", "whaleHair");
// whale.print();

//make two constructor functions
//one must inherit from the other
//add a prototype print() method to the 'parent'
//make an instance of each, and call their print methods

//do the same using es6 class syntax;

// function Orkoid (){
//     this.isFungus = true;
//     this.isAnimal = true;
// }

// Orkoid.prototype.print = function () {
//     for (let key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log(`${key}: ${this[key]}`);
//         }
//     }
// }

// function Ork (){
//     Orkoid.call(this)
//     this.warLikeCreature = true;
// }

// Ork.prototype = Object.create(Orkoid.prototype);

// let badruckk = new Ork;
// badruckk.print();
// let grotrock = new Orkoid;
// grotrock.print();


// class Orkoid {
//     constructor(){
//         this.isFungus = true;
//         this.isAnimal = true;    
//     }
//     print(){
//         for (let key in this) {
//             if (this.hasOwnProperty(key)) {
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     }
// }
// class Ork extends Orkoid{
//     constructor(){
//         super();
//         this.warLikeCreature = true;
//     }
// }
// let badruckk = new Ork;
// badruckk.print();
// let grotrock = new Orkoid;
// grotrock.print();






// The Orkoid ecosystem includes several species, Gretchin, Snotlings, Squigs and Orkoid Fungus, 
// as well as the Orks themselves. The Ork ecosystem, born from fungal spores, travels with the race itself, 
// allowing the Orks to rapidly colonize and reproduce on worlds across the galaxy.