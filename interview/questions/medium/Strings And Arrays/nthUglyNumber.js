/**
 * @param {number} n
 * @return {number}
 An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

 

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 

Constraints:

1 <= n <= 1690
*/
var nthUglyNumber = function(n) {
    let cache = [1]
    let [p2, p3, p5] = [0, 0, 0];
    for (let i = 1; i < n; i++) {
        let r2 = cache[p2] * 2;
        let r3 = cache[p3] * 3;
        let r5 = cache[p5] * 5;
        console.log('(r2, r3, r5) :>> ', r2, r3, r5);
        let min = Math.min(r2, r3, r5);
        if (min == r2) p2++;
        if (min == r3) p3++;
        if (min == r5) p5++;
        cache[i] = min;
    }
    console.log('cache :>> ', cache);
    return cache[cache.length-1];
};

console.log(nthUglyNumber(16));