package interview.questions;

public class ArrayRotate {

	/*
	 * Given an array, rotate the array to the right by k steps, where k is
	 * non-negative. 
	 * Input: [1,2,3,4,5,6,7] and k = 3 Output: [5,6,7,1,2,3,4]
	 * rotate 1 steps to the right: [7,1,2,3,4,5,6] 
	 * rotate 2 steps to the right: [6,7,1,2,3,4,5] 
	 * rotate 3 steps to the right: [5,6,7,1,2,3,4] 
	 * Input: [-1,-100,3,99] and k = 2 Output: [3,99,-1,-100]
	 * rotate 1 steps to the right: [99,-1,-100,3] 
	 * rotate 2 steps to the right: [3,99,-1,-100]
	 */
	public void rotate(int[] nums, int k) {
		for (int i = 1; i <= k; i++)
			rotateRight(nums, nums.length);
	}

	public void rotateRight(int nums[], int len) {
		int i, temp;
		temp = nums[0];
		for (i = 0; i < len - 1; i++)
			nums[i] = nums[i + 1];
		nums[i] = temp;
	}

	/* utility function to print an array */
	void printArray(int arr[]) {
		for (int i = 0; i < arr.length; i++)
			System.out.print(arr[i] + " ");
	}

	// Driver program to test above functions
	public static void main(String[] args) {
		ArrayRotate rotate = new ArrayRotate();
		int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
		rotate.rotate
		(arr, 3);
		rotate.printArray(arr);
	}

}
