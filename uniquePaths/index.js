var uniquePaths = function(m, n) {
    const a = Array.from({ length: m+1 }, () => new Array(n+1).fill(undefined));
    function countPath(m,n) {
        if (m===1 || n===1) {
            return 1;
        }
        if (a[m][n]) {
            return a[m][n];
        }

        a[m-1][n] = countPath(m-1,n);
        a[m][n-1] = countPath(m, n-1);
        a[m][n] = a[m-1][n] + a[m][n-1];
        return a[m][n];
    }
    return countPath(m,n);
};
console.log('result: ', uniquePaths(7, 3));