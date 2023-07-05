/* Question 4
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the left child node of the parent first if it exists.Input: s = "4(2(3)(1))(6(5))"

Output:[4,2,6,3,1,5] */
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(s) {
    if (s.length === 0) {
      return null;
    }
  
    // Find the index of the first opening parenthesis
    let i = s.indexOf('(');
  
    if (i === -1) {
      // If no opening parenthesis found, it means we have only a single node
      return new TreeNode(parseInt(s));
    }
  
    // Create the root node
    let root = new TreeNode(parseInt(s.slice(0, i)));
  
    // Find the index of the matching closing parenthesis
    let j = findClosingParenthesis(s, i);
  
    // Construct the left child by recursively calling the function with the substring
    root.left = constructBinaryTree(s.slice(i + 1, j));
  
    // Construct the right child by recursively calling the function with the remaining substring
    root.right = constructBinaryTree(s.slice(j + 2, s.length - 1));
  
    return root;
  }
  
  function findClosingParenthesis(s, start) {
    let count = 0;
  
    for (let i = start; i < s.length; i++) {
      if (s[i] === '(') {
        count++;
      } else if (s[i] === ')') {
        count--;
      }
  
      if (count === 0) {
        return i;
      }
    }
  
    return -1; // Closing parenthesis not found
  }
  
  function inorderTraversal(root) {
    if (root === null) {
      return [];
    }
  
    let result = [];
  
    // Traverse left subtree
    result = result.concat(inorderTraversal(root.left));
  
    // Visit current node
    result.push(root.val);
  
    // Traverse right subtree
    result = result.concat(inorderTraversal(root.right));
  
    return result;
  }
  
  // Example usage:
  let s = "4(2(3)(1))(6(5))";
  let root = constructBinaryTree(s);
  let output = inorderTraversal(root);
  console.log(output); // Output: [4, 2, 6, 3, 1, 5]
  