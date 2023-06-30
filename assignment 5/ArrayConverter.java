/* Question 1

Convert 1D Array Into 2D Array

You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
Input:original = [1,2,3,4], m = 2, n = 2

Output: [[1,2],[3,4]] */
public class ArrayConverter {
    public int[][] convertTo2DArray(int[] original, int m, int n) {
        int[][] result = new int[m][n];
        int index = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (index >= original.length) {
                    return new int[0][0]; // Return an empty 2D array if there are not enough elements in the original array
                }
                result[i][j] = original[index];
                index++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        ArrayConverter converter = new ArrayConverter();
        int[] original = {1, 2, 3, 4};
        int m = 2;
        int n = 2;
        int[][] convertedArray = converter.convertTo2DArray(original, m, n);

        // Print the resulting 2D array
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(convertedArray[i][j] + " ");
            }
            System.out.println();
        }
    }
}
