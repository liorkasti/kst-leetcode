package interview.questions.easy.string;

import java.util.HashMap;
import java.util.Map;

public class firstUniqChar {

	public static void main(String[] args) {

		// String s = "leetcode";
		// String s = "loveleetcode";
		// String s = "eee";
		// String s = "e";
		// String s = "es";
		String s = "ccg";

		System.out.println(firstUniqChar(s));
	}

	/*
	 * Given a string, find the first non-repeating character in it and return it's
	 * index. If it doesn't exist, return -1.
	 * 
	 * Examples:
	 * 
	 * s = "leetcode"
	 * return 0.
	 * 
	 * s = "loveleetcode",
	 * return 2.
	 * Note: You may assume the string contain only lowercase letters.
	 */
	/**
	 * @param {string} s
	 * @return {number}
	 */
	// JAVA SOL:
	public static int firstUniqChar(String s) {
		if (s == null || s.isEmpty()) {
			throw new IllegalArgumentException("Input string must exist or be non-empty.");
		}
		int[][] counts = new int[26][2];
		char[] chs = s.toCharArray();
		for (int i = 0; i < chs.length; i++) {
			int idx = chs[i] - 'a';
			if (counts[idx][0] == 0) {
				counts[idx][1] = i;
			}
			counts[idx][0]++;
		}

		int minIdx = Integer.MAX_VALUE;
		for (int[] c : counts) {
			if (c[0] == 1 && c[1] < minIdx) {
				minIdx = c[1];
			}
		}
		return minIdx == Integer.MAX_VALUE ? -1 : minIdx;
	}

	// Another Sol less faster:
	public static int firstUniqChar1(String s) {
		Map<Character, Integer> charMap = new HashMap<>();
		for (Character c : s.toCharArray()) {
			charMap.put(c, charMap.getOrDefault(c, 0) + 1);
		}

		for (Character c : s.toCharArray()) {
			if (charMap.get(c) == 1) {
				return s.indexOf(c);
			}
		}
		return -1;
	}

	// My Sol: Falling for Edge case: s = "ccg"
	public static int firstUniqChar2(String s) {

		if (s == null || s.isEmpty()) {
			throw new IllegalArgumentException("Input string must exist or be non-empty.");
		}

		if (s.length() == 1) {
			return 0;
		}

		int slow = 0, resault = -1;

		while (slow < s.length() - 1) {
			int fast = slow + 1;
			while (slow < fast) {
				if (fast == s.length())
					break;
				if (s.charAt(slow) == s.charAt(fast)) {
					fast = fast + 1;
					slow = slow + 1;
					resault = -1;
					continue;
				} else {
					if (s.charAt(slow) != s.charAt(fast)) {
						resault = slow;
					}
				}
				if (fast < s.length() - 1)
					fast++;
				else
					break;
			}
			if (slow < s.length() - 2)
				break;
			slow++;
		}

		return resault;
	}

	// Falling for Edge case: s = "ccg"
	public static int firstUniqChar3(String s) {

		if (s == null || s.isEmpty()) {
			throw new IllegalArgumentException("Input string must exist or be non-empty.");
		}

		if (s.length() == 1) {
			return 0;
		}

		Map<Character, Integer> map = new HashMap<Character, Integer>();
		for (int i = 0; i < s.length(); i++) {
			char current = s.charAt(i);
			if (!map.containsKey(i)) {
				map.put(current, i);
			} else {
				map.put(current, -1);
			}
		}

		int min = Integer.MAX_VALUE;
		for (char c : map.keySet()) {
			if (map.get(c) > -1 && map.get(c) < min)
				min = map.get(c);
		}

		return min == Integer.MAX_VALUE ? -1 : min;
	}
}
