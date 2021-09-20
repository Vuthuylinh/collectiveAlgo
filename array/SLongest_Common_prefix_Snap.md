# Prompt:

Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.
https://leetcode.com/problems/longest-common-prefix/

# Example:

## Example 1:

- input: strs = `["fly", "flow", "flower"]`
- output: `fl`
- Explanation: all element of strs have prefix: 'fl'

## Example 2:

- input: strs=`["dog","cat","ant"]`
- output: ""
- Explanation: all elements don't have the same prefix

# Summary:

- input: array of strings
- output : a string - common prefix or `""`
- constrains: ?
- Questions:
  1. how big is the input size effect?
  2. case sensitive? => all lowercase
  3. input = empty array? => return `""`
  4. what if just a part of input has common prefix, some don't ? => return `""`
  5. Can I sort input? => yes

# Approach

## Approach 1

- find 2 strings that contain the most different by sort input
- after sort, compare characters of the most differen strings
  - firstString = sorted_input[0]
  - lastString = sorted_input[input[length-1]]
- use for loop to iterate firstString and compare

## Approach 2:

- use reduce function to loop through input array,
- compare each pair of string elements of input (currentStr vs nextString)

# Solution

### Solution1:

```js
 funtion findPrefix(strs){
 let result="";
  let sortedStrings= strs.sort()
  let lastIndex= strs.length-1;
  let firstStr= sortedStrings[0]
  let lastStr= sortedStrings[lastIndex];
 for(let i=0; i<firstStr.length; i++){
     if(firstStr[i]!==lastStr[i]){
         break;
     }else{
         result+=firstStr[i]
     }
 }
return result;
 }
```
