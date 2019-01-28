function IsPopOrder(pushV, popV) {
  // write code here
  var temp = []
  for (var i = 0, j = 0; i < pushV.length; i++) {
    temp.push(pushV[i])
    while (temp.length > 0 && temp[temp.length - 1] === popV[j]) {
      temp.pop()
      j++
    }
  }
  return temp.length == 0
}
