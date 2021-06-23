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
var levelOrder = function(root) {
    const arr = []
    root.val && arr.push(root.val)
    function bfs (_arr) {
        return _arr
    }
    arr.push(bfs())
};



const root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: { val: 15 },
        right: { val: 7 },
    }
}


console.log('levelOrder(root)====', levelOrder(root))