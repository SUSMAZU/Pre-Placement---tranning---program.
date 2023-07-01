/* Question 7 
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]] */
function generateMatrix(n) {
    // Create an empty matrix
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  
    let num = 1; // Start with the first number
  
    let topRow = 0,
      bottomRow = n - 1,
      leftCol = 0,
      rightCol = n - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse the top row from left to right
      for (let i = leftCol; i <= rightCol; i++) {
        matrix[topRow][i] = num++;
      }
      topRow++;
  
      // Traverse the right column from top to bottom
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i][rightCol] = num++;
      }
      rightCol--;
  
      // Traverse the bottom row from right to left
      for (let i = rightCol; i >= leftCol; i--) {
        matrix[bottomRow][i] = num++;
      }
      bottomRow--;
  
      // Traverse the left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        matrix[i][leftCol] = num++;
      }
      leftCol++;
    }
  
    return matrix;
  }
  
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);
  