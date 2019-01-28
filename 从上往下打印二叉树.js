function PrintFromTopToBottom(root) {
  var nodes = []
  var leafs = []
  if (!root) {
    return false
  }
  nodes.push(root)
  while (nodes && nodes.length > 0) {
    var node = nodes.shift()
    leafs.push(node.val)
    if (node.left) {
      nodes.push(node.left)
    }
    if (node.right) {
      nodes.push(node.right)
    }
  }
  return leafs
}
