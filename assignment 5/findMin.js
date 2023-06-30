/* Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

- [4,5,6,7,0,1,2] if it was rotated 4 times.
- [0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

Example 1:

Input:nums = [3,4,5,1,2]

Output: 1 */

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      // If the middle element is greater than the last element,
      // the minimum element must be in the right half.
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      }
      // If the middle element is less than or equal to the last element,
      // the minimum element must be in the left half.
      else {
        right = mid;
      }
    }
  
    // At the end of the loop, 'left' will be pointing to the minimum element.
    return nums[left];
  }
  
  // Example usage:
  const nums = [3, 4, 5, 1, 2];
  const minElement = findMin(nums);
  console.log(minElement);
  