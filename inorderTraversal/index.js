function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null,
        },
        right: {
            val: 4,
            left: null,
            right: null,
        },
    },
    right: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
}

var inorderTraversal = function(root) {
    const result = [];

    function pushToArray(root) {
        if (root) {
            if (root.left) {
                pushToArray(root.left);
            }
            
            result.push(root.val);
            
            if (root.right) {
                pushToArray(root.right);
            }
        }
    }

    pushToArray(root);

    return result;
};

console.log('result:', inorderTraversal(tree));