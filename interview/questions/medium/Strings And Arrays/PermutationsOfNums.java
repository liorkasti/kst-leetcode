package interview.questions.medium;

import java.util.ArrayList;
import java.util.List;

public class PermutationsOfNums {

    // Driver code
    public static void main(String[] args) {
        // int a[] = { 1, 2, 2 };
        int[] a = { 1,1,2 };
        System.out.println(permute(a));
    }

    /**
     * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
     */
    public static List<List<Integer>> permute(int[] nums) {

        if (nums == null || nums.length == 0)
            return new ArrayList<>();

        List<List<Integer>> finalResult = new ArrayList<>();
        permuteRecur(nums, finalResult, new ArrayList<>(), new boolean[nums.length]);        
        return finalResult;
    }

    private static void permuteRecur(int[] nums, List<List<Integer>> finalResult, List<Integer> currResult,
            boolean[] used) {

        if (currResult.size() == nums.length) {
            finalResult.add(new ArrayList<>(currResult));
            // System.out.println(currResult);
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i])
                continue;
            currResult.add(nums[i]);
            used[i] = true;
            permuteRecur(nums, finalResult, currResult, used);
            used[i] = false;
            currResult.remove(currResult.size() - 1);
        }
    }

    // Function that returns true if string 's' is present in the Arraylist
    static boolean isExist(List<List<Integer>> res, int[] nums) {
        // If present then return true
        for (List<Integer> i : res) {
            if (i.equals(nums))
                return true;
        }
        return false;
    }
}
