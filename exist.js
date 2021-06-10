/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    function dfs (i, j, k) {
        if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || word[k] !== board[i][j] ) return false;
        if (k===word.length-1) return true;
        board[i][j] = ''
        let res = dfs(i+1,j,k+1) || dfs(i-1,j,k+1) || dfs(i,j+1,k+1) || dfs(i,j-1,k+1)
        board[i][j] = word[k];
        return res
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i,j,0)) {
                return true
            }
        }
    }
    return false
};

const board = [["a","b"]]
const word = "ba";
console.log('===', exist(board, word));