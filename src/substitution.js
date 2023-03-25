// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = 
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
   'w', 'x', 'y', 'z'];

 function substitution(input, alphabet, encode = true) {

      let results = "";
   
   if (!alphabet || alphabet.length !== 26) {
      return false
    } //checks for alphabet length 
   
   for (let i = 0; i < alphabet.length; i++) { 
       for (let j = 0; j < alphabet.length; j++) {
         if (i !== j) {
           if (alphabet[i] === alphabet[j]) {
             return false
           }
         }
        }
      }
   
     
  for (let i = 0; i < input.length; i++) {
    const letter = input[i].toLowerCase(); // ignores capital letters
    
    if (encode === true) {
    if(standardAlphabet.includes(letter)) {
       const standardIndex = standardAlphabet.indexOf(letter);
       const newLetter = alphabet[standardIndex];
       results += newLetter;
     } else {
        if (input[i] === " ") {
         results += " ";
       } 
     }
  }
    
    if (encode === false){
     if(alphabet.includes(letter)) {
       const alphaIndex = alphabet.indexOf(letter);
       const newLetter2 = standardAlphabet[alphaIndex];
       results += newLetter2;
     } else {
        if (input[i] === " ") {
         results += " ";
       } 
     }
    }
    }
   
      return results
   }
   return {
     substitution
   };
 })();

module.exports = { substitution: substitutionModule.substitution };
