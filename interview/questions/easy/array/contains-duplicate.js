/**
 * @param {number[]} nums
 * @return {boolean}
 */

 nums = [1,2,3,1]
 
 var containsDuplicate = function (nums) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = true;
        }
    }
    return false;
};
console.log(`object`, containsDuplicate(nums));