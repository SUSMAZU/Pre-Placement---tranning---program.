/* Question 8
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: s = "ab", goal = "ba"
Output:true */ 
public class newfile {
    public static boolean areStringsSwappable(String s, String goal) {
        if (s.length() != goal.length()) {
            return false;
        }
        
        int diffCount = 0;
        int[] mismatchIndices = new int[2];
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != goal.charAt(i)) {
                diffCount++;
                
                if (diffCount > 2) {
                    return false; // More than two characters are different, cannot be swapped.
                }
                
                mismatchIndices[diffCount - 1] = i;
            }
        }
        
        if (diffCount == 0) {
            // Both strings are identical, no need to swap.
            return true;
        }
        
        if (diffCount != 2) {
            // There are more than 2 characters different, cannot be swapped.
            return false;
        }
        
        // Check if the characters at mismatched indices can be swapped to form the goal string.
        return s.charAt(mismatchIndices[0]) == goal.charAt(mismatchIndices[1])
            && s.charAt(mismatchIndices[1]) == goal.charAt(mismatchIndices[0]);
    }
    
    public static void main(String[] args) {
        String s = "ab";
        String goal = "ba";
        
        boolean result = areStringsSwappable(s, goal);
        System.out.println(result); // Output: true
    }
}
