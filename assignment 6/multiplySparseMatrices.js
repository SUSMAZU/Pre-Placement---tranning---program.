/* Question 8

Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.
Input: mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]
Output:
[[7,0,0],[-7,0,3]] */

function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
    
    const result = [];
    
    // Initialize the result matrix with zeros
    for (let i = 0; i < m; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = 0;
      }
    }
    
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let l = 0; l < k; l++) {
          result[i][j] += mat1[i][l] * mat2[l][j];
        }
      }
    }
    
    return result;
  }
  
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  
  const result = multiplySparseMatrices(mat1, mat2);
  console.log(result);
  