 // Write your tests here!

 // returns fasle for wrong shift
 // ignores capitals
 // wraps alphabet
 // maintains spaces and special characters

 const expect = require("chai").expect;
 const {caesar} = require("../src/caesar.js");
 
  describe("caesar()", () => {
     it("should return 'false' if given shift does not meet requirements", () => {
         const actual = caesar("secret message", 0);
         expect(actual).to.be.false;
     })
 
     it("should ignore all capital letters", () => {
         const expected = "tfdsfu nfttbhf";
         const actual = caesar("Secret Message", 1);
         expect(actual).to.equal(expected);
     })
 
     it("should shift pass the end of the alphabet", () => {
         const expected = "afcsb";
         const actual = caesar("zebra", 1);
         expect(actual).to.equal(expected);
     })
 
     it("should maintain spaces and special characters", () => {
         const expected = "*tfdsfu nftt@hf <--- ifsf";
         const actual = caesar("*secret mess@ge <--- here", 1);
         expect(actual).to.equal(expected);
     })
  })