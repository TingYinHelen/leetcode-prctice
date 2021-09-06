/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

var isSubStructure = function(A, B) {
    if (B === null || A === null) {
        return false;
    }
    const dfs = (nodeA, nodeB) => {
        if (!nodeB) {
            return true;
        }
        if (!nodeA) {
            return false;
        }
        if (nodeA.val === nodeB.val) {
            return dfs(nodeA.left, nodeB.left) && dfs(nodeA.right, nodeB.right);
        }
        return false;
    }
    // console.log('dfs(A, B)====', dfs(A, B));
    return (A && B) && (dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};

// if (!B) {
//     return false;
// }
// const recur = (nodeA, nodeB) => {
//     if (!nodeB) {
//         return true;
//     }
//     if (!nodeA || nodeA.val !== nodeB.val) {
//         return false;
//     }
//     return recur(nodeA.left, nodeB.left) && recur(nodeA.right, nodeA.right);
// }
// return (B && A) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));

// [3,5,0,3,4]
// [1,-4,2,-1,3,-3,-4,0,-3,-1]

const A = {
    val: -2,
    left: {
        val: 1,
    },
}
const B = {
    val: -2,
    left: {
        val: 1,
    },
    right: {
        val: -2,
    },
};
console.log('============', isSubStructure(A.left, B));
