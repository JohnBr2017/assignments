const rs = require("readline-sync");

console.log("\nAfter a long night of partying you wake up on the cold floor of a mostly empty room. \nAs you stand up you notice a large door infront of you, a iron chest on your left, \nand a wooden chest on your right.")

let inv = [];
let living = true;

let userinput = rs.question("\nWhat is your name?");


while (living) {
    let door = ["Open", "Break", "Knock"];
    let woodenChest = ["Inspect", "Open", "Leave Alone"];
    let ironChest = ["Inspect", "Open", "Leave Alone"];
    let lookAround = ["a large door", " a wooden chest", " a iron chest"];
    let keyInWoodenChest = ["Take", "Leave Alone"];//odd
    let keyInIronChest = ["Take", "Leave Alone"];//even

    console.log(" \n" + userinput + ", In this room there is " + lookAround)

    let start = rs.keyInSelect(lookAround, "Which do you choose?")
    if (start === 0) {
        console.log(" \nThe door is large and reinforced with steel, what do you do?")
        let interactDoor = rs.keyInSelect(door, "What do you do with or to the door?")
        if (interactDoor === 0) {
            if (inv.includes("key")) {
                console.log("\nYay your free. Never again will you go partying with that Vus guy again.");
                break;
            } else {
                console.log("\nNo key, no leave.");
            }
        } else if (interactDoor === 1) {
            console.log("\nYou hit the door as hard as you can, nothing happens, you are not strong enough.")
        } else if (interactDoor === 2) {
            console.log("\nYou knock on the door, nothing happens. Apparently nobody is home.")
        }
    }
    if (start === 1) {
        while (true) {
            console.log("\nThis wooden chest is old and looks like it just might fall apart.")
            let interactWoodenChest = rs.keyInSelect(woodenChest, "What will you do with the chest?")
            if (interactWoodenChest === 0) {
                console.log("\nAfter close inspection, the chest does not appear to be locked, smells like rotten meat, and something slimy ozzing out of it.")
            } else if (interactWoodenChest === 1) {
                console.log("\nYou open the chest with ease, there is only a shiny key that sits in the center of the chest.")
                let interactKeyInWoodenChest = rs.keyInSelect(keyInWoodenChest, "The key looks like it would work on the door. Could it be freedom.");
                if (interactKeyInWoodenChest === 0) {
                    console.log("The chest is a Mimic, it grows in size and devours you whole...... YOUR DEAD.....");
                    living = false;
                    break;
                } else if (interactKeyInWoodenChest === 1) {
                    console.log("You do not take the key.");
                    break;
                }

            } else if (interactWoodenChest === 2) {
                console.log("\nYou step away from the chest.")
                break;
            }
        }
    }
    if (start === 2) {
        while (true) {
            console.log("\nThis iron chest looks really well made, and heavy.")
            let interactIronChest = rs.keyInSelect(ironChest, "What will you do with the chest?")
            if (interactIronChest === 0) {
                console.log("\nAfter close inspection, this chest looks new and unlocked.")
            } else if (interactIronChest === 1) {
                console.log("\nYou open the chest with ease, there is only a shiny key that sits in the center of the chest.")
                let interactKeyInIronChest = rs.keyInSelect(keyInIronChest, "The key looks like it would work on the door. Could it be freedom.");
                if (interactKeyInIronChest === 0) {
                    console.log("\nYou now have 'a' key but is it 'the' key?");
                    inv.push("key");
                    break;
                } else if (interactKeyInIronChest === 1) {
                    console.log("\nYou do not take the key.")
                    break;
                }

            } else if (interactIronChest === 2) {
                console.log("\nYou step away from the chest.")
                break;
            }

        }
    }
}





// const rs = require("readline-sync");

// console.log("You are in a locked room.\nThere is a door, a hidden key and a hole in the wall.");

// let inv = [];
// let isAlive = true;

// while(isAlive) {
//     let userinput = rs.question("What would you like to do? ");
//     userinput = userinput.toLowerCase();

//     if(userinput.includes("hole") && userinput.includes("put")) {
//         console.log("Sorry... um ... you died");
//         isAlive = false;
//         console.log("THE CAKE IS A LIE");
//     } else if(userinput.includes("open") && userinput.includes("door")) {
//         if(inv.includes("key")) {
//             console.log("Congrats you WIN the game!! Yo'ur going to Disneyland!!");
//             break;
//         } else {
//             console.log("Sorry you dont have the key you idiot.");
//         }
//     } else if(userinput.includes("take") && userinput.includes("key")) {
//         console.log("You found the key but is it the key?");
//         inv.push("key");
//     } else if(userinput.includes("look")) {
//         console.log("You are in a locked room.\nThere is a door, a hidden key and a hole in the wall.");        
//     } else {
//         console.log("Yo'ur idiot? What are you new? That isnt one of the commands");
//     }
// }