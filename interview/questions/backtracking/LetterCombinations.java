package leetcode.interview.questions.backtracking;

import java.util.ArrayList;
import java.util.List;

public class LetterCombinations {

	public static void main(String[] args) {

		System.out.println(letterCombinations2(""));
		System.out.println(letterCombinations2("2"));
		System.out.println(letterCombinations2("23"));
		System.out.println(letterCombinations("234"));

	}

	/*
	 * Given a string containing digits from 2-9 inclusive, return all possible
	 * letter combinations that the number could represent.
	 * Example:
	 * Input: "23" 
	 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
	 */
	public static List<String> letterCombinations(String digits) {
                
        if(digits.length() == 0 || digits == null) 
            return new ArrayList();

        List<String> result = new ArrayList<>();

        helper("", digits, 0, result);
        
        return result;
    }

	private static void helper(String prefix, String digits, int offset, List<String> result) {

		if (offset >= digits.length()) {
//			System.out.println(prefix);
			result.add(prefix);
			return;
		}
		
		String letters = KEYS[digits.charAt(offset) - '0'];
		for (int i = 0; i < letters.length(); i++) {
			helper(prefix + letters.charAt(i), digits, offset + 1, result);
		}
	}
	
	private static final String[] KEYS = { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };

	public static List<String> letterCombinations2(String digits) {
	    	
        List<String> list = new ArrayList<>();
        
        if(digits.length() == 0) return list;
        
        helper(digits, 0, new StringBuilder(), list);
        
        return list;
    }
    private static void helper(String digits, int i, StringBuilder sb, List<String> list){
        if(i == digits.length()){
            list.add(new String(sb));
            return;
        }
        String str = KEYS[digits.charAt(i)-'0'];
        for(int j=0; j < str.length(); j++){
            sb.append(str.charAt(j));
            helper(digits, i+1, sb, list);
            sb.setLength(sb.length()-1);
        }
    }
}
