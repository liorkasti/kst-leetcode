// The standard solution using a map:

var isAnagram1 = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};
// ...which can be "minified" to:

var isAnagram2 = function(s, t, m = {}) {
    for (let c of s) m[c] = (m[c] || 0) + 1;
    for (let c of t) if (!m[c]--) return false;
    return Object.values(m).every(v => !v);
};
// Using an array as buckets:

var isAnagram3 = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = [];
    for (let c of s) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (!counts[i]) return false;
        counts[i]--;
    }
    return true;
};

var isAnagram4 = function(s, t) {
    // To count freq we make an array of size 26...
        const counter = new Array(26).fill(0);
        // Traverse all elements through a loop...
        for(let idx = 0; idx < s.length; idx++){
            counter[s.charCodeAt(idx)-97]++;
        }
        for(let idx = 0; idx < t.length; idx++){
            counter[t.charCodeAt(idx)-97]--;
        }
        // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
        // Every element of count has to be equal to 0.
        // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
        // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
        for (let idx = 0; idx < 26; idx++) {
            if(counter[idx] != 0)
                return false;
        }
        return true;
};
// One-liner (log n times slower) using sort:

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};