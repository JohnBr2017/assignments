const rs = require("readline-sync")

// first component grid
// second component location object that contains info about a  particular coordinate
// third component game loop
//

function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~";

}
// Location.prototype.attack(){

// }
function Grid() {
    this.grid = [];
    this.totalShips = 0;

}
Grid.prototype.genGrid = function () {
    for (let i = 0; i < 8; i++) {
        this.grid.push([]);
        for (let j = 0; j < 8; j++) {
            let location = new Location();
            if (location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}
Grid.prototype.displayGrid = function () {
    //print grid to the screen
    for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "))
    }
}
Grid.prototype.attack = function (x, y) {
    let coord = this.grid[y][x];
    coord.isHit = true;
    if (coord.isShip) {
        coord.display = "x";
        this.totalShips--;
    } else {
        coord.display = "o";
    }
}

// when the game starts, show a brand new grid
// [
//     ["~","~","~"]
//     ["~","~","~"]
//     ["~","~","~"]
// ]

// asks you to enter in an x and y coodinates
// show the grid again but this time it shows the result of your attack

// x=hit 
// 0=miss
// [
//     ["x","~","~"]
//     ["~","~","~"]
//     ["~","~","0"]
// ]

//above process repeats untill all ships are dead

//print victory message and end game

let game = new Grid();
game.genGrid();
// console.log(game.grid[2][4])
// console.log(game.totalShips)
// game.attack(6,4)

//keep track of past attacks
//cant enter coords that are not on the grid

//GAME LOOP HELPER
function validateCoord(x, y) {
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length
}

function validateAttack(x, y) {
    x = Number(x);
    y = Number(y);
    return !game.grid[y][x].isHit;
}

let turnCounter = 20;
console.log("Battleship")
game.displayGrid();
while (true) {
    console.log("remaining turns " + turnCounter)
    let xLimit = game.grid.length - 1
    let yLimit = game.grid[0].length - 1
    let x = rs.keyIn("Choose an X coordinate between 0 and " + xLimit + "\n", { limit: "$<0-" + xLimit + ">" });
    let y = rs.keyIn("Choose an Y coordinate between 0 and " + yLimit + "\n", { limit: "$<0-" + yLimit + ">" });
    if (!validateCoord(x, y)) {
        console.log("\nSorry doent work, try again...");
        continue;
    }
    if (!validateAttack(x, y)) {
        console.log("\nSorry you already tried there");
        continue;
    }
    game.attack(x, y);
    turnCounter--;
    if (game.totalShips === 0) {
        break;
    }
    if (turnCounter === 0) {
        break;
    }

    game.displayGrid();
}

if (turnCounter > 0) {
    console.log("Victory.... but is it really...")
} else {
    console.log("Defeated.... come on back if you know what your doing...")
}
