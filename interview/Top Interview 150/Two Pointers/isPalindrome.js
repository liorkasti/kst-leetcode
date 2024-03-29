/* 125. Valid Palindrome
Easy
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let st = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let [l, r] = [0, st.length - 1];
  console.log("s", st);
  while (l <= r) {
    console.log(st[l], st[r]);
    if (st[l++] !== st[r--]) return false;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
// let s = "race a car";
// let s = "cellec";
console.log(isPalindrome(s));

var isPalindrome = function (s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let rev = str.split("").reverse().join("");
  return str == rev ? true : false;
};
