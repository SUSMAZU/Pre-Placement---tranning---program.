/* You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:

Input: n = 5

Output: 2

Explanation: Because the 3rd row is incomplete, we return 2 */
public class question5 {
    public static int arrangeCoins(int n) {
        int k = 1;
        while (n >= k) {
            n -= k;
            k++;
        }
        return k - 1;
    }

    public static void main(String[] args) {
        int n = 5;
        int completeRows = arrangeCoins(n);

        System.out.println("Number of complete rows: " + completeRows);
    }
}

    
