// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = function () {
    // you can add any code you want within this function scope

  
    return {
      caesar,
    };
  };
  
  function caesar(input, shift, encode = true) {
    // your solution code here   
    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false
    }
    
    let message = "";
    const lowerMessage = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < lowerMessage.length; i++) {
      const currentLetter = lowerMessage[i];
      const currentIndex = alphabet.indexOf(currentLetter);
      let newIndex;
      if (encode === true) {
        newIndex = currentIndex + shift;
      } else { newIndex = currentIndex - shift }

      if (!alphabet.includes(currentLetter)) {
        message += currentLetter;
      } else if (newIndex > 25) {
        newIndex = newIndex - 26;
        message += alphabet[newIndex];
      } else if (newIndex < 0) {
        newIndex = newIndex + 26;
        message += alphabet[newIndex];
      } else {
        message += alphabet[newIndex];
      } 
    }
    return message;
    
    }
    





module.exports =  caesar ;
