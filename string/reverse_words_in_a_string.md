# Reverse words in a string
# Prompt:
Given an input string s, reverse the order of the words
A word is defined as a sequence of non-space characters. the words in string will be separated by at least one space
Return a string of words in reverse order concatenated by a single space.
# Example
input: `I love coffee`
output: `coffee love I`
# Approach for string with single space between 2 words
1. Approach1:

- split input string into anrray => ['I', 'love', 'coffee']
- revert the array
- initialize a stringResult=""
- add up the word along when iterate the array backward

2. Approach2:
build in function of javScript
 in js : reduce function


```js
function reverseStr(str){
  let result=[];
//split st into array
let array= str.split(" ");
for(let i=array.length-1; i>=0; i--){
result.push(array[i]);
}
let strResult=result.join(" ")

  return strResult
}



let input= 'I love coffee'
let output=reverseStr(input)
console.log(output)

```

