package interview.questions.easy.array;

public class removeDuplicates {

	public static void main(String[] args) {

		int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
		System.out.println(removeDuplicates(nums));
	}

	/*
	 * Given a sorted array nums, remove the duplicates in-place such that each
	 * element appear only once and return the new length.
	 * 
	 * Do not allocate extra space for another array, you must do this by
	 * modifying the input array in-place with O(1) extra memory.
	 * 
	 * Example 1:
	 * 
	 * Given nums = [1,1,2],
	 * 
	 * Your function should return length = 2, with the first two elements of
	 * nums being 1 and 2 respectively.
	 * 
	 * It doesn't matter what you leave beyond the returned length. Example 2:
	 * 
	 * Given nums = [0,0,1,1,1,2,2,3,3,4],
	 * 
	 * Your function should return length = 5, with the first five elements of
	 * nums being modified to 0, 1, 2, 3, and 4 respectively.
	 * 
	 * It doesn't matter what values are set beyond the returned length.
	 */
	public static int removeDuplicates(int[] nums) {

		if (nums == null || nums.length == 0)
			return 0;

		if (nums.length == 1)
			return 1;

		int[] temp;
		int slow = 0, fast = 1, len = nums.length;

		while (fast < len) {
			if (nums[fast] != nums[slow]) {
				nums[++slow] = nums[fast];
			}
			fast++;
		}
		return slow + 1;
	}

}
