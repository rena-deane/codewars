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

// Best practice solution

var Harshad = ( function() {
  'use strict';
  var MAX_SAFE_INTEGER = Math.pow( 2, 53 ) - 1;

  return {
    isValid: function(number) {
      if (number === Infinity) {
        throw new TypeError("null is not an integer");
      }
      if (typeof number != 'number' || Math.floor(number) != number) {
        throw new TypeError(number + " is not an integer");
      }
      if (number < 0 || number > MAX_SAFE_INTEGER) {
        throw new RangeError(number + " is not in the range [ 1, " + MAX_SAFE_INTEGER + " ]");
      }
      var n = number;
      var sumDigits = 0;
      while (n > 0) {
        sumDigits += n % 10;
        n = n / 10 | 0;
      }
      return number % sumDigits == 0;
    },
    getNext: function(number) {
      if (number === Infinity) {
        throw new TypeError("null is not an integer");
      }
      if (typeof number != 'number' || Math.floor(number) != number) {
        throw new TypeError(number + " is not an integer");
      }
      if (number < 0 || number > MAX_SAFE_INTEGER) {
        throw new RangeError(number + " is not in the range [ 0, " + MAX_SAFE_INTEGER + " ]");
      }
      var n = number + 1;
      while (!this.isValid(n)) {
        n++;
      }
      return n;
    },
    getSerie: function(count, start) {
      if (start === undefined) {
        start = 0;
      }
      if (count === Infinity || start == Infinity) {
        throw new TypeError("null is not an integer");
      }
      if (typeof count != 'number' || Math.floor(count) != count) {
        throw new TypeError(count + " is not an integer");
      }
      if (typeof start != 'number' || Math.floor(start) != start) {
        throw new TypeError(start + " is not an integer");
      }
      if (count < 1 || count > MAX_SAFE_INTEGER) {
        throw new RangeError(count + " is not in the range [ 1, " + MAX_SAFE_INTEGER + " ]");
      }
      if (start < 0 || start > MAX_SAFE_INTEGER) {
        throw new RangeError(start + " is not in the range [ 0, " + MAX_SAFE_INTEGER + " ]");
      }
      var result = [];
      while (result.length < count) {
        start = Harshad.getNext(start);
        result.push(start);
      }
      return result;
    }
  };

} () );
