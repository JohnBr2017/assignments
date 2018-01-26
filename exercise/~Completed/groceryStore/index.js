var shopperFirst = {
    fruit: "Apples",
    color: "Green",
    costFirst: .99,
};
var shopperSecond = {
    cerial: "Trix",
    sizeSecond: "18oz.",
    costSecond: 3.99,
};
var shopperThird = {
    iceCream: "Mint Chocolate Chip",
    sizeThird: "Pint",
    costThird: 4.99,
};
var shopperFourth = {
    cheese: "Chedder Cheese",
    cut: "Deli Sliced",
    costFourth: 1.99,
};
var groceryCart = {
    shopperFirst: "apples",
    shopperSecond: "cerials",
    shopperThird: "icecream",
    shopperFourth: "cheese"
};
shopperFirst.fruits = function() {
    return this.color + " " + this.fruit + " cost $" + this.costFirst;
};
shopperSecond.cerials = function() {
    return this.sizeSecond + " " + this.cerial + " cost $" + this.costSecond;
};
shopperThird.iceCreams = function() {
    return this.sizeThird + " " + this.iceCream + " cost $" + this.costThird;
};
shopperFourth.cheeses = function() {
    return this.cut + " " + this.cheese + " cost $" + this.costFourth;
};

// console.log("The "  + shopperFirst.fruits());
// console.log("The "  + shopperSecond.cerials());
// console.log("The "  + shopperThird.iceCreams());
// console.log("The "  + shopperFourth.cheeses());
