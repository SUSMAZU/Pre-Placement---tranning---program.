/* Question 4
Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1. */
function findMaxLength(nums) {
    const countMap = new Map();
    countMap.set(0, -1); // Initial count of 0 is -1
    let count = 0;
    let maxLength = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Increment count if the current element is 1, decrement otherwise
      count += nums[i] === 1 ? 1 : -1;
  
      // If the count is already present in the map, update the maxLength
      if (countMap.has(count)) {
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        // If the count is not present, store the current index
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength); // Output: 2
  