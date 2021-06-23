// const data = {
//     val: 1,
//     left: {
//         val: 2,
//         left: { val: 3},
//         right: { val: 4 },
//     },
//     right: {
//         val: 2,
//         left: { val: 4 },
//         right: { val: 3 },
//     },
// }
// // const data = {
// //     val: 1,
// //     left: {
// //         val: 2,
// //         right: { val: 3 },
// //     },
// //     right: {
// //         val: 2,
// //         right: { val: 3 }
// //     },
// // }

// const isSymmetric = function(data) {
    
    
// };
// console.log(isSymmetric(data));






const check = (u, v) => {
    const q = [];
    q.push(u),q.push(v);

    while (q.length) {
        u = q.shift();
        v = q.shift();

        if (!u && !v) continue;
        if ((!u || !v) || (u.val !== v.val)) return false;

        q.push(u.left); 
        q.push(v.right);

        q.push(u.right); 
        q.push(v.left);
    }
    return true;
}
var isSymmetric = function(root) {
    return check(root, root);
};