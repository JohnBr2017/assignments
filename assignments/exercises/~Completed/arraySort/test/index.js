const chai = require("chai");
const assert = chai.assert;
const {
    leastToGreatest,
    greatestToLeast,
    lengthSort,
    alphabetical,
    byAge
} = require("../index.js");

// Use the built-in .sort() method on arrays to solve all of these problems
const tests = {
    case1: [1, 3, 5, 2, 90, 20],
    case2: ["dog", "wolf", "by", "family", "eaten"],
    case3: [
        {
            name: "Quiet Samurai",
            age: 22
        }, {
            name: "Arrogant Ambassador",
            age: 100
        }, {
            name: "Misunderstood Observer",
            age: 2
        }, {
            name: "Unlucky Swami",
            age: 77
        }
    ]
};

let ageSorted = [
    {
        name: "Misunderstood Observer",
        age: 2
    }, {
        name: "Quiet Samurai",
        age: 22
    }, {
        name: "Unlucky Swami",
        age: 77
    }, {
        name: "Arrogant Ambassador",
        age: 100
    }
]

describe("These should sort with correct results", () => {
    it("Should sort smallest to largest", () => {
        assert.deepEqual(leastToGreatest(tests.case1), [1, 2, 3, 5, 20, 90])
    });
    it("Should sort largest to smallest", () => {
        assert.deepEqual(greatestToLeast(tests.case1), [90, 20, 5, 3, 2, 1])
    });
    it("Should sort shortest string to longest string", () => {
        assert.deepEqual(lengthSort(tests.case2), ["by", "dog", "wolf", "eaten", "family"])
    });
    it("Should sort alphabetically", () => {
        assert.deepEqual(alphabetical(tests.case2), ["by", "dog", "eaten", "family", "wolf"])
    });
    it("Should sort by age", () => {
        assert.deepEqual(byAge(tests.case3), ageSorted)
    })
})
