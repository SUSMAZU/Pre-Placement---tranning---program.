/* Question 5

Given two integer arrays arr1 and arr2, and the integer d, returns the distance value between the two arrays.

The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

Example 1:

Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2

Output: 2 */

function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
  
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        distance++;
      }
    }
  
    return distance;
  }
  
  // Example usage
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  const result = distanceValue(arr1, arr2, d);
  
  console.log(result);  // Output: 2
  