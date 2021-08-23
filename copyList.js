var copyList = function(head) {
    let curr = head;
    let prev = dum = {};
    
    while (curr) {
        const node = {}
        node.val = curr.val // 复制当前节点
        prev.next = node // 新链表的前驱节点 => 当前节点
        curr = curr.next // 遍历下一个节点
        prev = node // 保存当前节点
    }
    return dum.next;
};
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
console.log('[ result==== ]', copyList(head))

// 原链表与新链表