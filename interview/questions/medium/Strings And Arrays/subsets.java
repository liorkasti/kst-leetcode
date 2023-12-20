package interview.questions.medium;

import java.util.*;

public class subsets {

    public static void main(String[] args) {
        int[] mySet = { 1, 2, 3 };
        System.out.println(subsetsRec(mySet));
    }

    public static List<List<Integer>> subsetsRec(int[] nums) {
        List<List<Integer>> subsets = new ArrayList<>();
        backtrack(subsets, new ArrayList<>(), nums, 0);
        return subsets;
    }

    private static void backtrack(List<List<Integer>> subsets, List<Integer> tempList, int[] nums, int start) {
        subsets.add(new ArrayList<>(tempList));
        for (int i = start; i < nums.length; i++) {
            tempList.add(nums[i]);
            backtrack(subsets, tempList, nums, i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }

    public static List<List<Integer>> subsetsIter(int[] nums) {

        int max = 1 << nums.length; // 2^n
        List<List<Integer>> allSubsets = new ArrayList<>();

        for (int i = 0; i < max; i++) {
            ArrayList subSets = new ArrayList();
            int k = i;
            int index = 0;
            while (k > 0) {
                if ((k & 1) > 0) {
                    subSets.add(nums[index]);
                }
                k >>= 1;
                ++index;
            }
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
