<<<<<<< HEAD

/*
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * Note: You may assume the string contain only lowercase letters.
 */
/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar2 = function (s) {
	//validation
	if (s == undefined) return -1;
	if (s?.length === 1) return 0;

	var ls = s.toLowerCase(); console.log('lower', ls);

	let occurrence = new Array(26).fill(0)
    
    for(i of ls) occurrence[i.charCodeAt(0) - 97]++
    for(i of ls) if(occurrence[i.charCodeAt(0) - 97] === 1) return ls.indexOf(i)
    
    return -1
};


var firstUniqChar = function(s) {
    for(let i of s){
        if(s.lastIndexOf(i) == s.indexOf(i)){
            return s.indexOf(i);
        }
    }
    return -1;
};

=======

/*
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * Note: You may assume the string contain only lowercase letters.
 */
/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar2 = function (s) {
	//validation
	if (s == undefined) return -1;
	if (s?.length === 1) return 0;

	var ls = s.toLowerCase(); console.log('lower', ls);

	let occurrence = new Array(26).fill(0)
    
    for(i of ls) occurrence[i.charCodeAt(0) - 97]++
    for(i of ls) if(occurrence[i.charCodeAt(0) - 97] === 1) return ls.indexOf(i)
    
    return -1
};


var firstUniqChar = function(s) {
    for(let i of s){
        if(s.lastIndexOf(i) == s.indexOf(i)){
            return s.indexOf(i);
        }
    }
    return -1;
};

>>>>>>> origin/master
console.log(firstUniqChar("loveleetcode"));