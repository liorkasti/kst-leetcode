const map = new Map([
  [1, "I"],
  [5, "V"],
  [10, "X"],
  [50, "L"],
  [100, "C"],
  [500, "D"],
  [1000, "M"],
]);

/**
 * @param {number} num
 * @return {string}
 */
// get thet last digit one by one
// and generate the result
var intToRoman2 = function (num) {
  let base = 1;
  const result = [];
  while (num > 0) {
    // get last digit
    const last = num % 10;

    if (last < 4) {
      for (let k = last; k > 0; k--) {
        result.unshift(map.get(base));
      }
    } else if (last === 4) {
      result.unshift(...[map.get(base), map.get(base * 5)]);
    } else if (last === 5) {
      result.unshift(map.get(base * 5));
    } else if (last < 9) {
      for (let k = last; k > 5; k--) {
        result.unshift(map.get(base));
      }
      result.unshift(map.get(base * 5));
    } else {
      result.unshift(...[map.get(base), map.get(base * 10)]);
    }

    base *= 10;

    num = (num - last) / 10;
    console.log({num,result});
    
  }
  return result.join("");
};

console.log(intToRoman2(101)); // Input: 101 Output: CI
console.log(intToRoman2(58)); // Input: 58 Output: LVIII
console.log(intToRoman2(1994)); // Input: 1994 Output: MCMXCIV
console.log(intToRoman2(3749)); // Input: 3749 Output: MMMDCCXLIX