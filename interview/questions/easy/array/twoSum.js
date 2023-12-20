/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complements = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        let complement = target - nums[i];
        if(complements.has(complement)) {
            return [complements.get(complement), i];
        } else {
            complements.set(nums[i], i);
        }
    }
	return [];
};

const nums = [2,7,11,15]
const  target = 9
console.log(twoSum(nums, target))