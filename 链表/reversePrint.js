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

// 方法一：栈
// 栈的特点是后进先出，最后压入栈的元素最先弹出，考虑到这一点，可以使用栈将链表元素顺序倒置
// 从链表的头节点开始，一次将每个节点压入栈内，然后一次弹出栈的元素，并存储到数组中

