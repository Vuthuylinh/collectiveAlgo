/*
Two string are anagrams if they are permutations of each other. In other words, both strings have same size and the same characters. For example, "aaagmnrs" is an anagram of "anagrams". Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

-> input: array of strings
-> output: array of string - remove anagram and sorted.

Example:
 str =['code', 'deco', 'ecod', 'farmer', 'frames']

 -> result =["code", "farmer", "frames"]

 Approach:
  - create set object/hash table to keep uique text
  - if text does not exist in set
  => put in set, push in array
  => if exist, don't do anything
  result is array.sort()
*/

function findListAnagrams(textArr){
  let set ={}
  let resultArr=[]
  for(let i=0; i<textArr.length; i++){
    let text = textArr[i].split("").sort()
    if(!set[text]){
      set[textArr[i]]=true
      resultArr.push(textArr[i])
    }
  }
  return resultArr.sort()
}
