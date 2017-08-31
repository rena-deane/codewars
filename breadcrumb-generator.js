function generateBC(url, separator) {
//ignote these words if > 30 char
  let ignore = ["A", "THE","OF","IN", "WITH","AND", "OR", "FOR", "TO", "AT", "FROM","BY"]
  let crumbs = []
  let ref = ['<a href="','">', '</a>', '<span class="active">', '</span>'];
  //seperate url from '/'
  let arr = url.split("/")
  
  arr[arr.length-1].includes("index") ? arr.pop() : arr
  console.log("arr1", arr)
  arr[0].includes("http") ? arr.shift() : arr
  console.log("arr2", arr)
  arr = arr.filter(item => item.length > 0)
  console.log("arr3", arr)
  
  let breadcrumb = arr.map(function(array, index){
	  if (array.includes("?")){ array = array.slice(0, array.lastIndexOf("?")); }
	  if (array.includes("#")){ array = array.slice(0, array.lastIndexOf("#")); }
	  if (array.includes(".")){ array = array.slice(0, array.lastIndexOf(".")); }
	  
    let name = (index === 0) ? "HOME" : array.toUpperCase();
    
    if (index === 0) { 
      str = "/" 
    } else { 
        crumbs.push(array); 
        str = "/" + crumbs.join("/") + "/" 
      }
    
    //ignore words
 		if (name.length > 30 && name.includes("-"))	{ 
      name = name.split("-").map(function(string) { if (ignore.indexOf(string) < 0) return string[0] }).join("")
    } else if (name.length <= 30 && name.includes("-"))	{	
        name = name.split("-").join(" ") 
      }
		
    if (index ==  arr.length-1)	{ 
      return (ref[3] + name + ref[4]); 
    } else {
        return (ref[0] +  str + ref[1] + name + ref[2]);
      }
  });
  
  return breadcrumb.join(separator);
}
