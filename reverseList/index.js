const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                }
            }
        }
    }
};

var reverseList1 = function(head) {
    let _result = null
    function reverse (head, result) {
        const tmp = {};
        if (head !== null) {
            tmp.val = head.val;
            tmp.next = result;
            _result = tmp;
            head.next && reverse(head.next, tmp);
        }
    }
    reverse(head, null);
    return _result;
};

var reverseList2 = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let nextTmp = curr.next;

        curr.next = prev;
        prev = curr;

        curr = nextTmp;
    }

    return prev;
}

console.log('result:', reverseList2(head));
