// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
   const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {

    if (shift < -25 || shift > 25 || shift === 0 || !shift) {
      return false;
    } //checks if shift meets requirements

    let results = "";
    if (encode === false){
      shift = shift * -1;
    } //changes encoding to decoding

    for (let i = 0; i < input.length; i++){
      const letter = input[i].toLowerCase(); //ignores capital letters
      
      if(alphabet.includes(letter)){ //ignores spaces and specail characters
        const letterIndex = alphabet.indexOf(letter); //finds index of letter in alphabet
        let indexShifted = letterIndex + shift; //shifts the letter 
      
      if (indexShifted > 25){
        indexShifted += -26;
      } 
      if (indexShifted < 0 && indexShifted > -25){
        indexShifted += 26;
      } //wraps the alphabet

      const letterShifted = alphabet[indexShifted]; //defines new letter after shifting
      results += letterShifted; 
    } else {
      results += letter
    }
  }
  return results;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
