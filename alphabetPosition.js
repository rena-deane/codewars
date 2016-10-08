alphabetPosition = (text) => {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ,'k' ,'l' ,'m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let str = text.toLowerCase().split('')
  
  let newStr = []
  
  str.forEach((char) => {
    if(alphabet.includes(char) && /[a-z]/.test(char)) {
      newStr.push(alphabet.indexOf(char) + 1)
    }
  })
  return newStr.join(' ')
}
