const sortedOfAge = require("../index.js");
const chai = require("chai");
const assert = chai.assert;


let data = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    }, {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    }, {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }, {
        firstName: "Morty",
        lastName: "Smith",
        age: 13
    }, {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }
];

let expected = [
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    }, {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },{
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    }
];

describe("filter and sorting by age", () => {
    it("return an array filtered and sorted by people older than 18", () => {
        assert.deepEqual(sortedOfAge(data), expected);
    })
})