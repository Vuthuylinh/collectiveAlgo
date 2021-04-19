# Determine Color of a Chessboard Square
## Prompt
- You are given coordinates, a string that represents the coordinates of a square of the chessboard
Return true if the square is white, and false if the square is black.

- The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

- Link: https://leetcode.com/problems/determine-color-of-a-chessboard-square/

## Example:
#### Example 1:

Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.
#### Example 2:

Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.
#### Example 3:

Input: coordinates = "c7"
Output: false


# Solution :

```js
var squareIsWhite = function(coordinates) {
    let values = coordinates.split("")
    let obj = {
        "a": 0,
        "b": 1,
        "c": 2,
        "d": 3,
        "e": 4,
        "f": 5,
        "g": 6,
        "h": 7
    }
    let value = obj[values[0]] + parseInt(values[1])
    return isEven(value)
};

var isEven = num => {
    return num % 2 === 0
}

```
