/* Question no 4
 Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2 */

// Java program for the above approach

class GFG{

// Function to find insert position of K
static int find_index(int[] arr, int n, int K)
{
	
	// Traverse the array
	for(int i = 0; i < n; i++)
	
		// If K is found
		if (arr[i] == K)
			return i;

		// If current array element
		// exceeds K
		else if (arr[i] > K)
			return i;

	// If all elements are smaller
	// than K
	return n;
}

// Driver Code
public static void main(String[] args)
{
	int[] arr = { 1, 3, 5, 6 };
	int n = arr.length;
	int K = 5;
	
	System.out.println(find_index(arr, n, K));
}
}


