# Find Kth Largest Value in BST

### Prompt
Write a function that takes in a Binary Search Tree (BST) and a positive integer k and returns the kth largest integer contained in the BST.
You can assume that there will be only integer values on the BST and that k is less than or equal to the number of the nodes in the tree.
ALso, for the purpose of this question, duplicate integers will be treet as sidtinct values. In other words, the second largest value in a BST containning values [5,7,7] will be 7; not 5.

Each node has an integer value, a left child node and a right child node. A node is said to be valid BST node if and only if it satisfies the BST property: its value is strictly greater than values of every node to its left; it value is less than or equal to the values of every node to its right; and its children node are either BST nodes themselves or None/Null.

### Sample:
 ```js
- tree =        15
              /    \
            5       20
          /  \      / \
         2    5    17  22
        / \
       1   3
- k=3
- output: 17

 ```
### Approach 1: - Brute force

- Traverse `in-order` the input BST: => get sorted array
- the Kth largest element is the Kth element if we iterate sorted array from the end.

### Solution 1:

```js

class BST {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraverse(bst)
```
