/* 3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-interview-150
Medium
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {
  let [sub, maxSub, slow, fast] = [0, 0, 0, 1];
  while (fast < s.length) {
    if (s[fast++] != s[slow]) {
      sub++;
      maxSub = Math.max(maxSub, sub);
      console.log(maxSub, slow, fast);
    }
    sub = 0;
    slow++;
  }
  return maxSub + 1;
};
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    const firstIndex = s.indexOf(s.charAt(right), left);
    if (firstIndex !== right) left = firstIndex + 1;
    max = Math.max(max, right - left + 1);
    console.log({ left: left, max: max, right: right, firstIndex });
  }
  return max;
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
