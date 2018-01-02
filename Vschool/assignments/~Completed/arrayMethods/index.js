var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
index = fruit.indexOf("orange")
fruit.push(index)
vegetables.push(vegetables.length)

var food = fruit.concat(vegetables)


food.splice(4,2);
food.reverse();
var final = food.join(', ');

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables); 
// console.log(index);
// console.log(vegetables.length);
console.log("food: ", final);
