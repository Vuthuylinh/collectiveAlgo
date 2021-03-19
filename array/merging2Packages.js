/*
 Given a package with a weight limit - limit
 and an array (arr) of item weights, implement a function getIndicesOfItemWeights that finds two items who sum of weights equals the weight limit (limit).
 Your fucntion should return a pair [i,j] of the indicies of the items weights, orsers such that i>j.
 If such a pair doesn't exist, reutrn an empty array.

 Analize the time and space complexity


 Approach:
  1/ iterate to create the map with value and index
  2/ iterate to see if the remainder of limit -each weight in the map?
  find the pair =
*/

let set ={}
    for(let i=0; i<nums.length; i++){
        let remainder =target-nums[i]
        if(set[remainder]){
            return [set[remainder],i]
        }else{
            set[nums[i]] =i
        }
    }
    return []
