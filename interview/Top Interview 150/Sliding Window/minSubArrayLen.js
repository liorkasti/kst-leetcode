/* 209. Minimum Size Subarray Sum
https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150
Medium
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let [slow, sum, minComb] = [0, 0, Infinity];
  for (let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];
    while (sum >= target) {
      minComb = Math.min(minComb, fast - slow + 1);
      sum -= nums[slow++];
      console.log(sum, slow - 1, fast, minComb);
    }
  }
  return minComb === Infinity ? 0 : minComb;
};

let target = 7;
let nums = [2, 3, 1, 2, 4, 3]; //2
// let target = 4;
// let nums = [1, 4, 4]; //1
// let target = 11;
// let nums = [1, 1, 1, 1, 1, 1, 1, 1]; //0

console.log(minSubArrayLen(target, nums));

var minSubArrayLen1 = function (target, nums) {
  let [l, sum, len] = [0, 0, Infinity];
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      len = Math.min(len, r - l + 1);
      sum -= nums[l++];
    }
  }
  return len === Infinity ? 0 : len;
};
