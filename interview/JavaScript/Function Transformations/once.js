/* 2666. Allow One Function Call [Easy]
https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
 

Constraints:

calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000 */
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let isExecuted = false;
  return (...args) =>
    isExecuted ? undefined : ((isExecuted = true), fn(...args));
};

const fn = (a, b, c) => a + b + c,
  fn2 = (a, b, c) => a * b * c,
  calls = [
    [1, 2, 3],
    [2, 3, 6],
  ],
  calls2 = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ];

let onceFn = once(fn);
let onceFn2 = once(fn2);
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // undefined

calls.map((call) => console.log(onceFn(...call)));
calls2.map((call) => console.log(onceFn2(...call)));

// given:
// var once = function (fn) {
//   return function (...args) {};
// };
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// Intuition
// The problem is asking us to return a new function that behaves differently depending on whether it has been called before. If it has not been called before, it should call the original function and return its result. If it has been called before, it should return undefined without calling the original function again.

// Approach
// To solve this problem, we can return a new functionthat keeps track of whether it has been called before. We can do this by using a closureto store a boolean flag that is initially set to false. The first time the new function is called, we call the original function and set the flag to true. We also store the result of the original function. Subsequent calls to the new function simply return undefinedwithout calling the original function again.

// Complexity
// Time complexity:
// O(1) for both the first and subsequent calls to the returned function. This is because checking the hasBeenCalled flag and returning either the result or undefined are constant-time operations.

// Space complexity:
// O(1) as well. This is because we only use a constant amount of extra space to store the hasBeenCalled flag and the result of the original function.

// Learning
// The key idea behind this problem is to use a closure to store the state of the returned function. By doing this, we can keep track of whether the function has been called before and behave accordingly.

// Code In JS
// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function(fn) {

//   let hasBeenCalled = false;
//   let result;

//   return function(...args) {
//     if (!hasBeenCalled) {
//       result = fn(...args);
//       hasBeenCalled = true;
//       return result;
//     } else {
//       return undefined;
//     }
//   }

// };

// let fn = (a,b,c) => (a + b + c);
// let onceFn = once(fn);

// console.log(onceFn(1,2,3)); // 6
// console.log(onceFn(2,3,6)); // undefined
// Code In TypeScript
// type Func<T, U> = (...args: T[]) => U;

// function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
//   let hasBeenCalled = false;
//   let result: U;

//   return function (...args: T[]): U | undefined {
//     if (!hasBeenCalled) {
//       result = fn(...args);
//       hasBeenCalled = true;
//       return result;
//     } else {
//       return undefined;
//     }
//   }
// }

// // Example usage:
// let fn = (a: number, b: number, c: number) => (a + b + c);
// let onceFn = once(fn);

// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // undefined

// Using a closure and an arrow function
// In this approach, we use an arrow function to create the returned function. We store thehasBeenCalled flag and result in a closure, and use an if statement to check whether the function has already been called.

// function once(fn) {
//   let hasBeenCalled = false;
//   let result;

//   return (...args) => {
//     if (!hasBeenCalled) {
//       result = fn(...args);
//       hasBeenCalled = true;
//       return result;
//     } else {
//       return undefined;
//     }
//   };
// }

// Using a class
// In this approach, we define a Once class that has a call method that behaves like the returned function in the previous approaches. We use a class property to store the hasBeenCalled flag and result.

// class Once {
//   hasBeenCalled = false;
//   result;

//   call(fn, ...args) {
//     if (!this.hasBeenCalled) {
//       this.result = fn(...args);
//       this.hasBeenCalled = true;
//       return this.result;
//     } else {
//       return undefined;
//     }
//   }
// }
