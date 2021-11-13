/**
 * @param {string} s
 * @return {number}
 */

const s = "abcabcbb";

const lengthOfLongestSubstring = (s) => {
    let longest = 0;
    let start = 0;
    let end = 0;
    const set = new Set();
    while (end < s.length) {
        if (!set.has(s[end])) {
        set.add(s[end]);
        end++;
        longest = Math.max(longest, end - start);
        } else {
        set.delete(s[start]);
        start++;
        }
    }
    return longest;
};

console.log(`length:`, lengthOfLongestSubstring(s));

const fetchImdbMostPopular = () => {

}

