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
    //when encode is true
    let result =[] 
    let newArr = []
    let decodeResult = []
    if(encode === true){
    for(let i = 0; i<input.length; i++){
      let letter = input[i].toLowerCase();
      if(letter === ' '){
        result.push(" ")
      }
      if(letter === 'a'){
        result.push(11)
      }
      if(letter==='b'){
        result.push(21)
      }
      if(letter==="c"){
        result.push(31)
      }
      if(letter==="d"){
        result.push(41)
      }
      if(letter==="e"){
        result.push(51)
      }
      if(letter==="f"){
        result.push(12)
      }
      if(letter==="g"){
        result.push(22)
      }
      if(letter==="h"){
        result.push(32)
      }
      if(letter==="i"){
        result.push(42)
      }
      if(letter==="j"){
        result.push(42)
      }
      if(letter==="k"){
        result.push(52)
      }
      if(letter==="l"){
        result.push(13)
      }
      if(letter==="m"){
        result.push(23)
      }
      if(letter==="n"){
        result.push(33)
      }
      if(letter==="o"){
        result.push(43)
      }
      if(letter==="p"){
        result.push(53)
      }
      if(letter==="q"){
        result.push(14)
      }
      if(letter==="r"){
        result.push(24)
      }
      if(letter==="s"){
        result.push(34)
      }
      if(letter==="t"){
        result.push(44)
      }
      if(letter==="u"){
        result.push(54)
      }
      if(letter==="v"){
        result.push(15)
      }
      if(letter==="w"){
        result.push(25)
      }
      if(letter==="x"){
        result.push(35)
      }
      if(letter==="y"){
        result.push(45)
      }
      if(letter==="z"){
        result.push(55)
      }
    }
    finalResult = result.join('')
    console.log(finalResult)
    return finalResult
    }
    //when encode is false
    if(encode === false){
      if(((input.length - input.split(" ").length - 1) % 2 != 0)){
        console.log(false)
        return false
      }
      for (let i = 0; i<input.length; i++){
        if(input.charAt([i], [i]+1)!== " "){
    newArr.push(input.charAt([i])+input.charAt([i+1]))
    
        }
        if(input.charAt([i])=== " "){
          newArr.push(" ", " ")
        }
      }
      for (let i=0; i<newArr.length; i+=2){
    decodeResult.push(newArr[i])
      }
    
    for (let i=0; i<decodeResult.length; i++){
    if(decodeResult[i] === " "){
      result.push(' ')
    }
    
    if (decodeResult[i] !== " "){
      let letter = parseInt(decodeResult[i])
      if(letter === "undefined"){
        console.log("here i am")
        result.push(" ")
      }
      if(letter === 11){
        result.push("a")
      }
      if(letter=== 21){
        result.push("b")
      }
      if(letter===31){
        result.push("c")
      }
      if(letter===41){
        result.push("d")
      }
      if(letter===51){
        result.push("e")
      }
      if(letter===12){
        result.push("f")
      }
      if(letter===22){
        result.push("g")
      }
      if(letter===32){
        result.push("h")
      }
      if(letter===42){
        result.push("(i/j)")
      }
      if(letter===52){
        result.push("k")
      }
      if(letter===13){
        result.push("l")
      }
      if(letter===23){
        result.push("m")
      }
      if(letter===33){
        result.push("n")
      }
      if(letter===43){
        result.push("o")
      }
      if(letter===53){
        result.push("p")
      }
      if(letter===14){
        result.push("q")
      }
      if(letter===24){
        result.push("r")
      }
      if(letter===34){
        result.push("s")
      }
      if(letter===44){
        result.push("t")
      }
      if(letter===54){
        result.push("u")
      }
      if(letter===15){
        result.push("v")
      }
      if(letter===25){
        result.push("w")
      }
      if(letter===35){
        result.push("x")
      }
      if(letter===45){
        result.push("y")
      }
      if(letter===55){
        result.push("z")
      } 
    }
    }
    console.log(result.join(""))
    return result.join("")
    }
    
  }



module.exports = polybius 
