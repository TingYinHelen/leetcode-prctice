/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                },
            }
        }
    }
};


// const head = {
//     val: 1,
//     next: null,
// }

const n = 2;


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     const dummy = new ListNode(0)
//     dummy.next = head
    
//     let l = dummy
//     let r = dummy
//     let offset = n + 1
  
//     while (offset--) {
//       r = r.next;
//     }
  
//     while (r) {
//       r = r.next
//       l = l.next
//     }

    
  
//     l.next = l.next.next
//     return dummy.next
//   }

// var removeNthFromEnd = function(head, n) {
//     const dummy = new ListNode(0);
//     dummy.next = head;

//     let l = dummy;
//     let r = dummy;

//     let offset = n;

//     while (offset--) {
//       r = r.next;
//     }

//     while (r.next) {
//       l = l.next;
//       r = r.next;
//     }

//     l.next = l.next.next;

//     return dummy.next;
// }



// const head = {
//     val: 1,
//     next: null,
// }
// dummy = {
//     val: 0,
//     next: {
//         val: 1,
//         next: null,
//     }
// }


var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0); 
    dummy.next = head;

    let l = dummy;
    let r = dummy;
    let i = 0;

    while (r.next) {
        i++;
        if (i > n) {
            l = l.next;
        }
        r = r.next;
    }
    

    l.next = l.next.next;
    return dummy.next;
}

// 书香

var removeNthFromEnd = function(head, n) {
    let node = head;
    let length = 0;
    while(node) {
        node = node.next;
        length++;
    }
    node = head;
    if(n === length) return head.next;
    for(let i = 0; i< length - n -1; i++) {
        node=node.next;
    }
    node.next=node.next.next
    
    return head;
};

console.log(JSON.stringify(removeNthFromEnd(head, 2)));