<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 nums = [1,2,3,1]
 //set
 var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(numsSet.has(nums[i])) {
            return true;
        }
        numsSet.add(nums[i]);
    }
    return false;
};
 //hash
 var containsDuplicateHASH = function (nums) {
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
=======
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 nums = [1,2,3,1]
 //set
 var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for(let i = 0; i < nums.length; i++){
        if(numsSet.has(nums[i])) {
            return true;
        }
        numsSet.add(nums[i]);
    }
    return false;
};
 //hash
 var containsDuplicateHASH = function (nums) {
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
>>>>>>> origin/master
console.log(`object`, containsDuplicate(nums));