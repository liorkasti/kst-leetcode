<<<<<<< HEAD
package interview.questions.medium;

import java.util.*;

public class Permutations {

	// Driver code
	public static void main(String[] args) {
		// int a[] = { 1, 2, 3 };
		// int a[] = { 1, 2, 2 };
		int a[] = { 1, 1 };
		System.out.println(permuteUnique2(a));
		// System.out.println(permuteUnique(a));
	}

	public static List<List<Integer>> permuteUnique2(int[] nums) {
		LinkedList<List<Integer>> result = new LinkedList<>();
		result.add(new ArrayList<>());
		for (int i = 0; i < nums.length; i++) {
			Set<String> cache = new HashSet<>();
			while (result.peekFirst().size() == i) {
				List<Integer> l = result.removeFirst();
				for (int j = 0; j <= l.size(); j++) {
					List<Integer> permutation = new ArrayList<>(l.subList(0, j));
					permutation.add(nums[i]);
					permutation.addAll(l.subList(j, l.size()));
					if (cache.add(permutation.toString()))
						result.add(permutation);
				}
			}
		}
		return result;
	}

	// Given a collection of distinct integers, return all possible permutations.
	public static List<List<Integer>> permute(int[] nums) {
		int set = 0;
		List<List<Integer>> permutations = new ArrayList<>();
		List<Integer> perm = new ArrayList<>(nums.length);
		permute(nums, set, perm, permutations);

		return permutations;
	}

	private static void permute(int[] nums, int set, List<Integer> perm, List<List<Integer>> permutations) {
		if (perm.size() == nums.length) {
			if (!isExist(permutations, perm)) {
				System.out.println(isExist(permutations, perm));
				System.out.println(perm);
				permutations.add(new ArrayList<Integer>(perm));
			}
			return;
		}
		for (int i = 0; i < nums.length; i++) {
			if ((set & (1 << i)) == 0) { // set is a bitmask, 1<<i is a bit set to 1 at index i in set and 0 otherwise.
				set |= (1 << i); // set the bit at i position to 1 and set the bit at i+1 position to 0 and so
									// on.
				System.out.println(set);
				perm.add(nums[i]);
				permute(nums, set, perm, permutations);
				set &= ~(1 << i); // set the bit at i position to 0 and set the bit at i+1 position to 1 and so
									// on.
				perm.remove(perm.size() - 1);
			}
		}
	}

	public static List<List<Integer>> permuteUnique(int[] nums) {

		List<List<Integer>> permutations = new ArrayList<>();
		if (nums.length == 0) {
			return new ArrayList<>();
		}

		collectPermutations(nums, 0, new ArrayList<>(), permutations);
		return permutations;
	}

	private static void collectPermutations(int[] nums, int start, List<Integer> permutation,
			List<List<Integer>> permutations) {

		if (permutation.size() == nums.length) {
			if (!isExist(permutations, permutation)) {
				permutations.add(permutation);
			}
			return;
		}

		for (int i = 0; i <= permutation.size(); i++) {
			List<Integer> newPermutation = new ArrayList<>(permutation);
			newPermutation.add(i, nums[start]);
			collectPermutations(nums, start + 1, newPermutation, permutations);
		}
	}

	// Function that returns true if string 's' is present in the Arraylist
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
=======
package interview.questions.medium;

import java.util.*;

public class Permutations {

	// Driver code
	public static void main(String[] args) {
		// int a[] = { 1, 2, 3 };
		// int a[] = { 1, 2, 2 };
		int a[] = { 1, 1 };
		System.out.println(permuteUnique2(a));
		// System.out.println(permuteUnique(a));
	}

	public static List<List<Integer>> permuteUnique2(int[] nums) {
		LinkedList<List<Integer>> result = new LinkedList<>();
		result.add(new ArrayList<>());
		for (int i = 0; i < nums.length; i++) {
			Set<String> cache = new HashSet<>();
			while (result.peekFirst().size() == i) {
				List<Integer> l = result.removeFirst();
				for (int j = 0; j <= l.size(); j++) {
					List<Integer> permutation = new ArrayList<>(l.subList(0, j));
					permutation.add(nums[i]);
					permutation.addAll(l.subList(j, l.size()));
					if (cache.add(permutation.toString()))
						result.add(permutation);
				}
			}
		}
		return result;
	}

	// Given a collection of distinct integers, return all possible permutations.
	public static List<List<Integer>> permute(int[] nums) {
		int set = 0;
		List<List<Integer>> permutations = new ArrayList<>();
		List<Integer> perm = new ArrayList<>(nums.length);
		permute(nums, set, perm, permutations);

		return permutations;
	}

	private static void permute(int[] nums, int set, List<Integer> perm, List<List<Integer>> permutations) {
		if (perm.size() == nums.length) {
			if (!isExist(permutations, perm)) {
				System.out.println(isExist(permutations, perm));
				System.out.println(perm);
				permutations.add(new ArrayList<Integer>(perm));
			}
			return;
		}
		for (int i = 0; i < nums.length; i++) {
			if ((set & (1 << i)) == 0) { // set is a bitmask, 1<<i is a bit set to 1 at index i in set and 0 otherwise.
				set |= (1 << i); // set the bit at i position to 1 and set the bit at i+1 position to 0 and so
									// on.
				System.out.println(set);
				perm.add(nums[i]);
				permute(nums, set, perm, permutations);
				set &= ~(1 << i); // set the bit at i position to 0 and set the bit at i+1 position to 1 and so
									// on.
				perm.remove(perm.size() - 1);
			}
		}
	}

	public static List<List<Integer>> permuteUnique(int[] nums) {

		List<List<Integer>> permutations = new ArrayList<>();
		if (nums.length == 0) {
			return new ArrayList<>();
		}

		collectPermutations(nums, 0, new ArrayList<>(), permutations);
		return permutations;
	}

	private static void collectPermutations(int[] nums, int start, List<Integer> permutation,
			List<List<Integer>> permutations) {

		if (permutation.size() == nums.length) {
			if (!isExist(permutations, permutation)) {
				permutations.add(permutation);
			}
			return;
		}

		for (int i = 0; i <= permutation.size(); i++) {
			List<Integer> newPermutation = new ArrayList<>(permutation);
			newPermutation.add(i, nums[start]);
			collectPermutations(nums, start + 1, newPermutation, permutations);
		}
	}

	// Function that returns true if string 's' is present in the Arraylist
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
>>>>>>> origin/master
