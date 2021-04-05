# Remove duplicated Node in Linked list
## Prompt
  Given a list of intergers, remove and any nodes that have value that previously occurred in the list and return a reference to the head of the list

## Example:
  - Example1
    - input: Linkedlist [3->4->3->6]
    - output: Linkedlist [3->4->6]
  - Example2:
    - input: Linkedlist: [3->4->3->2->6->1->2->6]
    - output: Linkedlist: [3->4->2->6->1]
## Approach & Solution

### 1. Approach & Solution for unsorted linkedlist:
#### Approach:
 - Use a set to keep all unique node
 - Iterates the input linkedlist (while loop) to check if the current node exist in the set or not
   - Keep track of current node and previous node/last node after each update
   - If the current node is not in the set => `set[current]=true`
   - If set includes the current node =>  remove the node / change the next pointer of the previous node to the current.next
- return the linkedlist after finish the loop

#### Solution:
```js
 class LinkedList {
   constructor(val){
     this.value = value;
     this.next =null
   }
 }

 function removeDuplicatedNode (linkedList){
   let lastNode = linkedList
   let set ={}
   set[lastNode.value]=true
   let currentNode = lastNode.next
   while(currentNode!==null){
     if(set[currentNode.value]){
       lastNode.next = currentNode.next
     }else{
       set[currentNode.value]=true
       lastNode = currentNode
     }
     currentNode = currentNode.next
   }
   return linkedList
 }
```
