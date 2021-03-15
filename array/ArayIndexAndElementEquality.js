/*
Given a sorted array (arr) of distinct integers, write a function indexEqualsValueSearch tha returns the lowesr index i for which arr[i]===i. Return -1 if there is no such index.
Analize the time and space complexities of your solution and explain its correctness

*/
/*
 input: array
            distinct integers
 return: number
              index i: where arr[i] ===i


Example:  arr = [-8,0,2,5]
                      ^
  i=0, arr[0]=8
  i =1, arr[1]=0
  i =2, arr[2]=2 => return 2

  Approach:
   iterate the input arr, compare arr[i]?i -> return i / -1
*/

function indexEqualsValueSearch(arr){
  for(let i=0; i<arr.length; i++){
    if(i===arr[i]){
      return i
    }
  }
  return -1
}



