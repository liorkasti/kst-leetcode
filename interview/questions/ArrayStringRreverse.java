package interview.questions;

public class ArrayStringRreverse {

	public static void main(String[] args) {

		String example1 = "hello";
		String example2 = "hannoh";

		char[] s1 = example1.toCharArray();
		char[] s2 = example2.toCharArray();

		
		reverseString(s1);
		System.out.println();
		reverseString(s2);
		System.out.println("\n");

//		System.out.print('[');
//		printReverse(s1);
//		System.out.print(']');
//		
//		System.out.println();
//		
//		System.out.print('[');
//		printReverse(s2);
//		System.out.print(']');
	}

	/*
	 * Example 1: Input: ["h","e","l","l","o"] Output: ["o","l","l","e","h"]
	 * Example 2: Input: ["H","a","n","n","a","h"] Output:
	 * ["h","a","n","n","a","H"]
	 */
    public static void reverseString(char[] s) {
        reverse(0, s.length-1,s);
		System.out.print('[');
		System.out.print(s);
		System.out.print(']');
    }

	private static void reverse(int start, int end, char[] str) {
		if (start >= end) {
			return;
		}
        char temp = str[start];
        str[start] = str[end];
        str[end] = temp;
		reverse(start + 1, end - 1, str);
	}
	
	private static void printReverse(char[] str) {
		helper(0, str);
	}

	private static void helper(int index, char[] str) {
		if (str == null || index > str.length - 1) {
			return;
		}
		helper(index + 1, str);
		System.out.print('"');
		System.out.print(str[index]);
			System.out.print('"');
			System.out.print(",");
	}

}
