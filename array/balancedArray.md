# Balanced Array
### Prompt:
Given an array of numbers, find the index of the smallest array elemement(the pivot), for which the sums of all elements to the left and to the right are equal. The array may not be reordered.

### Example:
- array=[1,2,3,4,6]
- output: 4
- Explanation: leftsum= 1+2+3 =6 ; rightsum=6 => 4 is the balanced point
# Solution:
```js
 function balancedArr(arr){
   let sum=0
   for(let num of arr){
     sum+=num
   }
   let leftSum=0
   for(let i=0; i<arr.length; i++){
     sum=sum-arr[i]
     if(letfsum===sum){
       return i
     }
     leftsum+=arr[i]
   }
   return -1
 }
```
