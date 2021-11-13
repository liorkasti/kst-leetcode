package leetcode.interview.questions.easy.array;

import java.util.Arrays;
import java.util.HashSet;
import java.util.stream.IntStream;

public class containsDuplicate {
	/*
	 * Given an array of integers, find if the array contains any duplicates.
	 * 
	 * Your function should return true if any value appears at least twice in
	 * the array, and it should return false if every element is distinct.
	 * 
	 * Example 1:
	 * 
	 * Input: [1,2,3,1] Output: true Example 2:
	 * 
	 * Input: [1,2,3,4] Output: false Example 3:
	 * 
	 * Input: [1,1,1,3,3,4,3,2,4,2] Output: true
	 */
	public static void main(String[] args) {

//		int arr[] = { 10, 5, 3, 4, 3, 5, 6 };
		int arr[] = { 10, -5, 3, 4, -3, 5, 6 };
//		int arr[] = {1, 2, 2, 4, 5};
//		int arr[] = { 222222, 222222 };
//		int arr[] = { 0 };
//		int arr[] = { 3, 1 };
//		int arr[] = {10, 5, 3, 4, 3, 5, 6};
		
//		if (checkDuplicatesWithinK3(arr,5))
		if (containsDuplicate4(arr))
			System.out.println("Yes");
		else
			System.out.println("No");
	}

	// ising distinct

	// using sort
	//	Time complexity: O(n log n)
	//	Space complexity: O(1)*
	public static boolean containsDuplicate1(int[] nums) {
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
	// solution based on HashSet
	public static boolean containsDuplicate2(int[] nums) {
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
	// HashSet SOL:
	/*Check if a given array contains duplicate elements within k distance from each other
	Given an unsorted array that may contain duplicates. Also given a number k which is smaller than size of array. Write a function that returns true if array contains duplicates within k distance.
	Examples:

	Input: k = 3, arr[] = {1, 2, 3, 4, 1, 2, 3, 4}
	Output: false
	All duplicates are more than k distance away.

	Input: k = 3, arr[] = {1, 2, 3, 1, 4, 5}
	Output: true
	1 is repeated at distance 3.

	Input: k = 3, arr[] = {1, 2, 3, 4, 5}
	Output: false

	Input: k = 3, arr[] = {1, 2, 3, 4, 4}
	Output: true*/
	static boolean checkDuplicatesWithinK3(int arr[], int k) {
		// Creates an empty hashset
		HashSet<Integer> set = new HashSet<>();

		// Traverse the input array
		for (int i = 0; i < arr.length; i++) {
			// If already present n hash, then we found
			// a duplicate within k distance
			if (set.contains(arr[i]))
				return true;

			// Add this item to hashset
			set.add(arr[i]);

			// Remove the k+1 distant item
			if (i >= k)
				set.remove(arr[i - k]);
		}
		return false;
	}
	// Using Bitwise but no good for very big numbers
	public static boolean containsDuplicate4(int[] nums) {
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
	//Another BIT_SIZE SOL
	public static boolean containsDuplicate5(int[] nums) {

		int BIT_SIZE = 32;
		int[] posMark = new int[Integer.MAX_VALUE / BIT_SIZE + 1];
		int[] negMark = new int[Integer.MAX_VALUE / BIT_SIZE + 1];
		for (int n : nums) {
			boolean sign = n >= 0;
			int hash = Math.abs(n) / BIT_SIZE;
			int index = Math.abs(n) % BIT_SIZE;
			int check = 1 << index;
			if ((sign && (posMark[hash] & check) != 0) || (!sign && (negMark[hash] & check) != 0))
				return true;
			if (sign) {
				posMark[hash] |= check;
			} else {
				negMark[hash] |= check;
			}

		}
		return false;
	}
	//ONE Line Sol Calling IntStream
	 public static boolean containsDuplicate6(int[] nums) { 
		 return nums.length != IntStream.of(nums).distinct().count(); 
		 }
}
