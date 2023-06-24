 /* Question no 5 
 You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4]. */


import java.util.Arrays;

public class IncrementLargeInteger {
    public static int[] plusOne(int[] digits) {
        int n = digits.length;
        
        // Start from the least significant digit
        for (int i = n - 1; i >= 0; i--) {
            // Increment the current digit by 1
            digits[i]++;
            
            // If the digit becomes 10, set it to 0 and carry over to the next digit
            if (digits[i] == 10) {
                digits[i] = 0;
            } else {
                // No carry over, so we can return the updated digits array
                return digits;
            }
        }
        
        // If we reach here, it means all digits were 9, so we need to add an additional digit 1 at the beginning
        int[] result = new int[n + 1];
        result[0] = 1;
        return result;
    }

    public static void main(String[] args) {
        int[] digits = {1, 2, 3};
        int[] result = plusOne(digits);
        System.out.println("Result: " + Arrays.toString(result));
    }
}
