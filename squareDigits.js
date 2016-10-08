squareDigits = (number) => {
  let numStr = number.toString().split('')
  let arr = ''
  numStr.map((num) => {
    num = Number(num)
    arr += num*num
  })
 
  arr = Number(arr)
  return arr
  
}
