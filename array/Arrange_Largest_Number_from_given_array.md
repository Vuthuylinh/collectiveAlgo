# Prompt
Given a list of non-negative integers nums, arrange them such that they form the largest number.
Note: The result may be very large, so you need to return a string instead of an integer.
# Example:
#### Example 1:

Input: nums = [10,2]
Output: "210"

#### Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
#### Example 3:

Input: nums = [1]
Output: "1"
#### Example 4:

Input: nums = [10]
Output: "10"
#### Approach
- First, we convert each integer to a string. Then, we sort the array of strings.

- Once the array is sorted, the most "signficant" number will be at the front. There is a minor edge case that comes up when the array consists of only zeroes, so if the most significant number is 00, we can simply return 00. Otherwise, we build a string out of the sorted array and return it
  #### Solution
  ```js
    var largestNumber = function(nums) {
  nums = nums.sort(compare)
      if (parseInt(nums) === 0) {
          return '0';
      } else {
          return nums.toString().split(",").join("")
      }
  }
  function compare(a,b){
          var ab = a.toString() + b.toString();
          var ba = b.toString() + a.toString();
          return ba - ab;
      };

  ```
