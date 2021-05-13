数组的特点是用一组连续地址的存储但愿依次存储数据元素，而他的缺点也正是他的特点造成的，比如数组做删除和插入的时候，可能需要移动大量的元素
这里大致模拟一下数组的插入操作
```javascript
function insert (arr, index, data) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i-1]
  }
  arr[index] = data
}
```
从上面的代码可以看出数组的插入以及删除都可能会是一个O(n)的操作，从而就引出了链表这种数据结构，链表不要求逻辑上相邻的元素在屋里位置上也相邻，因此他没有顺序存储结构所具有的缺点，当然他也失去了数组在一块连续空间内存随机存取的优点

单向链表
!()[https://segmentfault.com/img/bVblRLN?w=587&h=95]
单向链表的特点
- 用一组任意的内存空间去存储数据元素
- 每个节点都由本身和一个指向后续节点的指针组成
- 整个链表的存取必须从头指针开始，头指针指向第一个节点
- 最后一个节点的指针指向空null
链表中的几个主要操作
- 创建节点
- 插入节点
- 搜索/遍历节点
- 删除节点
- 合并
初始化节点
```javascript
class Node {
  constructor (key) {
    this.next = null
    this.key = key
  }
}
```
