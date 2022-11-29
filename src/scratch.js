/* eslint-disable */

function getMatrixProduct(m1, m2) {
  const result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      var sum = 0;
      for (let k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

const m1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
let m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(getMatrixProduct(m1, m2));
