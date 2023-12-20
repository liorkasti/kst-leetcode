package interview.questions.medium;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public static void main(String[] args) {
        int[] mySet = { 1, 2, 3 };
        subsets(mySet);
        System.out.println(subsets(mySet));
    }

    public static List<List<Integer>> subsets(int[] nums) {
        int max = 1 << nums.length; //set size = 2^n where n is the number of elements in the set (2^n is the number of subsets).
        System.out.println(max);
        List<List<Integer>> allSubsets = new ArrayList<>();

        for (int i = 0; i < max; i++) {
            List subSets = new ArrayList();
            int k = i;
            int index = 0;
            while (k > 0) {
                if ((k & 1) > 0) {// the bitwise AND of k and 1 is 1 if the least significant bit of k is 1, and 0 otherwise.
                    subSets.add(nums[index]);
                }
                k >>= 1;// right shift k by 1 bit, discarding the least significant bit.
                ++index;
            }
            System.out.println(subSets);
            allSubsets.add(subSets);
        }

        return allSubsets;
    }

    /*
     * public static List<List<Integer>> subsets(int[] nums) { List<List<Integer>>
     * result = new ArrayList<>(); generateSubSets(result, new ArrayList<>(), nums,
     * 0); return result; }
     * 
     * static void generateSubSets(List<List<Integer>> result, List tempList, int[]
     * nums, int start){ if(nums.length == start){ result.add(new
     * ArrayList<>(tempList)); return; } tempList.add(nums[start]);
     * generateSubSets(result, tempList, nums, start+1);
     * tempList.remove(tempList.size()-1); generateSubSets(result, tempList, nums,
     * start+1); }
     */

}
