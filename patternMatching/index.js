var patternMatching = function(pattern, value) {
    let match = '';
    let arr = [];
    for (const str of value) {
        match += str;
        if (match.includes(str)) {
            arr.push(match);
            match = '';
        }
    }
    console.log('arr----', arr);
};

patternMatching('abba', 'dogcatcatdog')

// console.log('result-----', patternMatching('abba', 'dogcatcatdog'));