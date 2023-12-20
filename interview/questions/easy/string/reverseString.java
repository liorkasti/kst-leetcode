package interview.questions.easy.string;

public class reverseString {

	public static void main(String[] args) {

		char[] s = {'h','e','l','l','o'};
		
		reverse(s);
		
//		System.out.println(s);
		for (int i = 0; i < s.length; i++) {
			System.out.print(s[i] + " ");
		}
	}

	/*
	Write a function that reverses a string. The input string is given as an array of characters char[].
	Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.	
	You may assume all the characters consist of printable ascii characters.	
	Example 1:
	Input: ["h","e","l","l","o"]
	Output: ["o","l","l","e","h"]
	Example 2:
	Input: ["H","a","n","n","a","h"]
	Output: ["h","a","n","n","a","H"]
	*/
	public static void reverse(char[] s) {
		
        int left=0;
        int right=s.length-1;
        while(left<right){
            s[left]^=s[right];
            s[right]^=s[left];
            s[left]^=s[right];
            left++; right--;
        }
	}
}
