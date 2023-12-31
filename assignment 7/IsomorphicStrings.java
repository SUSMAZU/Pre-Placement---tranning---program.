/* Question 1 
Given two strings s and t, *determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"

Output: true */
import java.util.HashMap;

public class IsomorphicStrings {
    public static boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Character> charMap = new HashMap<>();
        HashMap<Character, Character> reverseCharMap = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char charS = s.charAt(i);
            char charT = t.charAt(i);

            if (charMap.containsKey(charS) && charMap.get(charS) != charT) {
                return false;
            }

            if (reverseCharMap.containsKey(charT) && reverseCharMap.get(charT) != charS) {
                return false;
            }

            if (!charMap.containsKey(charS)) {
                charMap.put(charS, charT);
            }

            if (!reverseCharMap.containsKey(charT)) {
                reverseCharMap.put(charT, charS);
            }
        }

        return true;
    }

    public static void main(String[] args) {
        String s = "egg";
        String t = "add";
        boolean isomorphic = isIsomorphic(s, t);
        System.out.println(isomorphic);
    }
}
