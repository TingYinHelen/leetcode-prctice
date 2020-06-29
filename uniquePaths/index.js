var uniquePaths = function(m, n) {
    let result = [[1]];
    for (let _m = 1; _m <= m; _m++) {
        for (let _n = 1; _n < n; _n++) {
            result[_m][_n] = result[_m - 1][_n] + result[_m][_n - 1];
        }
    }
    return 
};
console.log('result: ', uniquePaths(3, 2));