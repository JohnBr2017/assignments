//wireframe
//build layout
//logic

//price
var goombaPrice = 5;
var bobombPrice = 7;
var cheepcheepPrice = 11;

document.getElementById("goombaPrice").innerHTML = goombaPrice + " per capture!"
document.getElementById("bobPrice").innerHTML = bobombPrice + " per capture!"
document.getElementById("cheepPrice").innerHTML = cheepcheepPrice + " per capture!"

//qty
var goombaQty = 12;
var bobombQty = 8;
var cheepcheepQty = 5;

document.getElementById("totalGoombaCaught").innerHTML = goombaQty + " caught!"
document.getElementById("totalBobombCaught").innerHTML = bobombQty + " caught!"
document.getElementById("totalCheepCheepCaught").innerHTML = cheepcheepQty + " caught!"



//subtotal
var goombaSubTotal = goombaPrice * goombaQty
var bobombSubTotal = bobombPrice * bobombQty
var cheepcheepSubTotal = cheepcheepPrice * cheepcheepQty

document.getElementById("goombaCharge").innerHTML = "Cost of captures: " + goombaSubTotal + " Coins";
document.getElementById("bobombCharge").innerHTML = "Cost of captures: " + bobombSubTotal + " Coins";
document.getElementById("cheepcheepCharge").innerHTML = "Cost of captures: " + cheepcheepSubTotal + " Coins";



// grand total bill
var grandTotal = goombaSubTotal + bobombSubTotal + cheepcheepSubTotal

document.getElementById("totalBill").innerHTML = "The cost of the total captures will be " + grandTotal + " coins!!!";
