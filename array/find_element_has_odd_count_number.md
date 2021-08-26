
# Prompt
 Find the list of numbers that if it appears odd times in the given array.
# Approach
 - Check frequency
 - use object to keep key: value
 - Example:
      - input=>[1,2,3,1,2,2,3,1,4]
      - output=>[1,2,4]
 - memo ={};- iterate the input array to see if memo has the element or not?
     - has: memo[element]+=1;
     - no: memo[element]
     - memo: {1: 3,
      2: 3,
      3: 2,
      4: 1
      }
    - for (let key in memo)
     {  if(memo[key]%2!=0){
   result.push(key)
   }

-----
# Solution
```js
function oddTotal(array){
  let memo ={};
  let result =[]
  for(let i=0; i<array.length; i++){
    if(!memo[array[i]]){
      memo[array[i]]=1
    }else{
      memo[array[i]]+=1
    }
  }
  for(let key in memo){
    if(memo[key]%2 !=0){
      result.push(key)
    }
  }
  return result
}

let array = [1,2,3,1,2,2,3,1,4];
console.log(oddTotal(array))
```
