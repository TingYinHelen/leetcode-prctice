// n = 4
// fib(3) + fib(2) => fib(2) + fib(1) + fib(1) + fib(0) = 1 + 0 + 1 = 2

const cache = {};
function fib(n) {
    if (n < 2) {
        return n;
    }
    if (cache[n]) {
        return cache[n];
    } 
    cache[n] = fib(n-1) + fib(n-2);
    return fib(n-1) + fib(n-2);
}

var fib = function(N) {
    if (N < 2) {
        return N;
    }
    return fib(N-1) + fib(N-2);
};
console.log('result:', fib(5));