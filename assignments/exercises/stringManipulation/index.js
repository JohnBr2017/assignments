var rs = require("readline-sync");

var names = rs.question("What is your name?");

var color = rs.question("and your favorite color?")


if (rs.keyInYN("Will you slay the dragon?")) {
    var dragons = console.log("Hero " + (names.concat(" The " + color)).toLocaleUpperCase() + " will slay the dragon!!");
} else {
    var dragons = console.log("Hero " + (names.concat(" The " + color)).toLocaleUpperCase() + " run and hide!!");
}

console.log(("The adventures of " + names + " the " + age + " will have drastic effects on our world").length > 20)




