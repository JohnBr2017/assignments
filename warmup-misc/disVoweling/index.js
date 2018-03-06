// Input:  
// "Pickle Rick!"

// Output:  
// {
//   str: "pckrck!",
//   vowels: "iei"
// }


let input = "Pickle Rick";
let vowel = ["a", "e", "i", "o", "u"];
let output = {
    str: "",
    vowels: ""
}

function disVowel() {
    let i;
    let strVowel = vowel.join("")
    for ( i = 0; i < strVowel.length; i++) {
        for ( j = 0; j < input.length; j++) {
            if (strVowel[i] == input.charAt(j)) {
                input = input.slice(0, j).concat(input.slice(j + 1, input.length));
                
            }

        }
    }
}

console.log(disVowel(input));