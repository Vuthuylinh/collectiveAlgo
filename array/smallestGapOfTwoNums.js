/*
Smallest Gap set
Given an array of integers
find 2 numbers from the given array which have smallest gap
Example:
Input: [32,71,12,45,26,80,34,43]
Output: [32,34]

Edge case: empty? => no
           1 element ? => no
          >2 elements? yes
          input contains all distinct nums ? => debatable
          ?how many set have the same smallest gap? 1 set
Approach:
- sort the input array => [12,26,32,34,43,45,71,80]
- initialize a minGap (minGap) = input[1]- input[0]
- initialize minIndex
- iterate the sorted input
   currentGap = input[i+1] - input[i]
   minGap > currentGap ?(yes)=> minGap = currentGap
                             => minIndex =i
finish the loop => return [input[minIndex], input[minIndex+1]]
*/

function findSmallestGapSet(arr){
  arr.sort((a,b)=>a-b)
 let minGap =arr[1]-arr[0]
 let minIndex =0
 for(let i=0; i<arr.length-1; i++){
   let currentGap = arr[i+1]-arr[i]
   if(currentGap<minGap){
     minGap =currentGap
     minIndex = i
   }
 }
return [arr[minIndex], arr[minIndex+1]]
}

/* ---------------------------------------------------------
In case you can't sort the input array
Or you need to return index of two nums that have smallest gap

=> need to do nested loop
- initilize the array to keep result =[0,0]
- initialize minGap = Math.abs(arr[0]- arr[1])
- outer loop iterate the input array from index 0 -> end
- inner array iterate all element except the current element in outer loop
  -> calculate current gap
  -> compare current gap vs minGap
   if currentGap < minGap => minGap = currentGap
                          => result[0] =i, result[1] =j (get index)
                             result[0] =arr[i], result[1] =arr[j] (get numbers)

*/

function findSmallestGapSetIndices(arr){
  let result =[0,0]
  let minGap = Math.abs(arr[0]-arr[1])
  for(let i =0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(i!==j){
        let currentGap =Math.abs(arr[i]-arr[j])
        if(currentGap < minGap){
          minGap = currentGap
          result[0]=i; result[1]=j //get index
          //result[0]=arr[i]; result[1]=arr[j]  <get index>
        }
      }
    }
  }
  return result
}
