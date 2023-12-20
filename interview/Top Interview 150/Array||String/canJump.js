/* 55. Jump Game
https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
Medium
18.2K
1.1K
Companies
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let trek = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > trek) {
      return false;
    }

    trek = Math.max(trek, i + nums[i]);

    if (trek >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
var nums = [2, 3, 1, 1, 4];
var nums2 = [3, 2, 1, 0, 4];
var nums3 = [3, 0, 8, 2, 0, 0, 1];
console.log(canJump(nums2));

var canJump = function (nums) {
  let trek = 0;
  for (let i = 0; i < nums.length; i++) {
    trek = Math.max(nums[i] + i, trek);
    console.log("trek", trek);
    if (trek >= nums.length - 1) return true;
    if (trek === i && nums[i] === 0) return false;
  }
  return false;
};
var canJump = function (nums) {
  let n = nums.length;
  let goal = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};
