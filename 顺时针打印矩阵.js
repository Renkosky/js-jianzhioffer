function Martix(martix) {
  var rows = martix.length
  var cols = martix[0].length
  var start = 0
  var result = []
  while (rows > starts * 2 && cols > starty * 2) {
    var endX = rows - 1 - start
    var endY = cols - 1 - start
    //左到右
    for (var i = start; i < endX; i++) {
      result.push(martix[start][i])
    }
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
}
