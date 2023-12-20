/* 383. Ransom Note
https://leetcode.com/problems/ransom-note/
Easy

4656

472

Add to List

Share
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letter */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let occurrences = Array(26).fill(0); //O(n), O(1)

  let i = 0;
  for (; i < magazine.length; i++) {
    occurrences[magazine.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }

  i = 0;
  for (; i < ransomNote.length; i++) {
    let index = ransomNote[i].charCodeAt(0) - "a".charCodeAt(0);
    if (occurrences[index] <= 0) return false;
    occurrences[index] -= 1;
  }

  return true;
};
let ransomNote = "a",
  magazine = "b"; // false
// let ransomNote = "aa",
//   magazine = "ab"; //false
// let ransomNote = "aa",
// magazine = "aab"; //true

console.log(canConstruct(ransomNote, magazine));

const canConstruct1 = (ransomNote, magazine) => {
  const vocab = {};

  for (let letter of magazine) {
    vocab[letter] = ++vocab[letter] || 1;
  }

  for (let letter of ransomNote) {
    if (vocab[letter] === 0 || !vocab[letter]) {
      return false;
    }
    vocab[letter]--;
  }

  return true;
};

var canConstruct2 = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
};
