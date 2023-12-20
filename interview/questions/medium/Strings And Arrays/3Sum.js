/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return result;
    }
    const result = [];
    const target = 0;
    nums = nums.sort((a,b) => a - b );
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }
        // if our iterator is the same as the previous value skip it to prevent duplicate results
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
		
        // start j at i + 1
        let j = i + 1;
		
        // start k at end of array
        let k = nums.length - 1;
        
        // walking j and k towards each other to find all possible values
        // with i as our anchor value
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);
                
                // skip duplicate values of j and k
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                
                // move j and k inward
                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }
	return result
};

const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))