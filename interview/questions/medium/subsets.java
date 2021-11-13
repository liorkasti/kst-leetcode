package leetcode.interview.questions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class subsets {

	public static void main(String[] args) {
		 int[] mySet = {1,2,3};
		 subsets(mySet);
//		 System.out.println(subsets(mySet));
	}
	
    public static List<List<Integer>> subsets(int[] nums) {
    	
        int max = 1 << nums.length; // 2^n
        List<List<Integer>> allSubsets = new ArrayList<>();
        
        for(int i=0; i<max; i++) {
            ArrayList subSets = new ArrayList();
            int k = i;
            int index = 0;
            while(k > 0) {
                if((k&1) > 0) {
                    subSets.add(nums[index]);
                }
                k >>= 1;
                ++index;
            }
			System.out.println(subSets);
            allSubsets.add(subSets);
        }
        
        return allSubsets;
        
    }
    
/*    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        generateSubSets(result, new ArrayList<>(), nums, 0);
        return result;
    }
    
    static void generateSubSets(List<List<Integer>> result, List tempList, int[] nums, int start){
        if(nums.length == start){
            result.add(new ArrayList<>(tempList));    
            return;
        }
        tempList.add(nums[start]);
        generateSubSets(result, tempList, nums, start+1);
        tempList.remove(tempList.size()-1);
        generateSubSets(result, tempList, nums, start+1);
    }*/

}
