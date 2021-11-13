package interview.questions.easy.array;

public class moveZeroes {

	public static void main(String[] args) {

//		int arr[] = { 0, 1, 0, 3, 12 };
		int arr[] = { 0, 1, 0, 0, 0, 9, 10, 456, 1, 56, 12, 0 };

		moveZeroes(arr);

		System.out.print('[');
		for (int i = 0; i < arr.length; i++) {

			System.out.print(arr[i]);
			if (i < arr.length - 1)
				System.out.print(',');
		}
		System.out.print(']');
	}
	/*
	Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
	
		Example:
	
		Input: [0,1,0,3,12]
		Output: [1,3,12,0,0]
		Note:
	
		You must do this in-place without making a copy of the array.
		Minimize the total number of operations.
		*/
	public static void moveZeroes(int[] nums) {
		if (nums == null || nums.length < 2) {
			return;
		}

		int anchore = 0;

		for (int explorer = 0; explorer < nums.length; explorer++) {
			if (nums[explorer] != 0) {
				int temp = nums[anchore];
				nums[anchore] = nums[explorer];
				nums[explorer] = temp;

				anchore++;
			}
		}
	}

	public static void moveZeroes2(int[] nums) {
		int j = 0;
		int i = 0;
		if (nums.length > 2) {
			while (j < nums.length && i < nums.length) {
				if (nums[i] != 0) {
					i++;
					j++;
				} else {
					if (nums[j] != 0) {
						int tmp = nums[i];
						nums[i] = nums[j];
						nums[j] = tmp;
					} else {
						j++;
					}
				}
			}
		}
	}

	public static void moveZeroes3(int[] nums) {
		int j = 0;
		int i = 0;
		if (nums.length > 2) {
			while (j < nums.length && i < nums.length) {
				if (nums[i] != 0) {
					i++;
					j++;
				} else {
					if (nums[j] != 0) {
						int tmp = nums[i];
						nums[i] = nums[j];
						nums[j] = tmp;
					} else {
						j++;
					}
				}
			}
		}
	}
}
