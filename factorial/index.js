function factorial(n) {
    if(n < 2) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
function factorial(n, accumulator){
    if(n < 2) {
        return accumulator;
    } else {
        return factorial(n - 1, n * accumulator);
    }
}