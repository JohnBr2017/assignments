





// let cartView = document.getElementById("cart-view");

// let cucBtn = document.getElementById("cucumber");
// let salsaBtn = document.getElementById("salsa");
// let milkBtn = document.getElementById("milk");
// let beerBtn = document.getElementById("beer");

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function appendLi(name) {
//     let li = document.createElement("li");
//     li.innerHTML = name;
//     cartView.appendChild(li);
// }

// cart.forEach(appendLi);

// function addToCart(event) {
//     cart.push(event.target.name);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     appendLi(event.target.name);
// }

// cucBtn.onclick = addToCart;
// salsaBtn.onclick = addToCart;
// milkBtn.onclick = addToCart;
// beerBtn.onclick = addToCart;

let clickCounter = () => {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clkCnt) {
            localStorage.clkCnt = Number(localStorage.clkCnt) + 1;
        } else {
            localStorage.clkCnt = 1;
        }
        document.getElementById("result").innerHTML = "You've clicked " + localStorage.clkCnt + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Your browser sucks!"
    }
}