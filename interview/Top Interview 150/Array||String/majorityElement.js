/* 169. Majority Element
https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let answer = -1;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    }
    map.set(nums[i], map.get(nums[i]) + 1);

    if (map.get(nums[i]) > Math.floor(nums.length / 2)) {
      answer = nums[i];
      break;
    }
  }

  return answer;
};

var majorityElement1 = function (nums) {
  const maxAp = Math.ceil(nums.length / 2);
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1;
    if (map[nums[i]] >= maxAp) return nums[i];
  }
};

// var majorityElement2 = function (nums) {
//   // Initialize sol and cnt to store the solution and its frequency for respective iterations...
//   let majority = 0,
//     count = 0;
//   // For every element i in the array...
//   for (let i = 0; i < nums.length; i++) {
//     // If cnt is equal to zero, update sol as sol = i
//     console.log(majority, count);
//     if (count == 0) {
//       majority = nums[i];
//       count = 1;
//     }
//     // If i is equal to candidate, increment cnt...
//     else if (majority == nums[i]) {
//       count++;
//     }
//     // Otherwise, decrement cnt...
//     else {
//       count--;
//     }
//   }
//   // Return & print the solution...
//   return majority;
// };

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
