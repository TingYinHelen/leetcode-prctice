/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// const head = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 3,
//                 next: {
//                     val: 4,
//                     next: {
//                         val: 4,
//                         next: {
//                             val: 5,
//                             next: null
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// const head = {
//     val: 1,
//     next: {
//         val: 1,
//         next: {
//             val: 1,
//             next: {
//                 val: 2,
//                 next: {
//                     val: 3,
//                     next: null,
//                 }
//             }
//         }
//     }
// };

const head = {
    val: 1,
    next: {
        val: 1,
        next: null,
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {

    let dummy = new ListNode(0);
    dummy.next = head;
    
    let l = dummy;
    let r = dummy.next;
    
    while (r && r.next) {
        if (l.next.val === r.next.val) {
            while (l.next.val === r.next.val) {
                r = r.next;
                if (!r.next) break;
            }
            l.next = r.next;
        } else {
            l = l.next;
        }
        r = r.next;
    }
    return dummy.next;
};



console.log('result', JSON.stringify(deleteDuplicates(head)));