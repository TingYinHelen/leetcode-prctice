/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

const listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    }
  }
}

var reversePrint = function(head) {
  const arr = []  
  let temp = head
  while (temp) {
    arr.unshift(temp.val)
    temp = temp.next
  }
  return arr
};

console.log(reversePrint(listNode));

