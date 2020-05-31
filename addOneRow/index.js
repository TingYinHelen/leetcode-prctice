// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} v
//  * @param {number} d
//  * @return {TreeNode}
//  */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// const root = {
//     val: 4,
//     left: {
//         val: 2,
//         left: { val: 3 },
//         right: { val: 1 },
//     },
//     right: {
//         val: 6,
//         left: { val: 5 },
//     },
// }
// // const root = {
// //     val: 4,
// //     left: {
// //         val: 2,
// //         left: {
// //             val: 3
// //         },
// //         right: {
// //             val: 1,
// //         },
// //     },
// // };
// var addOneRow = function(root, v, d) {
//     if (d === 1) {
//         const head = {
//             val: v,
//             left: root,
//             right: null,
//         }
        
//         return head;
//     }
//     function traverse (root, count) {
//         if (!root) return;
        
//         if (count === d - 1) {
//             root.left = {
//                 val: v,
//                 left: root.left,
//                 right: null,
//             };
//             root.right = {
//                 val: v,
//                 right: root.right,
//                 left: null,
//             }
//         } else {
//             traverse(root.left, count+1);
//             traverse(root.right, count+1);
//         }
//     }
//     traverse(root, 1);
//     return root;
// };



// var addOneRow2 = function (root, v, d) {
//     function findDNodes(root, d) {
//         let resultNodes = [root];
//         for (let i = 1; i < d; i++) {
//             resultNodes = resultNodes
//                 .filter(node => node)
//                 .reduce((sofar, curr) => {
//                     return sofar.concat([curr.left, curr.right]);
//                 }, []);
//         }
//         return resultNodes;
//     }

//     if (d === 1) {
//         const insertNode = new TreeNode(v);
//         insertNode.left = root;
//         return insertNode;
//     }

//     const lastNodes = findDNodes(root, d - 1);


//     lastNodes
//         .forEach(node => {
//             if (node) {
//                 const insertNodeL = new TreeNode(v);
//                 const insertNodeR = new TreeNode(v);
//                 insertNodeL.left = node.left;
//                 insertNodeR.right = node.right;
//                 node.left = insertNodeL;
//                 node.right = insertNodeR;
//             }
//         })
//     return root;
// };

// // 作者：demongodYY
// // 链接：https://leetcode-cn.com/circle/discuss/ZNAuAQ/view/wbnLIo/
// // 来源：力扣（LeetCode）
// // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// console.log('result---', JSON.stringify(addOneRow2(root, 1, 3)));

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

var addOneRow = function (root, v, d) {
    if (d === 1) {
        const head = {
            val: v,
            left: root,
            right: null,
        }
        return head;
    }
    function recursive(_root, count) {
        if (!_root) return;
        if (count === d - 1) {
            _root.left = {
                val: v,
                left: _root.left,
                right: null,
            };
            _root.right = {
                val: v,
                left: null,
                right: _root.right,
            }
        } else {
            recursive(_root.left, count + 1);
            recursive(_root.right, count + 1);
        }
    }
    recursive(root, 1);

    return root;
}

var addOneRow = function (root, v, d) {
    function findDNode() {
        let nodes = [root];
        for (let i = 1; i < d - 1; i++) {
            nodes = nodes
                .filter(node => node)
                .reduce((sofar, curr) => {
                    return sofar.concat([curr.left, curr.right]);
                }, []);
        }
        return nodes;
    }
    const lastNodes = findDNode();

    
    lastNodes.forEach((node) => {
        if (node) {
            console.log('node----', node);
            node.left = {
                val: v,
                left: node.left,
                right: null,
            };
            node.right = {
                val: v,
                left: null,
                right: node.right,
            };
            // const insertNodeL = new TreeNode(v);    
            // const insertNodeR = new TreeNode(v);    

            // insertNodeL.left = node.left;
            // insertNodeR.right = node.right;
            // node.left = insertNodeL.left;
            // node.right = insertNodeR.right;

        }
    });

    return root;
}


var addOneRow2 = function (root, v, d) {
    function findDNodes(root, d) {
        let resultNodes = [root];
        for (let i = 1; i < d; i++) {
            resultNodes = resultNodes
                .filter(node => node)
                .reduce((sofar, curr) => {
                    return sofar.concat([curr.left, curr.right]);
                }, []);
        }
        return resultNodes;
    }

    if (d === 1) {
        const insertNode = new TreeNode(v);
        insertNode.left = root;
        return insertNode;
    }

    const lastNodes = findDNodes(root, d - 1);
    
    lastNodes
        .filter(node => node)
        .forEach(node => {
            if (node) {
                const insertNodeL = new TreeNode(v);
                const insertNodeR = new TreeNode(v);
                insertNodeL.left = node.left;
                insertNodeR.right = node.right;
                node.left = insertNodeL;
                node.right = insertNodeR;
            }
        })
    return root;
};

console.log('result---', JSON.stringify(addOneRow(root, 1, 2)));