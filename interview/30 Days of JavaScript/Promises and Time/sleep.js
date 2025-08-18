/* 2621. Sleep [Easy]
https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000 */

/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = async (millis) =>
  await new Promise((resolve) => setTimeout(resolve, millis));

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// Solutions:
// const interval = setInterval(() => {
//     interval().then((x) => {
//        console.log(x);
//      }, 1000)
//     })

// withResolvers:
/* const promise1 = new Promise((resolve, reject) => {
  resolve();
  reject();
});
const { promise, resolve, reject } = Promise.withResolvers();
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
} */

// Javascript Solution without using error handling and Async/await:
// /**
//  * @param {number} millis
//  */
// async function sleep(millis) {
//   return new Promise(delayresolve => setTimeout(delayresolve, millis));
// }

// /**
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100
//  */
// Typescript Solution without using error handling and uses async/await:
// async function sleep(millis: number): Promise<void> {
//     return new Promise<void>(delayresolve => {
//         setTimeout(delayresolve, millis);
//     });
// }
// /**
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100
//  */
// Javascript solution using error handling and async/await:
// /**
//  * @param {number} millis
//  */
// async function sleep(millis) {
//   return new Promise((delayresolve, reject) => {
//     if (typeof millis !== 'number' || isNaN(millis)) {
//       reject(new Error('Invalid argument. Expected a number.'));
//     } else {
//       setTimeout(delayresolve, millis);
//     }
//   });
// }
// /**
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100
//  */
// Typescript solution using error handling and async/await:
// async function sleep(millis: number): Promise<void> {
//   return new Promise<void>((delayresolve, reject) => {
//     if (typeof millis !== 'number' || isNaN(millis)) {
//       reject(new Error('Invalid argument. Expected a number.'));
//     } else {
//       setTimeout(delayresolve, millis);
//     }
//   });
// }

// /**
//  * let t = Date.now()
//  * sleep(100).then(() => console.log(Date.now() - t)) // 100
//  */
// Dry Run:
// For dry run lets take the above solution as a reference and call the delay function with the required arguments:

// function delay(value, millis) {
//   return new Promise((delayresolve) => {
//     setTimeout(() => delayresolve(value), millis);
//   });
// }

// delay('hello', 1000).then((result) => console.log(result));
// This creates a promise that resolves to the value 'hello' after a delay of 1000 milliseconds (1 second). The .then() method is used for handling the resolved value.

// Time Complexity: O(1)
// Space Complexity: O(1)
