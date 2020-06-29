var numWays1 = function(n) {
    let count = 0;
    function play (_n) {
        if (_n < 0) {
            return;
        }

        if (_n === 0) {
            count++;
            return;
        }
        
        if (_n > 0) {
            play(_n - 1);
            play(_n - 2);
        }
    }
    play(n);
    return count%1e9; 
};

var numWays2 = function(n) {
    const cache = {};
    function play (_n) {
        if (_n <= 1) {
            return 1;
        }

        if (cache[_n]) {
            return cache[_n];
        } else {
            cache[_n] = (play(_n - 1) + play(_n - 2)) % 1000000007;
            return cache[_n];
        }
    }
    return play(n); 
};

var numWays3 = function(n) {
    const first = 1;
    const second = 2;

    if (n <= 1) {
        return first;
    } else if (n <= 2) {
        return second;
    }

    let current = 1;
    let prev1 = first;
    let prev2 = second;

    for (let _n = 3; _n < n; _n++ ) {
        current = (prev1 + prev2) % 1000000007;
        prev1 = prev2;
        prev2 = current;
    }

    return current;
}

console.log('result:', numWays(43));