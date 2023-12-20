const nums = [1, 5, 6, 7, 9, 3, 4, 3, 2, 0, 8, 9, 6];
const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

const twoSum = function (nums, target) {
    const ans = [];
    const map = new Map();
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(i, nums[i])
    }
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if (map.has(target - current) && !seen.has(target - current)) {
            ans.push([i, map.get(target - current)]);
            seen.set(current, target - current);
        }
    }
    console.log('seen: ', seen);

    return ans;
};

console.log('ans: ', twoSum(nums, 9));
console.log('ans: ', twoSum(nums2, 8));