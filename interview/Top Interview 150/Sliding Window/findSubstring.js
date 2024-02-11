/* 30. Substring with Concatenation of All Words
Hard
https://leetcode.com/problems/substring-with-concatenation-of-all-words/?envType=study-plan-v2&envId=top-interview-150
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
We return an empty array.
Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
 

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters. */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const result = [];
  if (words.length > 0) {
    const wordsCount = words.length;
    const wordLength = words[0] ? words[0].length : 0;
    const offset = wordLength * (wordsCount - 1);
    const map = createHashTable(words);

    for (let i = 0; i < wordLength; i++) {
      let wordsFound = 0;
      let tempMap = new Map();

      let sequenceStart = i;

      const endLength = s.length - wordLength;
      for (let j = i; j <= endLength; j += wordLength) {
        const word = s.substr(j, wordLength);
        const wordEntriesNeeded = map.get(word);
        const wordEntriesUsed = tempMap.get(word);
        if (wordEntriesUsed !== wordEntriesNeeded) {
          wordsFound++;
          tempMap.set(word, wordEntriesUsed ? wordEntriesUsed + 1 : 1);
        } else if (!wordEntriesNeeded) {
          wordsFound = 0;
          tempMap = new Map();
          sequenceStart = j + wordLength;
        } else {
          let wordToRemove;

          do {
            wordToRemove = s.substr(sequenceStart, wordLength);
            sequenceStart += wordLength;
            tempMap.set(wordToRemove, tempMap.get(wordToRemove) - 1);
            wordsFound--;
          } while (wordToRemove !== word && sequenceStart <= j);

          wordsFound++;
          tempMap.set(word, tempMap.get(word) + 1);
        }
        if (wordsFound === wordsCount) {
          result.push(j - offset);
        }
      }
    }
  }
  return result;
};

const createHashTable = (words) => {
  const map = new Map();
  words.forEach((word) => {
    const oldValue = map.get(word);
    if (map.has(word)) {
      map.set(word, oldValue + 1);
    } else {
      map.set(word, 1);
    }
  });
  return map;
};

let s = "barfoothefoobarman",
  words = ["foo", "bar"];
console.log(findSubstring(s, words));
findSubstring(s, words);
