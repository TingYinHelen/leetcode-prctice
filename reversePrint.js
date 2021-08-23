// var reversePrint = function(head) {
//     const arr = [];

//     const getValue = function (obj) {
//         if (obj) {
//             arr.push(obj.val);
//             getValue(obj.next);
//         }
//     }
//     getValue(head);
//     return arr.reverse();
// };
// var reversePrint = function(head) {
//     let curr = head;
//     const stack = [];
//     while (curr) {
//         stack.push(curr)
//         curr = curr.next;
//     }
//     const reverseArr = [];
//     while (stack.length > 0) {
//         reverseArr.push(stack.pop().val);
//     }
//     return reverseArr;
// }
const head = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 2,
        }
    },
}
console.log('result=====', reversePrint(head))
