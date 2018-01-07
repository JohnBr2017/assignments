let isPalindrome = (str) => {
    str = str.replace(/[^A-z]/g, "")
    for (let i = 0; i < str.length / 2; i++) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("Star Rats!"));




module.exports = isPalindrome
// isPalindrome("Star Rats!");  // true  
// isPalindrome("palindrome");  // false  
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");