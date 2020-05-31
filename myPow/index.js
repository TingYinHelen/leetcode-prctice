var myPow = function(x, n) {
    function pow(result, index) {
        if (index > 0) {
            index--;
            return Math.pow(result, x);
            // if (index > 0) {
            //     result = Math.pow(result, x);
            //     return pow(result, index);
            // } else {
            //     return result;
            // }
        } 
        if (index < 0) {
            index++;
            // if (index < 0) {
            //     result = Math.pow(result, -x);
            //     return pow(result, index);
            // } else {
            //     return result;
            // }
        }
        if (index === 0) {
            return 1;
        }
        
    }
    return pow(x, n);
};
console.log('result:', myPow(2.00000, -2))