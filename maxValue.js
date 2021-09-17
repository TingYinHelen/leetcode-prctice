// var maxValue = function(grid) {
//     let row = 0;
//     let colum = 0;
//     let dp = 0;
//     while (row !== grid.length - 1 || colum !== grid[0].length - 1) {
//         dp+=grid[row][colum];
//         if (row + 1 > grid.length - 1) {
//             colum+=1
//             continue;
//         }
//         if (colum + 1 > grid[0].length - 1) {
//             row+=1;
//             continue;
//         }
//         const right = grid[row][colum + 1];
//         const under = grid[row + 1][colum];
//         if (right > under) {
//             colum += 1;
//         } else {
//             row += 1;
//         }
//     }
//     dp+=grid[row][colum];
//     return dp;
// };



var maxValue = function(grid) {
    const memo = {};
    function dp (row, colum) {
        if (memo[`${row}_${colum}`] !== undefined) {
            return memo[`${row}_${colum}`];
        }
        let res = 0;
        if (row === grid.length - 1 && colum === grid[0].length - 1) {
            res = grid[row][colum];
        } else if (row === grid.length - 1 && colum < grid[0].length - 1) {
            res = grid[row][colum] + dp(row, colum + 1);
        } else if (row < grid.length - 1 && colum === grid[0].length - 1) {
            res = grid[row][colum] + dp(row + 1,  colum);
        } else {
            res = grid[row][colum] + Math.max(dp(row + 1, colum), dp(row, colum + 1));
        }
        memo[`${row}_${colum}`] = res;
        return res;
    }
    return dp(0, 0);
}
// const board = [[1,2,5],[3,2,1]];
// const board = [[1,3,1],[1,5,1],[4,2,1]];
const board = [[3,8,6,0,5,9,9,6,3,4,0,5,7,3,9,3],[0,9,2,5,5,4,9,1,4,6,9,5,6,7,3,2],[8,2,2,3,3,3,1,6,9,1,1,6,6,2,1,9],[1,3,6,9,9,5,0,3,4,9,1,0,9,6,2,7],[8,6,2,2,1,3,0,0,7,2,7,5,4,8,4,8],[4,1,9,5,8,9,9,2,0,2,5,1,8,7,0,9],[6,2,1,7,8,1,8,5,5,7,0,2,5,7,2,1],[8,1,7,6,2,8,1,2,2,6,4,0,5,4,1,3],[9,2,1,7,6,1,4,3,8,6,5,5,3,9,7,3],[0,6,0,2,4,3,7,6,1,3,8,6,9,0,0,8],[4,3,7,2,4,3,6,4,0,3,9,5,3,6,9,3],[2,1,8,8,4,5,6,5,8,7,3,7,7,5,8,3],[0,7,6,6,1,2,0,3,5,0,8,0,8,7,4,3],[0,4,3,4,9,0,1,9,7,7,8,6,4,6,9,5],[6,5,1,9,9,2,2,7,4,2,7,2,2,3,7,2],[7,1,9,6,1,2,7,0,9,6,6,4,4,5,1,0],[3,4,9,2,8,3,1,2,6,9,7,0,2,4,2,0],[5,1,8,8,4,6,8,5,2,4,1,6,2,2,9,7]];
console.log('maxValue(board)====', maxValue(board));