package interview.questions.easy.array;

import java.util.Stack;

public class plusOne {

	public static void main(String[] args) {

//		int arr[] = { 4, 3, 2, 1 };
		int arr[] = { 9,9,9 };
		
		int newArr[] = plusOne(arr);
//		int newArr[] = plusOneStack(arr);

		for (int i = 0; i < newArr.length; i++)
			System.out.print(newArr[i]);
	}
	
	/*	
    Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

	The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

	You may assume the integer does not contain any leading zero, except the number 0 itself.

	Example 1:

	Input: [1,2,3]
	Output: [1,2,4]
	Explanation: The array represents the integer 123.
	Example 2:

	Input: [4,3,2,1]
	Output: [4,3,2,2]
	Explanation: The array represents the integer 4321.
	*/
	public static int[] plusOne(int[] digits) {

		for (int i = digits.length - 1; i >= 0; i--) {
			if (digits[i] < 9) {
				digits[i]++;
				return digits;
			}
			digits[i] = 0;
		}

		int[] newDigits = new int[digits.length + 1];
		newDigits[0] = 1;

		return newDigits;
	}

	public static int[] plusOneStack(int[] digits) {
		int carry = 1;
		Stack<Integer> stack = new Stack<>();
		for (int i = digits.length - 1; i >= 0; i--) {
			int temp = digits[i] + carry;
			carry = temp / 10;
			stack.push(temp % 10);
		}
		if (carry > 0) {
			stack.push(carry);
		}
		int[] list = new int[stack.size()];
		int i = 0;
		while (!stack.isEmpty()) {
			list[i++] = stack.pop();
		}
		return list;
	}
}
