/*
String search - Create method: indexOf
Create a function that attempts to find the index of the first appearance of one string(the needle) inside of another(the haystack)
If the substring exists, return the beginning index of the subsring.
Otherwise, return -1.
You are essentually recreating the built-in string method indexOf()

Constraint: Not using the built-in methods:
 indexOf(), includes(), substring() and string.plit()

Example:
              needle    haystack
stringSearch('or', 'hello world'); // should return 7

stringSearch('hello world', 'or'); // should return -1

Approach:
  use nested loops
  -outer loop: iterate through all value in the haystack
  -inner loop: iterate through all the value in the needle (potential substring)
  - if the current value in the haystack match the first value of the needle
     -> check if the subsequent value in the needle and the haystack matches or not?
       -> if any subsequent value doesn't match, break the inner loop
  - if we've checked all the value in the needle and make sure they match
   -> we found the substring
     -> return the current index of the outer loop
  - if we exist the outer loop without any matches
    -> No substring -> return -1

*/
//Solution1: Use 2 for loops

const stringSearch =(needle, haystack)=>{
  for(let i=0; i<haystack.length;i++){
     for(let j=0; j<needle.length; j++){
       if(haystack[i+j]!== needle[j]) break;
       if(j+1 === needle.length) return i
     }
  }
  return -1
}


//Solution2: outer for loop, inner while loop

const stringSearch2 =(needle, haystack){

  let needlePointer =0
  for(let i=0;i<haystack.length; i++){
    let haystackPointer =i
    while(needle[needlePointer]===haystack[haystackPointer]){
      haystackPointer++
      needlePointer++
      if(needlePointer === needle.length) return i
    }
    needlePointer=0
  }
  return -1
}
