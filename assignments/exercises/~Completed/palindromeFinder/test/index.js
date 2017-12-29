const chai = require("chai");
const assert = chai.assert;
const isPalindrome = require("../index.js")

const tests = [
    "Star Rats!",
    "palindrome",
    "I madam, I made radio! So I dared! Am I mad?? Am I?!"
];


describe("checks if palindrome", () => {
    it("should return true", () => {
        assert(isPalindrome(tests[0]));
        assert(isPalindrome(tests[2]));
    });
    it("should return false", () => {
        assert(!isPalindrome(tests[1]))
    });
});