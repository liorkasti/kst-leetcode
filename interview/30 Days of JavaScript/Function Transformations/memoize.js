/* 2623. Memoize [Medium]
https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
 

Constraints:

0 <= a, b <= 105
1 <= n <= 10
0 <= actions.length <= 105
actions.length === values.length
actions[i] is one of "call" and "getCallCount"
fnName is one of "sum", "factorial" and "fib" */
/**
 * @param {Function} fn
 */
const memoize = (fn) => {
  fn.cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in fn.cache) {
      return fn.cache[key];
    }
    return (fn.cache[key] = fn(...args));
  };
};

let [fnName, actions, values] = [
  ["sum", "factorial", "fibonacci"],
  ["call", "call", "getCallCount", "call", "getCallCount"],
  [[2, 2], [2, 2], [], [1, 2], []],
];
// values = [[2], [3], [2], [], [3], []];
// values = [[5], []];

const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

const tester = (actions, fnName, values) => {
  let [callCount, result, memoizedFn] = [0, [], undefined];
  switch (fnName) {
    case "factorial":
      console.log("factorial");
      let memoizedFact = memoize((n) => {
        callCount += 1;
        return factorial(n);
      });
      memoizedFn = memoizedFact;
      break;
    case "fibonacci":
      console.log("fibonacci");
      let memoizedFib = memoize((n) => {
        callCount += 1;
        return fib(n);
      });
      memoizedFn = memoizedFib;
      break;
    case "sum":
      console.log("sum");
      let memoizedSum = memoize((a, b) => {
        callCount += 1;
        return sum(a, b);
      });
      memoizedFn = memoizedSum;
      break;
    default:
  }

  for (const args of values) {
    if (args.length) {
      result.push(memoizedFn(...args));
    } else {
      result.push(callCount);
    }
  }
  return result;
};

console.log(tester(actions, fnName[0], values));

// let callCount = 0;
// const memoizedSum = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });

// console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
// console.log(memoizedSum(2, 3)); // Output: 5
// console.log(callCount); // 1

// /**
//  * @param {Function} fn
//  */
// function memoize(fn) {
//   let memo = {};

//   return function (...args) {
//     const argString = JSON.stringify(args);
//     console.log({ argString });
//     if (argString in memo) {
//       return memo[argString];
//     } else {
//       let temp = fn(...args);
//       memo[argString] = temp;
//       return temp;
//     }
//   };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });

// let fnName = "sum",
//   actions = ["call", "call", "getCallCount", "call", "getCallCount"],
//   values = [[2, 2], [2, 2], [], [1, 2], []];
// const memoizedSum = memoize(sum);

// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5
// console.log(callCount); // 1

// given:
// function memoize(fn) {
//   return function (...args) {};
// }

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

/* 
Using a Map::
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}

Using function properties:
function memoize(fn) {
  fn.cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in fn.cache) {
      return fn.cache[key];
    }
    const result = fn(...args);
    fn.cache[key] = result;
    return result;
  }
}


Using closures::
function memoize(fn) {
  const cache = {};
  return function memoized(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}
 */
// Intuition
// The question is asking to create a memoized version of a given function (sum, fib, or factorial) that will cache previously computed results and return them for subsequent calls with the same inputs, rather than recomputing them.
// Approach
// Define a function calledmemoize that takes in a function fn as its parameter.
// Create an empty object called cache to store previously computed results.
// Return a new function that takes in any number of arguments using the spread syntax.
// Use JSON.stringify() to convert the arguments into a string to use as a key for the cache object
// Check if the key already exists in the cache object. If it does, return the cached value.
// If the key doesn't exist in the cache, call the original function fn using apply()to pass the arguments and store the result in the cache object using the key as the property name.
// Finally, return the computed result.
// Caching
// Question involves the concept of caching.
// Caching is a technique used to improve the performance of a program by storing the results of expensive operations and returning the cached result
// In this question, the memoized function stores the results of the expensive operations (sum, fib, and factorial) and returns the cached result when the same input values are requested again. This can improve the performance of the program significantly as it reduces the number of expensive operations that need to be performed.
// Memoized Function
// Memoization is a technique used to optimize functions that are expensive to compute or have repeated computations with the same input.
// The cache is usually implemented as an object or a map that stores the previously computed results.
// When the memoized function is called with a new input, it first checks if the input exists in the cache. If it does, it returns the cached value. If it doesn't, it computes the result, stores it in the cache, and returns it.
// Complexity
// Time complexity: memoized function depends on the original function being memoized, and can range from O(1) to O(n) to O(2^n).

// Space complexity:
// O(n), where n is the number of unique inputs to the function.

// Code In JS
// /**
//  * @param {Function} fn
//  */
// function memoize(fn) {

//    const cache = {};

//    return function(...args) {
//     const key = JSON.stringify(args);

//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn.apply(this, args);
//     cache[key] = result;

//     return result;
//   }

// }

// const memoizedSum = memoize(function(a, b) {
//   return a + b;
// });

// console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
// console.log(memoizedSum(2, 3)); // Output: 5

// Code In TypeScript
// type Func<T, U> = (arg: T) => U;

// interface Cache<T, U> {
//   [key: string]: U;
// }

// function memoize<T, U>(fn: Func<T, U>): Func<T, U> {
//   const cache: Cache<T, U> = {};

//   return function (...args: T[]): U {
//     const key = JSON.stringify(args);

//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn.apply(this, args);
//     cache[key] = result;

//     return result;
//   };
// }

// const memoizedSum = memoize(function (a: number, b: number): number {
//   return a + b;
// });

// const memoizedFib = memoize(function (n: number): number {
//   if (n <= 1) {
//     return 1;
//   }

//   return memoizedFib(n - 1) + memoizedFib(n - 2);
// });

// const memoizedFactorial = memoize(function (n: number): number {
//   if (n <= 1) {
//     return 1;
//   }

//   return memoizedFactorial(n - 1) * n;
// });

// console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
// console.log(memoizedSum(2, 3)); // Output: 5

// console.log(memoizedFib(5)); // Output: Computing fib, 8
// console.log(memoizedFib(5)); // Output: 8

// console.log(memoizedFactorial(5));
// console.log(memoizedFactorial(5));
