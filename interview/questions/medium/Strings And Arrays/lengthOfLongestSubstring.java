package interview.questions.medium;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;

class Solution {
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(sol2LengthOfLongestSubstring("abcaa"));
    }

    public static int lengthOfLongestSubstring(String s) {
        int slowP = 0;
        int fastP = 0;
        int max = 0;
        Set<Character> set = new HashSet<>();
        while (fastP < s.length()) {
            if (!set.contains(s.charAt(fastP))) {
                set.add(s.charAt(fastP));// add the character to the set
                fastP++;// increment the end pointer
                max = Math.max(set.size(), max);
            } else {
                set.remove(s.charAt(slowP));
                slowP++;
            }
        }

        return max;
    }

    static public int sol2LengthOfLongestSubstring(String s) {

        // unique arrayList to keep track of substrings (for easy debugging)
        ArrayList<String> unique = new ArrayList();

        // set to store letters and check for duplication
        Set<Character> set = new HashSet<>();

        int i = 0;
        int j = 0;

        // distance variable to keep track of distance between i and j
        int distance = 0;

        while (i < s.length() && j < s.length()) {

            // if no duplicate, widen the window: extend "j" while fixing "i"
            if (!set.contains(s.charAt(j))) {
                set.add(s.charAt(j));
                distance = Math.max(distance, j - i + 1);
                unique.add(s.substring(i, j + 1));
                j++;

            }

            // if duplicate, keep removing from left side "using the i index" till you get rid of that initial 
            // letter causing duplication in other words, shorten the window by moving i to right while fixing j
            else {
                set.remove(s.charAt(i));
                i++;
            }
        }

        return distance;
    }
}