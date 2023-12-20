/*We have these 2 functions: insert/get.
insert('ABC')
insert('ACB')
insert('ABCD')
insert('AB')
insert('XYZ')
insert('CBA')
insert('DEF')

// and 
get('BAC')
/* 
get function should return an array with all the permutations that been inserted via insert calling.

In the example above, the return from get('BAC') should be ['ABC', 'ACB', 'CBA']

* The string input is valid
* The string input will contains unique charecters means 'AAB' isn't valid 
Good Luck!
*/

var cache = new Map();

var insert = (str) => {
  //TODO: validation
  cache.set(str);
}//1

var get = (str) => {
  let permutations = [];
  let input = help(str); //n
  for (s of cache) { //m
    let target = help(s); // y
    console.log('target :>> ', target);
    if (input.equals(target)) { //y
      permutations.push(target);
    }
  }
  //[1,0,0,0,0...]
  //[1,1,0,0,0,0...]
  //[1,1,1,0,0,0...]a

  return permutations;
}

var help = str => {
  let count = new Array().fill(26).fill(0);

  for (let i = 0; i < str.length; i++)
  console.log('str.charCodeAt(i) % 26 :>> ', str.charCodeAt(i) % 26);
    count[str.charCodeAt(i) % 26]++;
  return count;
}

strs = ["eat", "tea", "tan", "ate", "nat", "bat", "baa", "aba"]

// assuming y>n
// O(2ym+n)
insert('aabb');
insert('abab');
insert('abba');
insert('baba');
console.log(get(insert('bbaa')));