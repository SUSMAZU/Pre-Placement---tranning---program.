/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.
Example 1:
Input: s = "3[a]2[bc]"
Output:"aaabcbc" */
function decodeString(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (isDigit(s[i])) {
        let num = 0;
        while (isDigit(s[i])) {
          num = num * 10 + parseInt(s[i]);
          i++;
        }
        i--; // Decrement i to account for the last digit
        
        stack.push(num);
      } else if (s[i] === '[') {
        stack.push('');
      } else if (s[i] === ']') {
        let encodedString = stack.pop();
        let count = stack.pop();
        
        stack.push(stack.pop() + encodedString.repeat(count));
      } else {
        stack.push(stack.pop() + s[i]);
      }
    }
  
    return stack[0];
  }
  
  function isDigit(char) {
    return /[0-9]/.test(char);
  }
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString);
    