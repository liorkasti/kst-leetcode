var groupAnagrams1 = function (strs) {
    let obj = {};
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
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
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)


strs = ["eat", "tea", "tan", "ate", "nat", "bat", "baa", "aba"]
console.log(groupAnagrams3(strs));