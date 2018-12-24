function Find(target, array) {
  var rowlen = array.length - 1
  for (var i = rowlen, j = 0; i >= 0 && j < array[i].length; ) {
    if (array[i][j] == target) {
      return true
    } else if (array[i][j] < target) {
      j++
      continue
    } else if (array[i][j] > target) {
      i--
      continue
    }
  }

  return false
}
