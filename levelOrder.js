/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [root], res = [];
//     while (queue.length > 0) {
//         const node = queue.shift();
//         res.push(node.val);
//         node.left && queue.push(node.left);
//         node.right && queue.push(node.right);
//     }
//     return res;
// };
// var levelOrder = function(root) {
//     if (!root) return [];
//     const queue = [root], res = [];
//     let index = 0;
//     root.index = index;
//     while (queue.length > 0) {
//         const node = queue.shift();
//         if (res[node.index]) {
//             res[node.index].push(node.val);
//         } else {
//             res[node.index] = [node.val];
//         }
//         let i = node.index + 1;
//         if (node.left) {
//             node.left.index = i;
//             queue.push(node.left);
//         }
//         if (node.right) {
//             node.right.index = i;
//             queue.push(node.right);
//         }
//     }
//     return res;
// }

var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root], res = [];
    let isOdd = false;
    while (queue.length > 0) {
        let tmp = [];
        const len = queue.length;
        isOdd = !isOdd;
        for (let i = 0; i < len; i++) {
            const node = isOdd ? queue.shift() : queue.pop();
            tmp.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(tmp);
    }
    return res;
}



const tree = {
    val: 3,
    left: {
        val: 9,
    },
    right: {
        val: 20,
        left: {
            val: 15
        },
        right: {
            val: 7
        }
    }
}
console.log(levelOrder(tree))