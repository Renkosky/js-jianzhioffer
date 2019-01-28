//思想单调队列

let str = 'abcbabcba'
let stack = '' //栈，保存答案
let ans = []
for (let i = 0; i < str.length; i++) {
  while (ans != '' && ans[ans.length - 1] < str[i]) ans.pop()
  ans.push(str[i])
}

var chars = ['c', 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'f', 'g']
var stack = []
for (let i = 0; i < chars.length; i++) {
  while (!stack.length == 0 && chars[i] > stack[0]) {
    stack.pop()
  }
  stack.push(chars[i])
}

while (!stack.length == 0) {
  console.log(stack.pop())
}
