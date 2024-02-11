/* 76. Minimum Window Substring [Hard]
https://leetcode.com/problems/minimum-window-substring/?envType=study-plan-v2&envId=top-interview-150
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

 */

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// const minWindow = (s, t) => {
//   if (!s || !t) {
//     return "";
//   }
//   // Initialize maps to store character frequencies
//   const [dictT, windowCounts] = [new Map(), new Map()];
//   for (const c of t) {
//     dictT.set(c, (dictT.get(c) || 0) + 1);
//   }
//   let [required, l, r, formed, ans] = [dictT.size, 0, 0, 0, [-1, 0, 0]];
//   // Initialize variables to store the minimum window substring
//   while (r < s.length) {
//     const charR = s.charAt(r);
//     // Update windowCounts with the current character at the right pointer
//     windowCounts.set(charR, (windowCounts.get(charR) || 0) + 1);
//     // Check if the current character forms a required character in the window
//     if (dictT.has(charR) && windowCounts.get(charR) === dictT.get(charR)) {
//       formed++;
//     }
//     // Move the left pointer to minimize the window size
//     while (l <= r && formed === required) {
//       const charL = s.charAt(l);
//       // Update ans if the current window is smaller
//       if (ans[0] === -1 || r - l + 1 < ans[0]) {
//         ans[0] = r - l + 1;
//         ans[1] = l;
//         ans[2] = r;
//       }
//       // Update windowCounts and formed by moving the left pointer
//       windowCounts.set(charL, windowCounts.get(charL) - 1);
//       if (dictT.has(charL) && windowCounts.get(charL) < dictT.get(charL)) {
//         formed--;
//       }
//       l++;
//     }
//     // Move the right pointer to expand the window
//     r++;
//   }
//   // Return the minimum window substring
//   return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
// };

// let s = "ADOBECODEBANC",
//   t = "ABC";
// console.log(minWindow(s, t));

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// function minWindow(s, t) {
//   const slen = s.length;
//   const tlen = t.length;
//   let response = [-1, 0, 0];

//   if (slen < tlen || !slen || !tlen) {
//     return "";
//   }

//   const tFreqCounter = {};
//   for (let i = 0; i < tlen; i += 1) {
//     tFreqCounter[t[i]] = (tFreqCounter[t[i]] || 0) + 1;
//   }
//   const tFreqCounterSize = Object.keys(tFreqCounter).length;

//   const sFiltered = [];
//   for (let i = 0; i < slen; i += 1) {
//     if (tFreqCounter[s[i]]) {
//       sFiltered.push([i, s[i]]);
//     }
//   }
//   const sFilteredSize = Object.keys(sFiltered).length;

//   let start = 0;
//   let end = 0;
//   let windowCount = {};
//   let formed = 0;

//   console.log("tFreqCounter: ", tFreqCounter, " size: ", tFreqCounterSize);
//   console.log(
//     "sFiltered: ",
//     JSON.stringify(sFiltered),
//     " size: ",
//     sFilteredSize
//   );

//   while (end < sFilteredSize) {
//     const charEnd = sFiltered[end][1];
//     windowCount[charEnd] = (windowCount[charEnd] || 0) + 1;

//     if (
//       tFreqCounter[charEnd] &&
//       windowCount[charEnd] === tFreqCounter[charEnd]
//     ) {
//       formed += 1;
//     }

//     while (start <= end && formed === tFreqCounterSize) {
//       const charStart = sFiltered[start][1];

//       console.log("charEnd: ", sFiltered[end]);
//       console.log("charStart: ", sFiltered[start]);

//       const right = sFiltered[end][0];
//       const left = sFiltered[start][0];
//       if (response[0] === -1 || right - left + 1 < response[0]) {
//         response = [right - left + 1, left, right];
//       }

//       windowCount[charStart] -= 1;
//       if (
//         tFreqCounter[charStart] &&
//         windowCount[charStart] < tFreqCounter[charStart]
//       ) {
//         formed -= 1;
//       }
//       start += 1;
//     }
//     end += 1;
//   }
//   console.log("response: ", response);
//   return response[0] === -1 ? "" : s.substring(response[1], response[2] + 1);
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  let map = new Array(128).fill(0);
  for (let i = 0; i < t.length; i += 1) {
    map[t.charCodeAt(i)] += 1;
  }
  let [start, end, minStart, minLen, count] = [
    0,
    0,
    0,
    Number.MAX_SAFE_INTEGER,
    t.length,
  ];
  while (end < s.length) {
    console.log({ start, end, minStart, minLen, count });
    if (map[s.charCodeAt(end)] > 0) {
      count -= 1;
    }
    map[s.charCodeAt(end)] -= 1;
    end += 1;

    while (count === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      if (map[s.charCodeAt(start)] === 0) {
        count += 1;
      }
      map[s.charCodeAt(start)] += 1;
      start += 1;
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? "" : s.substr(minStart, minLen);
}

let s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
