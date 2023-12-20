package interview.questions.easy.array;

public class singleNumber {

	public static void main(String[] args) {

//		int arr[] = { 2, 2, 1 };
		 int arr[] = { 4,1,2,1,2 };
		// int arr[] = { 2, 2, 1, 1, 3 };
		System.out.println(singleNumber(arr));
	}

	/*
	 * Given a non-empty array of integers, every element appears twice except
	 * for one. Find that single one.
	 * Note:
	 * Your algorithm should have a linear runtime complexity. Could you
	 * implement it without using extra memory?
	 * Example 1:
	 * Input: [2,2,1] Output: 1 
	 * Example 2:
	 * Input: [4,1,2,1,2] Output: 4
	 */
	public static int singleNumber(final int[] nums) {

		int single = 0;
		for (int i = 0; i < nums.length; i++) {
			single ^= nums[i];// XOR
		}
		return single;
	}
	
	public static int singleNumber1(final int[] nums) {

		// inspired by logical circuit design and boolean algebra;
		// counter - unit of 3;
		// current incoming next
		// a b c a b
		// 0 0 0 0 0
		// 0 1 0 0 1
		// 1 0 0 1 0
		// 0 0 1 0 1
		// 0 1 1 1 0
		// 1 0 1 0 0
		// a = a&~b&~c + ~a&b&c;
		// b = ~a&b&~c + ~a&~b&c;
		// return a|b since the single number can appear once or twice;
		int t = 0, a = 0, b = 0;
		for (int i = 0; i < nums.length; ++i) {
			t = (a & ~b & ~nums[i]) | (~a & b & nums[i]);
			b = (~a & b & ~nums[i]) | (~a & ~b & nums[i]);
			a = t;
		}
		return a | b;
	}
	
	public static int singleNumber2(final int[] nums) {
        int p = 0;  
        int q = 0;  
        for(int i = 0; i<nums.length; i++){  
           p = q & (p ^ nums[i]);  
           q = p | (q ^ nums[i]);  
        }  
        return q;  
	}

	public static int singleNumber3(final int[] nums) {

		int ones = 0, twos = 0;
		int common_bit_mask;
		for (int i = 0; i < nums.length - 1; i++) {
			/*
			 * "one & arr[i]" gives the bits that are there in both 'ones' and
			 * new element from arr[]. We add these bits to 'twos' using bitwise
			 * OR
			 */
			twos = twos | (ones & nums[i]);

			/*
			 * "one & arr[i]" gives the bits that are there in both 'ones' and
			 * new element from arr[]. We add these bits to 'twos' using bitwise
			 * OR
			 */
			ones = ones ^ nums[i];

			/*
			 * The common bits are those bits which appear third time So these
			 * bits should not be there in both 'ones' and 'twos'.
			 * common_bit_mask contains all these bits as 0, so that the bits
			 * can be removed from 'ones' and 'twos'
			 */
			common_bit_mask = ~(ones & twos);

			/*
			 * Remove common bits (the bits that appear third time) from 'ones'
			 */
			ones &= common_bit_mask;

			/*
			 * Remove common bits (the bits that appear third time) from 'twos'
			 */
			twos &= common_bit_mask;
		}
		return ones;
	}
}
