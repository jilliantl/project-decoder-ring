// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const alphabet = 
   ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',     'w', 'x', 'y', 'z', ' '];
  const cipher = 
   ['11', '21', '31', '41', '51', '12', '22', '32', '42',     '42', '52', '13', '23', '33', '43', '53', '14', '24',     '34', '44', '54', '15', '25', '35', '45', '55', ' '];

  function polybius(input, encode = true) {
    let results = "";

    //encoding
    if (encode) {
     for (let i = 0; i < input.length; i++){
      const letter = input[i].toLowerCase(); //ignores capital letters 
      
      if (alphabet.includes(letter)) {
        const alphabetIndex = alphabet.indexOf(letter);
        let newItem = cipher[alphabetIndex];
        results += newItem
      }
      
    }
    return results
    } 
    
    //decoding
    if (!encode) {
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
          count++;
        }
      }
      if (count % 2 === 1) {
        return false
      }
    }
      
      
      for (let i = 0; i < input.length;) {
        
        if (input[i] === " ") {
          results += " ";
          i+=1;
        } 
        else 
        {
        let code = "";
        code += input[i];
        code += input[i+1];
         if (code === "42") {
           results += "(i/j)"
         }
          else {
          let cipherIndex = cipher.indexOf(code);
          results += alphabet[cipherIndex]
          }
        i+=2
        }
      }
      return results
    }
    return {
      polybius,
    };
  })();
  

  
 


module.exports = { polybius: polybiusModule.polybius };