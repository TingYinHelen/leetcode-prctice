var numMatchingSubseq = function(S, words) {
    let count = 0;
    
    for (const word of words) {
        let index = -1;
        let _count = 0;
        for (const str of word) {            
            _count++;
            const _index = S.indexOf(str, index+1);

            if (_index === -1) {
                break;
            } else {
                index = _index;
            }

            if (_count === word.length) {
                count++;
            }
        }
    }
    return count;
};

var numMatchingSubseq2 = function(S, words) {
    const bucket = Array.from({ length: 26 }, () => []);
    
    let count = 0;

    for (const word of words) {
        bucket[word.charCodeAt(0) - 97].push(word); // a的unicode是97
    }
    
    for (const str of S) {
        const list = bucket[str.charCodeAt(0) - 97];
        bucket[str.charCodeAt(0) - 97] = [];

        for (let word of list) {
            if (word.length > 1) {
                word = word.slice(1);
                if (word) {
                    bucket[word.charCodeAt(0) - 97].push(word);
                }
            } else {
                count++;
            }
        }
    }
    return count;
}


console.log('result----', numMatchingSubseq2("dcaog", ['dog', 'cat', 'cop']));