/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? null : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSameTree = function(p, q) {
    function bf (p, q) {
        if (!p && !q) {
            return true
        }
        if (p && q) {
            if (p.val === q.val) {
                return bf(p.left, q.left) && bf(p.right, q.right);
            } else {
                return false;
            }
        } else {
            return false
        }
    }

    return bf(p, q);
};
const p = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3
    }
}
const q = {
    val: 1,
    left: {
        val:2
    },
    right: {
        val: 3
    }
}
console.log('[ result ]', isSameTree(p,q));