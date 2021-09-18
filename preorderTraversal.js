var preorderTraversal = function(root) {
    const res = [];
    function traversal (root) {
        if (!root) {
            return;
        }
        res.push(root.val); 
        traversal(root.left);
        traversal(root.right);
    }
    traversal(root);
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
console.log(preorderTraversal(root));
