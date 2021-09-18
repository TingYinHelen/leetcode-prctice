function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root) {
    const res = [];
    function traverse (node) {
        if (!node) {
            return;
        }
        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return res;
};

const root = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3
        }
    }
};

console.log(inorderTraversal(root));
