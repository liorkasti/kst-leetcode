/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
const nums = [-1,-100,3,99], k = 2;

const rotate = (nums, k) => {
    const len = nums.length
    k = k % len;
    if (k === 0) return nums;
    const temp = nums.slice(len - k, len)// [4, 5, 6, 7]
    nums.splice(len - k, k)// [1, 2, 3]
    nums.unshift(...temp)// [4, 5, 6, 7, 1, 2, 3]
    return nums;
};

console.log(`nums: `, rotate(nums, k))