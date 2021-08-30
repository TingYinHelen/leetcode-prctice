// var findNumberIn2DArray1 = function(matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) {
//         return true
//       }
//     }
//   }
//   return false
// };

// var findNumberIn2DArray2 = function(matrix, target) {
//   if ( matrix.length === 0 || matrix[0].length === 0) {
//     return false
//   }
//   let rows = matrix.length
//   let columns = matrix[0].length
//   let row = 0
//   let column = columns - 1
  
//   while (row < rows && column >= 0) {
//     const temp = matrix[row][column]
//     if (temp === target) {
//       return true
//     } else if (target < temp) {
//       column--
//     } else {
//       row++
//     }
//   }
//   return false
// };

// var findNumberIn2DArray3 = function(matrix, target) {
//   let i = 0
//   let j = 0
//   if (matrix.length>0) {
//     j = matrix[0].length - 1
//   }
//   if ( matrix.length === 0 || matrix[0].length === 0) {
//     return false
//   }
  
//   function find (i, j) {
//     const temp = matrix[i][j]
//     if (temp === target) {
//       return true
//     } else if (target > temp) {
//       if (i < matrix.length - 1) {
//         return find(++i,j)
//       }
//     } else {
//       if (j > 0) {
//         return find(i,--j)
//       }
//     }
//     return false
//   }
//   return find(i, j)
// };

const findNumberIn2DArray3 = (matrix, target) => {
  if (matrix.length === 0) {
    return false;
  }
  let col = matrix[0].length - 1;
  let row = 0;
  
  function find() {
    if (row > matrix.length - 1 || col < 0) {
      return false;
    }
    if (target === matrix[row][col]) {
      return true;
    }
    if (target > matrix[row][col]) {
      row++;
      return find()
    }
    if (target < matrix[row][col]) {
      col--;
      return find()
    }
  }
  return find();
}

// const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const matrix = []

console.log(findNumberIn2DArray3(matrix, 0));