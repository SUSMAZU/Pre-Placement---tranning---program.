/* Question 3

/* Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Example 1:

Input: arr = [2,1]

Output:false */ 
function validMountainArray(arr) {
    if (arr.length < 3) {
      return false;
    }
  
    let i = 0;
  
    // Traverse the array until the elements are in increasing order
    while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // If there's no increasing sequence or the first element is the peak
    if (i === 0 || i === arr.length - 1) {
      return false;
    }
  
    // Traverse the array until the elements are in decreasing order
    while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    // If there's no decreasing sequence
    if (i !== arr.length - 1) {
      return false;
    }
  
    return true;
  }
  
  // Example usage:
  const arr = [2, 1];
  console.log(validMountainArray(arr)); // false
  