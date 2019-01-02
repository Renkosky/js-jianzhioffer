function isSubtree(pRoot1, pRoot2) {
  if (pRoot2 == null) return true //pRoot2为null，表示子树已经遍历完
  if (pRoot1 == null) return false
  if (pRoot1.val == pRoot2.val) {
    return (
      isSubtree(pRoot1.left, pRoot2.left) &&
      isSubtree(pRoot1.right, pRoot2.right)
    )
  } else {
    return false
  }
}
//主
function HasSubtree(pRoot1, pRoot2) {
  // write code here
  if (pRoot1 == null || pRoot2 == null) return false
  return (
    isSubtree(pRoot1, pRoot2) ||
    HasSubtree(pRoot1.left, pRoot2) ||
    HasSubtree(pRoot1.right, pRoot2)
  )
}
//如果p2是p1子结构那么根节点必然相同。先遍历p1,p1的更节点，左右节点一个一个和p2的根节点比较，如果值相同，再递归当前的p1的左右节点是否和p2的左右节点相同
