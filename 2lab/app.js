printMatrix = (m, name = 'matrix') => {
  console.log(name)
  for (i = 0; i < m.length; i++) {
    console.log(m[i])
  }
}

// 1

matrix = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1]
]

mSize = 5
matrix2 = new Array(mSize)
for (i = 0; i < mSize; i++) {
  matrix2[i] = new Array(mSize)
  for (j = 0; j < mSize; j++) {
    if (i == 0 && j == 0) {
      matrix2[i][j] = 1
    } else if (i == 0 && j == mSize-1) {
      matrix2[i][j] = 1
    } else if (i == mSize-1 && j == 0) {
      matrix2[i][j] = 1
    } else if (i == mSize-1 && j == mSize-1) {
      matrix2[i][j] = 1
    } else {
      matrix2[i][j] = 0
    }
  }
}

printMatrix(matrix, '1 task')
printMatrix(matrix2, '1 task programaticaly')

// 2

a = [
  [5, 5],
  [6, 6],
  [1, 1]
]

c = [
  [3, 5, 7],
  [3, 3, 3]
]

d = [
  [4, 3],
  [5, 4],
  [6, 5]
]

substract = (a, b) => {
  result = []

  for (i = 0; i < a.length; i++) {
    result.push([])
    
    for (j = 0; j < a[0].length; j++) {
      result[i].push(a[i][j] - b[i][j])
    }
  }

  return result
}

multiply = (a, b) => {
  result = []

  for (i = 0; i < a.length; i++) {
    newRow = []

    for (j = 0; j < b[0].length; j++) {
      newCol = 0

      for (k = 0; k < a[i].length; k++) {
        newCol += a[i][k] * b[k][j]
      }
      newRow.push(newCol)
    }
    result.push(newRow)
  }

  return result
}

transpose = (a) => {
  result = []

  for(i = 0; i < a[0].length; i++) {
    result[i] = [];

    for(j = 0; j < a.length; j++) {
      result[i][j] = a[j][i];
    }
  }

  return result;
}

m = substract(d, a)
printMatrix(m, 'M')

b = multiply(a, c)
printMatrix(b, 'B')

bT = transpose(b)
printMatrix(bT, 'B^T')