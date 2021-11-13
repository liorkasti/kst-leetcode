package leetcode.interview.questions.easy.array;

import java.util.HashMap;
import java.util.Map;

public class twoSum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[] = { 2, 7, 11, 15 };
		int target = 9;

		int newArr[] = twoSum2(arr, target);

		System.out.print('[');
		for (int i = 0; i < newArr.length; i++) {

			System.out.print(newArr[i]);
			if (i < newArr.length - 1)
				System.out.print(',');
		}
		System.out.print(']');
	}

	/*
	 * Given an array of integers, return indices of the two numbers such that they
	 * add up to a specific target.
	 * 
	 * You may assume that each input would have exactly one solution, and you may
	 * not use the same element twice.
	 * 
	 * Example:
	 * 
	 * Given nums = [2, 7, 11, 15], target = 9,
	 * 
	 * Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
	 */
	// Memory Usage SOl:
	public static int[] twoSum(int[] nums, int target) {

		for (int slow = 0; slow < nums.length; slow++) {
			for (int fast = slow + 1; fast < nums.length; fast++) {
				if (nums[slow] + nums[fast] == target) {

					return new int[] { slow, fast };
				}
			}
		}
		throw new IllegalArgumentException("No atch found");
	}

	// Runtime SOl:
	public static int[] twoSum2(int[] nums, int target) {

		Map<Integer, Integer> num_map = new HashMap<>();

		for (int i = 0; i < nums.length; i++) {
			int complement = target - nums[i];

			if (num_map.containsKey(complement)) {
				return new int[] { num_map.get(complement), i };
			}
			num_map.put(nums[i], i);
		}

		throw new IllegalArgumentException("No atch found");
	}
}
