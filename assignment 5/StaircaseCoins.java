
/* question 2.    You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.Input: n = 5

Output:2

Explanation: Because the 3rd row is incomplete, we return 2 */
    public class StaircaseCoins {
    public static int arrangeCoins(int n) {
        int rowCount = 0;
        int remainingCoins = n;

        while (remainingCoins >= rowCount + 1) {
            rowCount++;
            remainingCoins -= rowCount;
        }

        return rowCount;
    }

    public static void main(String[] args) {
        int n = 5;
        int completeRows = arrangeCoins(n);
        System.out.println("Number of complete rows: " + completeRows);
    }
}


