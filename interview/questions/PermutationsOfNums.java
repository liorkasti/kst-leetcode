package leetcode.interview.questions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PermutationsOfNums {

	// Driver code
	public static void main(String[] args) {

		int a[] = { 1, 2, 3 };
		permute(a);
//		System.out.println(permute(a));
	}

	/**
	 * Given a collection of distinct integers, return all possible
	 * permutations.
	 */
//	private static List<List<Integer>> res = new ArrayList<>();

	public static List<List<Integer>> permute(int[] nums) {
	    int set = 0;
	    List<List<Integer>> permutations = new ArrayList<>();
	    List<Integer> perm = new ArrayList<>(nums.length);
	    permute(nums, set, perm, permutations);
	    
	    return permutations;
	}

	private static void permute(int[] nums, int set, List<Integer> perm, List<List<Integer>> permutations) {
	    if (perm.size() == nums.length) {
	    	permutations.add(new ArrayList<Integer>(perm));
	        System.out.println(perm);
	        return;
	    }
	    for (int i = 0; i < nums.length; i++) {
	        if ((set & (1 << i)) == 0) {
	            set |= (1 << i);
	            perm.add(nums[i]);
	            permute(nums, set, perm, permutations);
	            set &= ~(1 << i);
	            perm.remove(perm.size()-1);
	        }
	    }
	}
/*	public static List<List<Integer>> permute(int[] nums) {
		
		List<List<Integer>> permutations = new ArrayList<>();
		if (nums.length == 0) {
			return new ArrayList<>();
		}

		collectPermutations(nums, 0, new ArrayList<>(), permutations);
		return permutations;
	}

	private static void collectPermutations(int[] nums, int start, List<Integer> permutation,
			List<List<Integer>> permutations) {

		if (permutation.size() == nums.length) { // && (!isExist(permutations, permutation))) {
			permutations.add(permutation);
			System.out.println(permutation);
			return;
		}

		for (int i = 0; i <= permutation.size(); i++) {
			List<Integer> newPermutation = new ArrayList<>(permutation);
			newPermutation.add(i, nums[start]);
			collectPermutations(nums, start + 1, newPermutation, permutations);
		}
	}*/

	// Function that returns true if string s
	// is present in the Arraylist
	static boolean isExist(List<List<Integer>> permutations, List<Integer> permutation) {

		if (permutations.size() < 2)
			return false;

		// If present then return true
		for (List<Integer> p : permutations) {
			if (Arrays.deepEquals(p.toArray(), permutation.toArray()))
				return true;
		}
		return false;
	}

}
