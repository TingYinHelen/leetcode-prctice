function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = {
    val: 4,
    left: {
        val: 2,
        left: { val: 3 },
        right: { val: 1 },
    },
    right: {
        val: 6,
        left: { val: 5 },
    },
}

var preorderTraversal = function(root) {
    const result = [];

    function traversal (root) {
        if (root) {
            result.push(root.val);
            root.left && traversal(root.left);
            root.right && traversal(root.right);
        }
    }

    traversal(root);
    return result;
};

console.log('result----', preorderTraversal(root));