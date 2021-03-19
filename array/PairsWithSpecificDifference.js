/*
Given an array (arr) of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x-y =k. If no such pairs exist, return an empty array.
Node the order if the pairs in the output array should maintain the order of y element in the original array.

Example:
input: arr = [0, -1, -2, 2, 1], k = 1
output: [[1,0],[0, -1], [-1, -2], [2, 1]]

Approach:
arr = [0, -1, -2, 2, 1], k = 1
       ^

x-y =k  => y=x-k; x= arr[i] => y = arr[i]-k

- set{} -> save the y: index
- array -> hold result

1st loop to get set[y]
2nd loop to check if set[y]=arr[i]?

*/


function findPairsWithGivenDifference(arr, k) {
  let set = {}
  let output =[]

  for(let i=0; i<arr.length; i++){
    let y = arr[i] - k
    set[y] = arr[i]
  }

  for(let i =0; i<arr.length; i++ ){
     if(set.hasOwnProperty(arr[i])){
        let pair =[arr[i]+k, arr[i]]

         output.push(pair)

        }
  }
  return output
 }
