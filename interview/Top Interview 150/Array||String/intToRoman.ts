/* 12. Integer to Roman
Medium
https://leetcode.com/problems/integer-to-roman/?envType=study-plan-v2&envId=top-interview-150
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 

Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII
Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:

1000 = M
 900 = CM
  90 = XC
   4 = IV
 
   
   Constraints:
   
   1 <= num <= 3999
   */

// const getLeftmostDigit = (num: number): number => {
//   // Convert the number to a string and extract the first character
//   const leftDigit = num.toString()[0];
//   // Keep dividing the number by 10 until it is less than 10
//   // while (num >= 10) {
//   //   num = Math.floor(num / 10);
//   // }
//   // const [leftmost] = String(num);
//   // return Number(leftmost);
//   return parseInt(leftDigit);
// };

// const getRightDigits = (num: number, digitsCount: number): number => {
//   // Use modulus to get the last digitsCount digits
//   const divisor = Math.pow(10, digitsCount);
//   // console.log({ divisor });
//   return num % divisor;
// };

// const intToRoman = (num: number): string => {
//   let romanNumber: string = '';
//   let digitsCount: number = Math.abs(num).toString().length;
//   let rightDigits: number = num;
//   let leftDigit: number = 0;

//   while (rightDigits > 0) {
//     if (rightDigits < 10) {
//       leftDigit = rightDigits % 10;
//       rightDigits = 0;
//     } else {
//       rightDigits = getRightDigits(rightDigits, digitsCount);
//       leftDigit = getLeftmostDigit(rightDigits);
//     }

//     console.log({
//       romanNumber,
//       leftDigit,
//       rightDigits,
//       digitsCount,
//     });

//     //case1: If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
//     //case2: If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol
//     //case3: Only powers of 10 (I, X, C, M) can be appended consecutively at most 3
//     if (digitsCount < Math.abs(leftDigit).toString().length) {
//       digitsCount--;
//     }
//     if (digitsCount > 3) {
//       while (leftDigit > 0) {
//         romanNumber += 'M';
//         leftDigit--;
//       }
//     } else if (digitsCount > 2) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'CM';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'D';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'CD';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'C';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     } else if (digitsCount > 1) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'XC';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'L';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'XL';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'X';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     } else if (digitsCount === 1) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'IX';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'V';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'IV';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'I';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     }

//     digitsCount--;
//     leftDigit = getLeftmostDigit(rightDigits);
//   }
//   return romanNumber;
// };

const intToRoman = (num: number): string => {
  const n = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let i = 0,
    s = '';

  while (num > 0) {
    if (num >= n[i]) {
      s = s + roman[i];
      num -= n[i];
    } else {
      i++;
    }
  }

  return s;
};

// const intToRoman = (num: number): string | void => {
//   if (num >= 1000) return 'M' + intToRoman(num - 1000);
//   if (num >= 900) return 'CM' + intToRoman(num - 900);
//   if (num >= 500) return 'D' + intToRoman(num - 500);
//   if (num >= 400) return 'CD' + intToRoman(num - 400);
//   if (num >= 100) return 'C' + intToRoman(num - 100);
//   if (num >= 90) return 'XC' + intToRoman(num - 90);
//   if (num >= 50) return 'L' + intToRoman(num - 50);
//   if (num >= 40) return 'XL' + intToRoman(num - 40);
//   if (num >= 10) return 'X' + intToRoman(num - 10);
//   if (num === 9) return 'IX';
//   if (num >= 5) return 'V' + intToRoman(num - 5);
//   if (num === 4) return 'IV';
//   if (num >= 1) return 'I' + intToRoman(num - 1);
//   if (num === 0) return '';
// };

console.log(intToRoman(101)); // Input: 101 Output: CI
console.log(intToRoman(58)); // Input: 58 Output: LVIII
console.log(intToRoman(1994)); // Input: 1994 Output: MCMXCIV
console.log(intToRoman(3749)); // Input: 3749 Output: MMMDCCXLIX

// const getLeftmostDigit = (num: number): number => {
//   // Convert the number to a string and extract the first character
//   const leftDigit = num.toString()[0];
//   // Keep dividing the number by 10 until it is less than 10
//   // while (num >= 10) {
//   //   num = Math.floor(num / 10);
//   // }
//   // const [leftmost] = String(num);
//   // return Number(leftmost);
//   return parseInt(leftDigit);
// };

// const getRightDigits = (num: number, digitsCount: number): number => {
//   // Use modulus to get the last digitsCount digits
//   const divisor = Math.pow(10, digitsCount);
//   // console.log({ divisor });
//   return num % divisor;
// };

// const intToRoman = (num: number): string => {
//   let romanNumber: string = '';
//   let digitsCount: number = Math.abs(num).toString().length;
//   let rightDigits: number = num;
//   let leftDigit: number = 0;

//   while (rightDigits > 0) {
//     if (rightDigits < 10) {
//       leftDigit = rightDigits % 10;
//       rightDigits = 0;
//     } else {
//       rightDigits = getRightDigits(rightDigits, digitsCount);
//       leftDigit = getLeftmostDigit(rightDigits);
//     }

//     console.log({
//       romanNumber,
//       leftDigit,
//       rightDigits,
//       digitsCount,
//     });

//     //case1: If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
//     //case2: If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol
//     //case3: Only powers of 10 (I, X, C, M) can be appended consecutively at most 3
//     if (digitsCount < Math.abs(leftDigit).toString().length) {
//       digitsCount--;
//     }
//     if (digitsCount > 3) {
//       while (leftDigit > 0) {
//         romanNumber += 'M';
//         leftDigit--;
//       }
//     } else if (digitsCount > 2) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'CM';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'D';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'CD';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'C';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     } else if (digitsCount > 1) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'XC';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'L';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'XL';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'X';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     } else if (digitsCount === 1) {
//       while (leftDigit > 0) {
//         if (leftDigit === 9) {
//           romanNumber += 'IX';
//           leftDigit -= 9;
//         } else if (leftDigit > 4) {
//           romanNumber += 'V';
//           leftDigit -= 5;
//         } else if (leftDigit === 4) {
//           romanNumber += 'IV';
//           leftDigit -= 4;
//         } else if (leftDigit > 0 && leftDigit < 4) {
//           romanNumber += 'I';
//           leftDigit--;
//         } else {
//           leftDigit--;
//         }
//       }
//     }

//     digitsCount--;
//     leftDigit = getLeftmostDigit(rightDigits);
//   }
//   return romanNumber;
// };
