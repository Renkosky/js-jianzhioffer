function printMatrix(matrix) {
  if (matrix == null || matrix.length == 0) return
  var rows = matrix.length
  var cols = matrix[0].length
  var start = 0
  var result = []

  while (cols > start * 2 && rows > start * 2) {
    //x，y方向边界值
    var endX = cols - 1 - start
    var endY = rows - 1 - start
    //左到右
    for (var i = start; i <= endX; i++) {
      result.push(matrix[start][i])
    }
    //上到下
    if (start < endY) {
      for (var i = start + 1; i <= endY; i++) {
        result.push(matrix[i][endX])
      }
    }
    //右到左
    if (start < endX && start < endY) {
      for (var i = endX - 1; i >= start; i--) {
        result.push(matrix[endY][i])
      }
    }

    //下到上
    if (start < endX && start < endY - 1) {
      for (var i = endY - 1; i >= start + 1; i--) {
        result.push(matrix[i][start])
      }
    }

    start++
  }
  return result
}
