let inStack = []
let outStack = []
function push(value) {
  inStack.push(value)
}
function pop() {
  if (!outStack.length) {
    while (inStack.length) {
      outStack.push(inStack.pop())
    }
  }

  return outStack.pop()
}
