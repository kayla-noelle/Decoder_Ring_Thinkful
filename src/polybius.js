// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  return {
    polybius,
  };
})();
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    let message = "";
    const lowerMessage = input.toLowerCase();
    let polyValues = { a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j:42, k:52, l:13, m:23, n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55, [' ']: " " }
    const letter = Object.keys(polyValues);
    const number = Object.values(polyValues);

    if (encode === true) {
      for (let i = 0; i < lowerMessage.length; i++) {
        const currentLetter = lowerMessage[i];
        const getIndexOfKey = letter.indexOf(currentLetter);
        const getNumFromValues = number[getIndexOfKey];

        if (letter.includes(currentLetter)) {
          message += getNumFromValues;
        } else {
          message += currentLetter;
        }
      }
    } else { // if encode === false
      // remove spaces and check if amount of numbers is odd
      // and if so return false
      const newInput = input.replace(/\s+/g, '');
      if ((newInput.length % 2) !== 0) {
        return false
      }

      for (let i = 0; i < lowerMessage.length; i = i + 2) {
        const currentLetter = lowerMessage[i];
        const nextChar = lowerMessage[i+1];
        const totalChar = `${currentLetter}${nextChar}`
        const totalCharNum = Number(totalChar)

        if (currentLetter === ' ') {
          // if there is a space, we only want to iterate once (instead of twice) to skip the space and have the next number be currentChar
          i = i - 1;
          message += ' ';
        } else if (totalCharNum === 42) {
          message += '(i/j)';
        } else {
          const index = number.indexOf(totalCharNum);
          const indexedAlphabet = letter[index];
          message += indexedAlphabet;
        }
      }
    } 
    return message;
  }
    



module.exports = polybius 
