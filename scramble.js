/* 
Server timed out while running suite.  Hasn't been submitted to codewars yet

Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered 
*/

scramble = (str1, str2) => {
  const arrStr1 = str1.split('')
  const arrStr2 = str2.split('')
  let match = []
  
  arrStr2.map(letter => {
    const matchLetter = arrStr1.indexOf(letter)
    
    if(matchLetter !== -1){
      match.push(letter)
    }
  })
  console.log(match.join(''))
  return match.join('') == str2
}
