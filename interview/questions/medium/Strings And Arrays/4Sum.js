/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)      //First sort the array in ascending order
    let len = nums.length;
    let left=0, right=0, sum=0;
    let result = [];
    for(let i=0; i<len-3; i++){
        for(let j=i+1; j<len-2; j++){
            left = j+1;
            right = len-1;
            while(left < right){
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while(nums[left]===nums[left+1]) left++;     //To avoid same values for left pointer
                    while(nums[right]===nums[right-1]) right--;  //To avoid same values for right pointer
                    left++;
                    right--;
                } else if (sum < target){
                    left++;
                } else {
                    right--;
                }
            }
            while(nums[j]===nums[j+1]) j++;
        }
        while(nums[i]===nums[i+1]) i++;
    }
    return result;
};
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))