package interview.questions.easy.array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class intersect {

	/*
	Given two arrays, write a function to compute their intersection.
	Example 1:
	Input: nums1 = [1,2,2,1], nums2 = [2,2]
	Output: [2,2]
	Example 2:
	Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
	Output: [4,9]
	*/
	public static void main(String[] args) {

		int[] nums1 = { 1,2,2,1 };
		int[] nums2 = { 2,2 };
		System.out.println(Arrays.toString(intersect(nums1, nums2)));
	}

	//O(3n) using 2 Lists
    public static int[] intersect1(int[] nums1, int[] nums2) {
        List<Integer> list=new ArrayList<>();
        List<Integer> relt=new ArrayList<>();
        for(Integer i:nums1) list.add(i);
        for(Integer i:nums2){
            if(list.contains(i)){
                relt.add(i);
                list.remove(list.indexOf(i));
            }
        }
        // convert List to to Array
        int[] re=new int[relt.size()];
        for(int i=0;i<relt.size();i++){
            re[i]=relt.get(i);
        }
       return re;
    }
	//MY sol using sort and 4 pointers O(nlog(n))
    public static int[] intersect2(int[] nums1, int[] nums2) {
        
    	if (nums1.length < 1 || nums2.length < 1) {
    		return new int[]{};
    	}
    	
    	List<Integer> list = new ArrayList<Integer>();
    	Arrays.sort(nums1);
    	Arrays.sort(nums2);
    	
		int l1 = 0, l2 = 0 , 
			r1 = nums1.length-1, r2 = nums2.length-1, 
			len = Math.min(nums1.length, nums2.length);
		while(len > 0){
			if (nums1[l1] == nums2[l2]) {
				list.add(nums2[l2]);
				l1++; 
				l2++;
			}
			else if (nums1[r1] == nums2[r2]) {
				list.add(nums2[r2]);
				r1--; 
				r2--;
			}
			else if (nums1[l1] < nums2[l2]) {
				l1++;
			}
			else if (nums1[l1] > nums2[l2]) {
				l2++;
			}
			else if (nums1[r1] > nums2[r2]) {
				r1--;
			}
			else{
				 if (nums1[r1] > nums2[r2]) {
						r2--;
				}
			}
			len--;
		}
    	
	    int[] arr = new int[list.size()];
	    
	    for (int i = 0; i < arr.length; i++) {
			
	    	arr[i] = list.get(i);
		}

	    return arr;
    }
    //using HashMap
    public int[] intersect3(int[] nums1, int[] nums2) {
        if (nums1.length == 0 || nums2.length == 0) {
            return new int[]{};
        }
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        ArrayList<Integer> result = new ArrayList<Integer>();
        for(int i = 0; i < nums1.length; i++)
        {
            if(map.containsKey(nums1[i])) map.put(nums1[i], map.get(nums1[i])+1);
            else map.put(nums1[i], 1);
        }
    
        for(int i = 0; i < nums2.length; i++)
        {
            if(map.containsKey(nums2[i]) && map.get(nums2[i]) > 0)
            {
                result.add(nums2[i]);
                map.put(nums2[i], map.get(nums2[i])-1);
            }
        }
    
       int[] r = new int[result.size()];
       for(int i = 0; i < result.size(); i++)
       {
           r[i] = result.get(i);
       }
    
       return r;
    }
    
//    Using One HashMap
//    Traverse first list and record number and their occurances in hashMap
//    Traverse the second list and check if map contains the key. Add to result if yes
//    Also, remove/decrement the counter in the map when key found when traversing second list
//    O(N) run-time and O(N) space for HashMap
    public static int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> mapCount = new HashMap<Integer, Integer>();
        List<Integer> result = new ArrayList<Integer>();
        
        for(int curr : nums1) {                                 // This approach reduces the check for containsKey
            Integer prev = mapCount.get(curr);                  // Get prev value if any
            mapCount.put(curr, prev == null ? 1 : prev + 1);    // if null put 1, else increment and put
        }
        
        for(int curr : nums2) {                                 // Traverse thru the second list
            Integer prev = mapCount.get(curr);                  // Get the value for curr elem
            if(prev != null) {                                  // If key was present, prev will not be null
                result.add(curr);                               // Add to result, because this is an intersection
                if(prev == 1)
                    mapCount.remove(curr);                      // Remove if only one occurance
                else
                    mapCount.put(curr, prev - 1);               // Decrement occurance if more than 1
            }
        }
        
        // Convert ArrayList to array
        int[] res = new int[result.size()];
        for(int i = 0; i < result.size(); i++ )
            res[i] = result.get(i);
        
        return res;
    }
    //or
    public static int[] intersect4(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        ArrayList<Integer> result = new ArrayList<Integer>();
        for(int i = 0; i < nums1.length; i++)
        {
            if(map.containsKey(nums1[i])) 
                map.put(nums1[i], map.get(nums1[i])+1);
            else map.put(nums1[i], 1);
        }
    
        for(int i = 0; i < nums2.length; i++)
        {
            if(map.containsKey(nums2[i]) && map.get(nums2[i]) > 0)
            {
                result.add(nums2[i]);
                map.put(nums2[i], map.get(nums2[i])-1);
            }
        }
    
       int[] r = new int[result.size()];
       for(int i = 0; i < result.size(); i++)
       {
           r[i] = result.get(i);
       }
    
       return r;
    }
}
