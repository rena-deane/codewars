var Harshad = ( function() {
  'use strict'

  return {
    isValid: function( number ) {
      const strNumber = number.toString()
      const arrNumber = strNumber.split('')
      let sum = 0
      
      arrNumber.map(num => {
        sum += Number(num)
      })
      
      const isValid = number % sum == 0 ? true : false
      return isValid
    },

    getNext: function( number ) {
      let num = number + 1
      
      if (Harshad.isValid(num)) {
        return num
      }
      
      return Harshad.getNext(num)
      
    },
    
    getSerie: function(count, start) {
      let arrNum = []

      
      if (start !== undefined) {
        let next = start
        for (var i = 0; i < count; i++) {
          let valid = Harshad.getNext(next)

          arrNum.push(valid)
          next = valid
        }
      } else {
          let next = 0
          for (var i = 0; i < count; i++) {
            let valid = Harshad.getNext(next)
            
            arrNum.push(valid)
            next = valid
          }
        }
      
      return arrNum
    }
  }

} () )
