const multiply = require("../index.js");
const chai = require("chai");
const assert = chai.assert;



describe("Testing multifplication function", function () {
    it("should output 4", function () {
        assert.equal(multiply(2, 2), 4)
    })
    it("should output 9", function () {
        assert.equal(multiply(3, 3), 9)
    })
    it("should throw error", function () {
        assert.throws(function () {
            multiply(3, "horse")
        })
    })
});



