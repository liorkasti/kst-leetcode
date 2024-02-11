/* 
392. Is Subsequence (Easy) https://leetcode.com/problems/is-subsequence/
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    console.log(s[i], t[j], i, s.length, t.length);
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

// var isSubsequence = function (s, t) {
//   // if (s.length < 1) return true;
//   let subIdx = 0,
//     originIdx = 0;
//   while (originIdx < t.length - (s.length - subIdx + 1)) {
//     console.log(s[subIdx], t[originIdx], subIdx, s.length);
//     if (s[subIdx] == t[originIdx++]) {
//       subIdx++;
//     }
//   }
//   return subIdx === s.length;
// };

let s = "abc",
  t = "ahbgdc";

let s2 = "axc",
  t2 = "ahbgdc";

let s3 = "",
  t3 = "c";
console.log(isSubsequence(s2, t2));
