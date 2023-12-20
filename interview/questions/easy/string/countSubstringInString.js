
let myString = "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
let mySubString = "orange";
let s = "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
let sub = "balloon";
let count = myString.split(mySubString).length - 1;
console.log(count); // 3

// function countSubstring(str, substring) {
//     let count = 0;
//     let index = 0;
//     while (index !== -1) {
//       index = str.indexOf(substring, index);
//       if (index !== -1) {
//         count++;
//         index++;
//       }
//     }
//     return count;
//   }

function countSubstring(str, substring) {
    let count = 0;
    for (let i = 0; i <= str.length - substring.length; i++) {
        if (str.substring(i, i + substring.length) === substring) {
            count++;
        }
    }
    return count;
}

console.log(countSubstring('aaabbabbabbbabb', 'ab'));

// function maxRepeating(sequence, word) {
//     let count = 0;
//     for (let i = 0; i <= sequence.length - word.length; i++) {
//         const regExp = new RegExp(word);
//         if (regExp.test(sequence)) count += 1;
//     }
//     return count;
// };

var maxRepeating = function (s, w) {
    const max = Math.floor(s.length / w.length)
    for (let i = max; i >= 0; i--) {
        if (s.indexOf(w.repeat(i)) !== -1) {
            return i
        }
    }
};


sequence = "ababc", word = "ab" //Output: 2
//   sequence = "ababc", word = "ba" //Output: 1
//   sequence = "ababc", word = "ac" //Output: 0

console.log(countSubstring(sequence, word));
