function copyRandomList (head) {
    let curr = head
    const dic = new Map();
    while (curr) {
        dic.set(curr, { val: curr.val })
        curr = curr.next
    }
    curr = head
    while (curr) {
        dic.get(curr).next = dic.get(curr.next) === undefined ? null : dic.get(curr.next);
        dic.get(curr).random = dic.get(curr.random)
        curr = curr.next
    }
    return dic.get(head)
}
const head = {
    val: 7,
    next: {
        val: 13,
        next: {
            val: 11,
            next: {
                val: 10,
                next: {
                    val: 1,
                },
            }
        },
    },
}
console.log('[ result==== ]', copyRandomList(head))