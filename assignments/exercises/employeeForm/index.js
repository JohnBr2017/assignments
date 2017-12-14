// var employees = []

// function Employee(name, title, salary, status){
//     this.name = name;
//     this.title = title;
//     this.salary = salary;
//     this.status = status || "Full Time";
// }

// Employee.prototype.printEmployeeForm =function(){
//     console.log("Name: " + this.name +"\nTitle: " + this.title +"\nSalary: " + this.salary +"\nStatus: " + this.status)
// }

// var john = new Employee("John", "Manager", "100K");
// var pollyStahl = new Employee("Polly Stahl", "Vice President of Finance", "1,500,000");
// var mirandaPriestly = new Employee("Miranda Priestly", "Editor in Chief", "More money then everyone", "Part Time");

// mirandaPriestly.status = "Contract";
// mirandaPriestly.disposition = "Bitchy";

// // console.log(john)
// // console.log(pollyStahl)
// // console.log(mirandaPriestly)

// john.printEmployeeForm();
// pollyStahl.printEmployeeForm();
// mirandaPriestly.printEmployeeForm();

// employees.push(john, pollyStahl, mirandaPriestly);
// console.log(employees)








// function Dog(name, breed, color, age, barkSound) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.age = age;
//     this.barkSound = barkSound;
// }

// Dog.prototype.bark = function () {
//     return this.barkSound
// }

// function Wolf(name, breed, color, age, barkSound) {
//     Dog.call(this, name, breed, color, age, barkSound)
// }
// Wolf.prototype.bark = function () {
//     return this.barkSound.toUpperCase() + "!!!!!!!!";
// }

// var myDog = new Dog("Buckeye", "Chocolate Lab", "Brown", 1, "woof!");
// var yourDog = new Dog("Snokovich III", "Rat Lab", "Black", 1, "arrrf");
// var myWolf = new Wolf("Ginger", "Siberian", "white", 3, "owowowowowowww!");


// // console.log(myDog);
// // console.log(yourDog);

// myDog.bark();
// yourDog.bark();
// myWolf.bark();



// function testDog(dog) {
//     if (dog.bark().includes("!")) {
//         console.log("sorry too loud")
//     } else {
//         console.log("i will take it")
//     }
// }
// testDog(myWolf);
// testDog(myDog);
// testDog(yourDog);
