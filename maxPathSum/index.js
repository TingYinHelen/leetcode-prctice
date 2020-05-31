function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = {
    val: -10,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
    },
};

// var maxPathSum = function(root) {
//     let max_sum = -Infinity;
//     function max_gain (root) {
//         if (root === null) {
//             return 0;
//         }

//         const left_gain = Math.max(max_gain(root.left), 0);
//         const right_gain = Math.max(max_gain(root.right), 0);

//         const newPath = root.val + left_gain + right_gain;

//         max_sum = Math.max(newPath, max_sum);

//         return root.val + Math.max(left_gain, right_gain);
//     }
//     max_gain(root);
//     return max_sum;
// };


const maxPathSum = function (root) {
    let max_sum = -Infinity;

    function max_gain (root) {
        if (root === null) {
            return 0;
        }
    
        const left_gain = Math.max(max_gain(root.left), 0);
        const right_gain = Math.max(max_gain(root.right), 0);
    
        const new_path = root.val + left_gain + right_gain;
        max_sum = Math.max(max_sum, new_path);
        
        return root.val + Math.max(left_gain, right_gain);
    }

    max_gain(root);

    return max_sum;
}


console.log('max_sum----', maxPathSum(root));