# John Venn
### Promt
Write a program that accepts two set of alpha-mumeric characters and performs an efficient matching between them. Finally, display the results.
The intent of this challenge is to play with set theory. Avoid using pre-built framwork functions that perform this work in a single line of code. Instead, illustrate how yo would efficiently operate with two sets of data when trying to match the values between them.
There are many ways to approach this algorithm so be creative.

- Input: Two lines of input, each with a space-delimited series of values that represent the two sets.
For example:
```js
  - 1 2 3 A B C
  - X 11 G M 2 9 3 C N R

```
- Output: the set of values that exits in both input sets, sortd alpha-numerically. For example: 2 3 C
  If no common output values exits, ouput `NULL`
- Test 1:
 ```js
  1 2 3 A B C
  X 11 G M 2 9 3 C N R
  -> 2 3 C
 ```
- Test 2:
`6 0 2 4 7 1 8 9 5`
`A1 3 G DOG 18 3 9 E BIRD ONE 5 U`
-> output: `3 5 9`
- Test 3:
  `1 2 3 4 5 6 7 8 9 0`
  `A B G J D K H`
  output: `NULL`

#  Approach :
- turn 2 input string into 2 array
- initialize a empty set=[] => hold distinct char from the str1
- iterate str1 => fill the set
- initilize an array to keep the common char between 2 string
- iterate the str2
    + check if the set.has the char in str2 && commonArray not include current char?
        yes => common array add the common char

  return the common array
# Solution

```js
function find_Matching_Set(s1,s2){
  let str1=s1.split(" ")
  let str2=s2.split(" ")
  let set1 = new Set()
  for(let i=0; i<str1.length; i++){
    let char=str1[i]
    if(!set1.has(char)){
      set1.add(char)
      console.log("set1: ",set1)
    }
  }
  let commonSet= []
  for(let j=0; j<str2.length; j++){
    let element=str2[j]
    if(set1.has(element) && !commonSet.includes(element) ){
      commonSet.push(str2[j])
      console.log("common: ",commonSet)
    }
  }
  if(commonSet.length>0){
  return commonSet.join(" ")
  }else{
    return null
  }
}

const str1="6 0 2 4 7 1 8 3 9 5"
const str2 ="A1 3 G DOG 18 3 9 E BIRD ONE 5 U"

console.log(find_Matching_Set(str1,str2));
```

