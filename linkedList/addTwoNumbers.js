/*
You are given 2 non-empty linked list representing two non-negative intergers. The digists are stored in reverse order; and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list
you may assume the two numbers do not contain any leading zero, exept the number 0 itself.

Example:
  num1: 234 -> list1: 4->3->2
  num2: 591 -> list2: 1->9->5

result: 825 -> output : 8 ->2 -> 5

class ListNode{
  constructor(val){
  this.value = val
  this.next = null
  }

}


Approach:
 - pointer1 = list1
 - pointer2 = list2
 - let headPointer = new ListNode()
 let head = headPointer
 let carry=0
 while(pointer1!==null || pointer2 !==null){
   let val1 = pointer1 ===null? 0 : pointer1.val
   let val2 = pointer2 ===null? 0 : pointer2.val
   let sum = val1+val2+carry
   if(sum>9){
     carry =1
   }else{
     carry =0
   }
   headPointer.next = new ListNode(sum%10);
   headPointer = headPointer.next
   pointer1 =pointer1 ===null? null : pointer1.next
   pointer2 = pointer2 ===null? null : pointer2.next
 }
 if(carry> 0){
   headPointer.next = new ListNode(carry)
 }

 return head.next
};


*/
