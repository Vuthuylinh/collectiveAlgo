/*
Given 2 array of integers (arr1 and arr2) and a target number. Check if arr1 and arr2 contains a couple that add up to the target number

Example:
input:  target = 10
        arr1 = [1,2,3]
        arr2 = [8,6,12]
output: true
        because: arr1 has 2 ; arr2 has 8 ; and 2+8 =10

Approach:
 - iterate the arr1 to find remainders = target - arr1[i]
 - initialize a set ={}
      set keeps all the remainders & arr1[i] as (key : value)
 - iterate the arr2
        check if set has key == arr2[j]
         yes -> return true
         no => return false


*/
let set ={}
function checkCoupleMatchTarget(arr1,arr2,target){
  for(let i =0; i<arr1.length; i++){
      let remainder = target -arr1[i]
      set[remainder]= arr1[i] // we can set[remainder]=true
  }

  for (let j=0; j<arr2.length; j++){
      if(set.hasOwnProperty(arr2[j])){
          return true
      }
      return false
  }

}
