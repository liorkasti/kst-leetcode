package interview.questions;

import java.util.Arrays;
import java.util.HashSet;
import java.util.stream.IntStream;

public class ArrayContainsDuplicate {

	// Driver method to test above method
	public static void main(String[] args) {
//		int arr[] = {1, 2, 2, 4, 5};
		int arr[] = { 222222, 222222 };
//		int arr[] = { 0 };
//		int arr[] = { 3, 1 };
//		int arr[] = {10, 5, 3, 4, 3, 5, 6};
		

		System.out.print(containsDuplicate(arr));
	}

	// solution based on HashSet
	public static boolean containsDuplicate4(int[] nums) {
		// Basic error checking
		if (nums == null || nums.length < 2) {
			return false;
		}
		HashSet<Integer> set = new HashSet<Integer>();
		for (int i = 0; i < nums.length; i++) {
			if (set.contains(nums[i])) {
				return true;
			} else {
				set.add(nums[i]);
			}
		}
		return false;
	}

	// ising distinct
	/*
	 * public static boolean containsDuplicate2(int[] nums) { return nums.length
	 * != IntStream.of(nums).distinct().count(); }
	 */

	// using sort
	public static boolean containsDuplicate3(int[] nums) {
		// Basic error checking
		if (nums == null || nums.length < 2) {
			return false;
		}
		int i;
		Arrays.sort(nums);
		for (i = 0; i < nums.length - 1; i++) {
			if (nums[i] == nums[i + 1])
				return true;
		}
		return false;
	}

	// Using Bitwise but no good for very big numbers
	public static boolean containsDuplicate(int[] nums) {
		// Basic error checking
		if (nums == null || nums.length < 2) {
			return false;
		}

		int checker = 0;
		for (int i = 0; i < nums.length; ++i) {
			final int val = nums[i] - '1'; // ascii 47
			if ((checker | 1 << val) > 0) { // the bit flag to be check with the
											// new char bit position (1 <<
											// because 'a' value bit is 0)
				return true;
			} // checker represent the bit flag mask to be check and working as
				// a data structure for store the chars
			checker <<= val; // checker = checker | 1 << val // checker <-
								// checker or (+) char bit position
		}
		return false;
	}
}
