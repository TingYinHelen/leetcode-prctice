树形结构是以分支关系定义的层次结构
概念：
1. 树是n个节点的有限集，任意一棵非空树中
- 有且仅有一个特定的称为根的节点
- 当n>1时，其余节点可分为m个互不相交的有限集T1,T2,T3,...Tm，其中每一个集合本身又是一棵树，并且成为根的子树
!()[https://images0.cnblogs.com/i/453211/201407/242212591355775.jpg]
2. 树的节点包含一个数据元素以及若干指向其子树的分支。节点拥有的子树成为节点的度，A的度为3，C的度为1，F的度为0，度为0的节点成为叶子或者终端节点。
度不为0的节点称为非终端节点，或者分支节点。树的度是树内个节点的度的最大值，上图中，树的度为3，节点的子树的根称为该节点的孩子
相应的，该节点称为孩子的parent节点，同一个parent的孩子之间称为兄弟，节点的祖先是从根到该节点所经分支上的所有节点，反智，某节点为根的子树中的任意节点都称为该节点的子孙
3. 节点的层次，从根开始定义起，根为第一层，孩子为第二层。若某节点在第i层，则其子树的根就在第i+1层。parent在同一层的节点互为堂兄弟，例如G和E，FHIJ互为堂兄弟，树中节点的最大层次最大层次称为树的深度(Depth)或高度
4. 如果将树中节点的各子树看成从左至右有次序的，则称该树为有序树，在有序树中最左边的子树的根称为第一个孩子，最右边的称为最后一个孩子
5. 森林：m棵互不相交的树的集合，

二叉树
每个节点之多只有两个子树。并且二叉树的子树有左右之分。其次序不能任意颠倒
二叉树的性质

顺序二叉树通常只考虑完全二叉树

二叉树的遍历
二叉树的遍历是从跟节点出发，按照某种次序依次访问二叉树中的所有所有节点，使得每个节点都被访问，并且只访问一次
四种遍历方法：先序遍历，中序遍历，后续遍历，层序遍历

如何创建一个二叉树
先声明节点`TreeNode`类
```java
public class TreeNode {
  public int data;
  public TreeNode leftChild;
  public TreeNode rightChild;

  public TreeNode (int data) {
    this.data = data
  }
}
```

二叉树的分类：
- 满二叉树：一颗深度为k，且有2^k-1个节点的二叉树
- 完全二叉树：是指最后一层，左边是满的，右边可能满也可能不满，然后其余层都是满的

二叉搜索树
- 若任意节点的左子树不为空，则左子树上所有节点的值都小于他的根节点的值
- 若任意节点的右子树不为空，则右子树上所有节点的值都大于他的根节点的值
- 任意节点的左右子树，也需要满足左边小右边大的性质

举个例子：
一组数据：12,4,18,1,8,16,20
!()[https://segmentfault.com/img/bVbmO6j?w=609&h=305]

二叉树的几个操作
- 查找
- 插入
- 遍历

### 二叉树搜索树的链式存储结构
!()[https://segmentfault.com/img/bVbmMTu?w=336&h=326]
二叉搜索树的节点通常包括四个域：数据元素，分别指向左右节点的指针，指向父节点的指针
一般把这种数据存储结构，称为三叉链表
lchild,data,parent,rchild

用代码初始化一个二叉搜索树的节点
```javascript
class BinaryTreeNode {
  constructor (key, value) {
    this.parent = null
    this.left = null
    this.right = null
    this.key = key
    this.value = value
  }
} 
```
接下来再用代码去初始化一个二叉搜索树
在二叉搜索树中我们会维护一个root指针，这个就相当于链表中的head，在没有任何节点插入的时候它指向空，有节点插入以后他指向根节点
```javascript
class BinarySearchTree {
  constructor () {
    this.root = null
  }
}
```
创建节点
```javascript
createNode (key, value) {
  return new BinarySearchTree()
}
```
### 插入操作
![](https://segmentfault.com/img/bVbmPb1?w=303&h=299)
13使我们要插入的节点，具体的操作：
1. 跟根节点12作比较，比12大，所以我们确定，这个节点是往右子树插入
2. 而根节点的右边已经有节点了，那么根这个节点18做比较，结果小于18，所以往18的左子树找位置
3. 而18的左子树也已经有节点了，所以继续跟这个节点做比较，结果小于16
4. 刚好16的左子树为null，所以13这个节点就插入到了16的左边
通过上面的描述我们来看看代码是怎么写的
- 定义两个指针，分别是p和tail，最初都是指向root，p是用来指向要插入位置的父节点的，而tail是用来查找插入的位置的，所以最后他会指向null。用上面的例子，p最后会指向16这个节点，而tail最后会指向null(tail为null说明它已经找到了正确的位置)

```javascript
insert (node) {
  let p = this.root
  let tail = this.root
  while (tail !== null) {
    p = tail
    if (node.value < tail.lchild) {
      tail = tail.lchild
    } else {
      tail = tail.rchild
    }
  }
  if (p.value < node.value) {
    p.rchild = node
  } else {
    p.lchild = node
  }
  node.parent = p
}
```
### 查找
```javascript
search (value) {
  let p = this.root
  while (value !== p.value) {
    if (value < p.value) {
      p = p.lchild
    } else {
      p = p.rchild
    }
  }
  return p
}
```
### 遍历
- 中序遍历: 先遍历左边的节点，再自己，再右边
- 前序遍历: 先自己，再左节点，再右节点
- 后序遍历: 先左节点，再右节点，最后自己

中序遍历
```javascript
transverse () {
  return this._transverse(this.root)
}
_transverse (node) {
  
}
```



