# Reverse Array
## Prompt
  Given an array of integers, reverse the input array
## Solution
### Solution 1: create a new array - loop in reverse order

```js
function reverseArray(array){
  let newArray =[]
  for(let i=array.length-1; i>=0; i--){
    newArray.push(array[i])
  }
  return newArray
}

```
### Solution 2: reverse array in place - not create more array
 - use while loop and 2 pointers left -right move toward middle point

```js
function swap(left,right,array){
let temp= array[left]
  array[left] = array[right]
  array[right] = temp
}

function reverseArray(array){
  let left = 0;
  let right = array.length-1;
  while(left<right){
    swap(left,right,array)
     left++
     right--
  }
  return array
}

Example:
let arr =[10,0,1,2,3,4,5]
let result = reverseArray(arr)
console.log(result) // [5, 4,  3, 2,1, 0, 10 ]
```
