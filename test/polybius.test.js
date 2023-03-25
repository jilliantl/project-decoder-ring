// Write your tests here!


const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

 describe("polybius()", () => {
    it("should return '42' for 'i' and 'j' when encoding", () => {
        const expected = "42421313421133"
        const actual = polybius("jillian");
        expect(actual).to.equal(expected);
    })
   
    it("should return '(i/j)' for '42' when decoding", () => {
        const expected = "(i/j)(i/j)ll(i/j)an";
        const actual = polybius("42421313421133", false);
        expect(actual).to.equal(expected);
    })

    it("should ignore all capital letters", () => {
        const expected = "345131245144";
        const actual = polybius("SeCrEt");
        expect(actual).to.equal(expected);
    })

    it("should maintain spaces in message when encoding", () => {
        const expected = "42 42 13 13 42 11 33";
        const actual = polybius("j i l l i a n");
        expect(actual).to.equal(expected);
    })
   
    it("should maintain spaces in message when decoding", () => {
        const expected = "(i/j) (i/j) l l (i/j) a n";
        const actual = polybius("42 42 13 13 42 11 33", false);
        expect(actual).to.equal(expected);
    })
 })