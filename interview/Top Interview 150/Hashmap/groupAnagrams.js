/* 49. Group Anagrams
Medium
https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let hash = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - "a".charCodeAt()]++;
    let key = count.join("!");
    console.log(str, key);
    hash[key] ? hash[key].push(str) : (hash[key] = [str]);
  }
  return Object.values(hash);
};

var groupAnagrams1 = function (strs) {
  let hash = {};
  for (let str of strs) {
    let letters = str.split("").sort().join("");
    hash[letters] ? hash[letters].push(str) : (hash[letters] = [str]);
  }
  return Object.values(hash);
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
var groupAnagrams2 = function (strs) {
  let m = new Map();
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
    else m.set(sorted, [str]);
  }
  return Array.from(m.values());
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
var groupAnagrams3 = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    console.log(str, key);
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)

// strs = ["bdddddddddd", "bbbbbbbbbbc"];
strs = ["eat", "tea", "tan", "ate", "nat", "bat", "baa", "aba"];
console.log(groupAnagrams(strs));
