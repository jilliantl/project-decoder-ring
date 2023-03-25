// Write your tests here!


const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

 describe("substitution()", () => {
    it("should return 'false' if alphabet isn't exactly 26 characters long", () => {
        const input = 
   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '&'];
;
        const actual = substitution("secret message", input);
        expect(actual).to.be.false;
    })

    it("should translate given phase using given alphabet", () => {
         const input = 
   ['a', 'b', '<', 'd', '3', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', '%', '$', '!', 'u', 'v',
    'w', 'x', 'y', 'z'];
        const expected = "$3<%3!";
        const actual = substitution("secret", input);
        expect(actual).to.equal(expected);
    })

    it("should return 'false' if given alphabet has duplicate characters", () => {
        const input = 
   ['a', 'b', '<', '<', '3', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', '%', '$', '!', 'u', 'v',
    'w', 'x', 'y', 'z'];
        const actual = substitution("message", input);
        expect(actual).to.be. false;
    })

    it("should maintain spaces when encoding", () => {
        const input = 
   ['a', 'b', '<', 'd', '3', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', '%', '$', '!', 'u', 'v',
    'w', 'x', 'y', 'z'];
        const expected = "! 3 $ !";
        const actual = substitution("t e s t", input);
        expect(actual).to.equal(expected);
    })
   
    it("should maintain spaces when decoding", () => {
        const input = 
   ['a', 'b', '<', 'd', '3', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', '%', '$', '!', 'u', 'v',
    'w', 'x', 'y', 'z'];
        const expected = "t e s t";
        const actual = substitution("! 3 $ !", input, false);
        expect(actual).to.equal(expected);
    })
   
    it("should ignore all capital letters", () => {
         const input = 
   ['a', 'b', '<', 'd', '3', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', '%', '$', '!', 'u', 'v',
    'w', 'x', 'y', 'z'];
        const expected = "$3<%3!";
        const actual = substitution("SeCrEt", input);
        expect(actual).to.equal(expected);
    })
   
 })