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


