/* An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.

Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:

Input: changed = [1,3,4,2,6,8]

Output: [1,3,4] */
function findOriginalArray(changed) {
    // Check if the length of changed is odd or changed is empty
    if (changed.length % 2 !== 0 || changed.length === 0) {
      return [];
    }
    
    // Create a frequency map to count the occurrences of each element in changed
    const frequencyMap = new Map();
    for (let num of changed) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Sort the changed array in ascending order
    changed.sort((a, b) => a - b);
    
    const original = [];
    for (let num of changed) {
      // Skip if the current number has been exhausted in the frequency map
      if (frequencyMap.get(num) === 0) {
        continue;
      }
      
      // Decrement the frequency of the current number in the frequency map
      frequencyMap.set(num, frequencyMap.get(num) - 1);
      
      // Check if twice the current number exists in the frequency map
      const doubledNum = num * 2;
      if (frequencyMap.get(doubledNum) === undefined || frequencyMap.get(doubledNum) === 0) {
        return [];
      }
      
      // Decrement the frequency of the doubled number in the frequency map
      frequencyMap.set(doubledNum, frequencyMap.get(doubledNum) - 1);
      
      // Add the original number to the result array
      original.push(num);
    }
    
    return original;
  }
  
  // Example usage
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
  