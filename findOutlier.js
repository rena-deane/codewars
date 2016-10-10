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

/* Best Practice Solution :) I knew you could use filter this way so why didn't I do that :/
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
*/

