/* 567. Permutation in String
Medium
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2. 
Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	const len1 = s1.length, len2 = s2.length;
	if (len1 > len2) return false;

	const count = Array(26).fill(0);
	for (let i = 0; i < len1; i++) {
		count[s1.charCodeAt(i) - 97]++;
		count[s2.charCodeAt(i) - 97]--;
	}
	if (!count.some(e => e !== 0)) return true;
	console.log('count :>> ', count);
	for (let i = len1; i < len2; i++) {
		count[s2.charCodeAt(i) - 97]--;
		count[s2.charCodeAt(i - len1) - 97]++;
		if (!count.some(e => e !== 0)) return true;
	}
	return false;
};

var arrayValuesEqual = function (arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false
	}
	return true
}

var checkInclusion2 = function (s1, s2) {
	const s1Arr = new Array(26).fill(0)
	const s2Arr = new Array(26).fill(0)
	
	for (let i = 0; i < s1.length; i++) {
		let index = s1.charCodeAt(i) % 26;
		s1Arr[index]++
	}
	
	let l = 0
	for (let r = 0; r < s2.length; r++) {
		let index = s2.charCodeAt(r) % 26;
		s2Arr[index]++

		if (r - l + 1 > s1.length) {
			let i = s2.charCodeAt(l) % 26;
			s2Arr[i]--
			l++
		}
		if (r - l + 1 == s1.length) {
			if (arrayValuesEqual(s1Arr, s2Arr)) return true
		}

	}
	return false
}

console.log(checkInclusion("ab", "eidbaooo"));//true
console.log(checkInclusion("ab", "eidboaoo"));//false