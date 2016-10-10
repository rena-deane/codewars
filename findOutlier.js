function findOutlier(integers) {  
  const odd = []
  const even = []
  let outlier = 0
  
  for(var i = 0; i < 3; i++){
    if (integers[i] %2 != 0) {
     odd.push(integers[i])
    } else {
        even.push(integers[i])
      }
  }
  
  if (even.length > odd.length ) {
    integers.map(integer => {
      if (integer %2 != 0) {
        outlier += integer
      }
    })
  } else {
      integers.map(integer => {
        if (integer %2 === 0) {
          outlier += integer
        }
      })
    }
    
   return outlier
}
