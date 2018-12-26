/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
  if (vin.length === 0) return null

  var root = 0,
    i,
    j
  var left_pre = [],
    right_pre = [],
    left_in = [],
    right_in = []

  var head = new TreeNode(pre[0])
  for (i = 0; i < vin.length; i++) {
    if (vin[i] === pre[0]) {
      root = i
      break
    }
  }
  for (j = 0; j < root; j++) {
    left_pre.push(pre[j + 1])
    left_in.push(vin[j])
  }
  for (j = root + 1; j < vin.length; j++) {
    right_pre.push(pre[j])
    right_in.push(vin[j])
  }

  head.left = reConstructBinaryTree(left_pre, left_in)
  head.right = reConstructBinaryTree(right_pre, right_in)

  return head
}
/**
 * 给定一个二叉树前序和一个二叉树中序遍历的序列，把这个二叉树还原
 * 由于前序遍历的第一个节点必定是树的跟节点，那就可以通过这个值去找到中序遍历中根节点的位置
 * 根据中序遍历的特性，根节点左侧必定是左子树，所以就可以把左子树和右子树的两个遍历序列写出来，然后再放入函数中再递归调用一次
 * 最后返回
 */
//这种更简单
function reConstructBinaryTree(pre, vin) {
  if (pre.length == 0 || vin.length == 0) return null
  var index = vin.indexOf(pre[0])
  var left = vin.slice(0, index) //中序左子树
  var right = vin.slice(index + 1) //中序右子树
  return {
    val: pre[0],
    //递归左右子树的前序，中序
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  }
}
