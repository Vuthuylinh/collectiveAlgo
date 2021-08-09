# Inversions
## Prompt:
 - A subsequence is created by deleting zero or more element from a list while maintaining the order.
 - For example, the subsequences of `[1,2,3]` are
`[1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]`.
An inversion is a strictly decreasing subsequence of length 3. More formally, given an array, `p = p[n]` an inversion in the array is any time some `p[i]> p[j]> p[k]` and `i < j < k`.
Determine the number of inversions within a given array

 - Example 1:
    - input = `[5,3,4,2,1]`
    - ouput: 7  -- because we can find 7 invesions:
    ```js
     [5,3,2]
     [5,3,1]
     [5,4,2]
     [5,4,1]
     [5,2,1]
     [3,2,1]
     [4,2,1]
    ```
- Example 2:
    - input = `[4,2,2,1]`
    - output = 2  -- because we found 1 inversions `[4,2,1]` with 2 instances of indicies: `0,1,3` and indices: `0,2,3`
    - NOTE: `[2,2,1]` is not an inversion

## Aproach 1 - Brute force: use 3 pointers
 - initialize result count = 0
 - 1st loop iterate the input array from index i =0 to length-2 (pointer1)
 - 2nd loop iterate the input array from index j = i+1 to length -1 (pointer2)
 - if input[j]>input[i] -> do 3rd loop
 - 3rd loop iterate the input array from index k = j+1 to length (pointer3)
 - if input[k]>input[j] -> count ++

 - => return count
  ### Solution 1: Brute force
  - Time complexity of this approach is : O(n^3)
    ```js
    function countInversions(input){
    let count =0
    let n = input.length
    for(let i=0; i< n-2; i++){
      for(let j=i+1; j<n-1; j++){
        if(input[i]>input[j]){
          for(let k=j+1; k<n; k++){
            if(input[j]>input[k]){
              count++
            }
          }
        }
      }
    }
    return count
    }

    let array1 = [4,2,2,1]
    let result = countInversions(array1)
    console.log(result)
    ```

## Approach 2:
 - Initialize count = 0
 - Iterate the input array from index i =1 to end -1 (current element - middle pointer)
 -  Count all smaller elements on the right side of the current element
    - initialize the countSmall = 0
    - iterate the input array from index j = i+ 1 to end (right element)
    - if current > right => countSmall ++
 - Count all the greater element on the left side of the current element
    - initialize the countGreater =0
    - iterate the input array backward - toward the left from index k = i-1 (left element)
    - if left>current => countGreater++
- Count all the inversions can be created with current element
    - let `countCurrent = countSmall *countGreater`
- Update the total count after each outer loop:
       `count += countCurrent`
 - Time Complexity of this approach : O(n^2)

```js
  function countInversions(input){
  let count =0
  let n = input.length
  for(let i=1; i<n-1; i++){
    let current = input[i]

    let countSmall = 0;
    for(let j= i+1; j<n; j++){
      let rightNum= input[j]
      if(current > rightNum){
        countSmall++
      }
    }

    let countGreater=0
    for(let k =i-1; k>=0; k--){
      let leftNum =input[k]
      if(leftNum>current){
        countGreater++
      }
    }
    let currentCount = countSmall * countGreater
    count += currentCount

  }
  return count
  }

  let array1 = [9, 6, 4, 5, 8]
  let result = countInversions(array1)
  console.log(result)
```
