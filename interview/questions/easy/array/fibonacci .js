/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n;
    
    let a = 0;
    let b = 1;
    let sum = a + b;

    while(n>1){
        sum= a + b;
        a= b;
        b= sum;
        n--;
    }
    return sum;
}

console.log(fib(8))
console.log(fib(5))
console.log(fib(9))
console.log(fib(10))

// /**
//  * @param {number} n
//  * @return {number}
//  */
// const fib = function(n) {
//     return n<2 ? n : fib(n-1) + fib(n-2);
// };

// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))