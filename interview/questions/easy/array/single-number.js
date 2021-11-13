/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [4, 1, 2, 1, 2]
var singleNumber = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let single = 0;
    for (let value of nums) {
        single ^= value;
    }
    return single;
};

const singleNumbers2 = nums => {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    return Array.from(set)[0]
}
console.log('output :>> ', singleNumber(nums));
console.log('output :>> ', singleNumbers2(nums));