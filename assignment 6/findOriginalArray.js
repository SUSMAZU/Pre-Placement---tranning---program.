/* Question 6
Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:

Input:changed = [1,3,4,2,6,8]

Output: [1,3,4] */
function findOriginalArray(changed) {
    // Check if the length of the changed array is odd
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    // Create a frequency map to count the occurrences of each element in the changed array
    const freqMap = new Map();
    for (const num of changed) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    // Sort the changed array in ascending order
    changed.sort((a, b) => a - b);
  
    // Iterate over the changed array and reconstruct the original array
    const original = [];
    for (const num of changed) {
      // Check if the current number is twice the value of a previous number
      if (freqMap.get(num) === 0) {
        continue;
      }
      // Check if the doubled number is present in the frequency map
      const doubledNum = num * 2;
      if (!freqMap.has(doubledNum) || freqMap.get(doubledNum) === 0) {
        return [];
      }
      // Decrement the frequencies of the current number and its doubled number
      freqMap.set(num, freqMap.get(num) - 1);
      freqMap.set(doubledNum, freqMap.get(doubledNum) - 1);
      // Add the current number to the original array
      original.push(num);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
  