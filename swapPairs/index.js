/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}
var swapPairs = function(head) {
    swap(head);
    function swap(head) {
        if (head !== null && head.next !== null) {
            let tmp = head.val;
            head.val = head.next.val;
            head.next.val = tmp;
            swap(head.next.next);
        }
    }
    return head;
};
console.log('result:', JSON.stringify(swapPairs(head)));
