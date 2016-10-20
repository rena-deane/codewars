function toWeirdCase(string){
  //split strings at ' ' 
  var str = string.split(' ');
  var weirdStr = [];
  //if more than one word
  for (var i = 0; i<str.length; i++){
    var eachWord = str[i];
    var eachStr = [];
  //each letter in a word
          for (var j = 0; j<eachWord.length; j++){
      if (j%2===0){
        var evenLetter = eachWord[j].toUpperCase();
        eachStr.push(evenLetter);
      }
      else{
        var oddLetter = eachWord[j].toLowerCase();
        eachStr.push(oddLetter);
      }      
    }
    eachStr = eachStr.join('');
    weirdStr.push(eachStr);
  }
  var finalStr = weirdStr.join(' ');
  return finalStr;
}
