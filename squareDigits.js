squareDigits = (num) => {
  let splitNum = num.toString().split('')
  let arr = ''
  splitNum.map((num) => arr += Number(num)*Number(num))
  return Number(arr)  
}
