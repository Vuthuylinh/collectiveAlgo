# Get all permutaions of a given string

## Prompt:
  Implement a function that gets all permutations or orderings of a given string. For example if the input is ‘abc’, the output should be [‘abc’, ‘acb’, ‘cab’, ‘cba’, ‘bca’, ‘bac’].

## Approach:
- Use recursion because we don't know how large is the string will be.
```js
permutations(abc) = a + permutations(bc) +
                    b + permutations(ac) +
                    c + permutations(ab)
permutations(ab) = a + permutations(b) +
                   b + permutations(a)
permutations(a) = a
```
#### Pseudocode
 - initialize an array to keep result =[]
 - if input is an empty string => return []
 - if input is a single character string => array.push(string)
 - if input is a string >=2 chars
    - define the current char
    - define an innerPermutaions as a char of string
    - set innerPermutations to getAllPermutations without current char
    - for each string in innerPermutations push current char + innerPermutations char


### Solution Time O(n!)| Space O(n!) - factorial n

```js
function getAllPermutations(str){
  if(str.length ===0) return []
  if(str.length ===1) return [str]
  if (str.length ===2) return[str,str[1],str[0]]
  let result =[]
  for(let i=0; i< str.length; i++){
    let currentChar = str[i]
    let remainningChars = str.substring(0,i) + str.substring(i+1)
    let innerPermutations = getAllPermutations(remainningChars)
    for(let j=0; j< innerPermutation.length; j++){
       result.push(currentChar+innerPermutations[j])
    }
  }
  return result
}
```
