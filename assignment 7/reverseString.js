/* Question 5
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
Example 1:
Input:s = "abcdefg", k = 2
Output:"bacdfeg" */
function reverseString(s, k) {
    const n = s.length;
    const chars = s.split(''); // Convert the string into an array of characters
  
    for (let i = 0; i < n; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, n - 1); // Determine the end index for reversal
  
      // Reverse the characters from start to end
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join(''); // Convert the array back to a string
  }
  
  const s = "abcdefg";
  const k = 2;
  const result = reverseString(s, k);
  console.log(result);
  