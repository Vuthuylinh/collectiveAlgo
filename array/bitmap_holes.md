# Prompt
 Using the JavaScript language, have the function BitmapHoles(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:
# Example:
// 1 0 1 1 1
// 1 0 1 0 1
// 1 1 1 0 1
// 1 1 1 1 1

// For the input above, your program should return 2 because there are two separate contiguous regions of 0's, which create "holes" in the matrix. You can assume the input will not be empty.

// Input:"01111", "01101", "00011", "11110"
// Output:3

// Input:"1011", "0010"
// Output:2

# Solution
```js
function BitmapHoles(strArr) {
  let bitmap = strArr.map(a => a.split(''));
  console.log(bitmap)
  let count = 2;

  for(let i = 0; i < bitmap.length; i++) { // rows
    for(let j = 0; j < bitmap[i].length; j++) { // cols
      if(bitmap[i][j] === "0") {
        coverHole(bitmap, i, j, count++);
      }
    }
  }
  return count - 2;
}



function coverHole(bitmap, i, j, number){
  bitmap[i][j] = number;
  if (+bitmap[i][j-1] === 0) {
      bitmap[i][j-1] = number;
      coverHole(bitmap, i, j-1, number);
  }
  if (+bitmap[i][j+1] === 0) {
      bitmap[i][j+1]= number;
      coverHole(bitmap, i, j+1, number);
  }
  if(bitmap[i-1] !== undefined && +bitmap[i-1][j] === 0) {
      bitmap[i-1][j]= number;
      coverHole(bitmap, i-1, j, number);
  }
  if(bitmap[i+1] !== undefined && +bitmap[i+1][j] === 0) {
      bitmap[i+1][j]= number;
      coverHole(bitmap, i+1, j, number);
  }
  return;
}

BitmapHoles(["1011", "0010"])
```

