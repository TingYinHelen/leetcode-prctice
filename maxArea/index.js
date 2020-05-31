var maxArea = function(height) {
    let prev = 0;
    let last = height.length;
    let _result = 0;
    helper();
    function helper() {
        if (prev >= last - 1) {
            return;
        }
        if (height[prev] > height[last - 1]) {
            _result = Math.max(height[last - 1] * (last - prev - 1), _result);
            last--;
        } else {
            _result = Math.max(height[prev] * (last - prev - 1), _result);
            prev++;
        }
        helper();
    }
    return _result;
};

var maxArea2 = function(height) {
    let prev = 0;
    let last = height.length;
    let _result = 0;

    while (prev < last - 1) {
        if (height[prev] > height[last - 1]) {
            _result = Math.max(height[last - 1] * (last - prev - 1), _result);
            last--;
        } else {
            _result = Math.max(height[prev] * (last - prev - 1), _result);
            prev++;
        }
    }

    return _result;
}

console.log('result:', maxArea2([1,8,6,2,5,4,8,3,7]));