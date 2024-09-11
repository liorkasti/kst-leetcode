/* 242. Valid Anagram
Easy
https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length != t.length) return false;

  const map = new Array(26).fill(0);
  const shift = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - shift]++;
    map[t.charCodeAt(i) - shift]--;
  }

  return map.every((count) => count === 0);
};

const isAnagram2 = (s, t) => {
  if (t.length !== s.length) return false;
  const hash = {};
  for (let c of s) {
    hash[c] = (hash[c] || 0) + 1;
  }
  for (let c of t) {
    if (!hash[c]) return false;
    hash[c]--;
  }
  return true;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t));
