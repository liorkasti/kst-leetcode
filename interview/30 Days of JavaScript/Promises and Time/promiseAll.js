/* 2721. Execute Asynchronous Functions in Parallel [Medium]
https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript
Add to List

Share
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

 

Example 1:

Input: functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation: 
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
Example 2:

Input: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
Output: {"t": 100, "rejected": "Error"}
Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.
Example 3:

Input: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
Output: {"t": 150, "resolved": [4, 10, 16]}
Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.
 

Constraints:

functions is an array of functions that returns promises
1 <= functions.length <= 10
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = async = (functions)=> new Promise((resolve,reject) => {
    if(functions.length === 0) {
        resolve([]);
        return;
    }
    
    const res = new Array(functions.length).fill(null);

    let resolvedCount = 0;

    functions.forEach(async (el,idx) => {
        try {
            const subResult = await el();
            res[idx] = subResult;
            resolvedCount++;
            if(resolvedCount=== functions.length) {
                resolve(res);
            }
        } catch(err) {
            reject(err);
        }
    });
});

// const promiseAll=(functions) => new Promise((resolve, reject) => {
//     let res = Array(functions.length);
//     let waitingFor = functions.length;

//     for (let i = 0; i < waitingFor; i++) {
//         functions[i]()
//             .then((result) => {
//                 res[i] = result;
//                 waitingFor--;
//                 if (waitingFor === 0) resolve(res);
//             })
//             .catch(reject);
//     }
// });


// const promiseAll =(functions)=> new Promise((resolve,reject) => {
//     if(functions.length === 0) {
//         resolve([]);
//         return;
//     }
    
//     const res = new Array(functions.length).fill(null);

//     let resolvedCount = 0;

//     functions.forEach(async (el,idx) => {
//         try {
//             const subResult = await el();
//             res[idx] = subResult;
//             resolvedCount++;
//             if(resolvedCount=== functions.length) {
//                 resolve(res);
//             }
//         } catch(err) {
//             reject(err);
//         }
//     });
// });

// const promiseAll = (functions)=> new Promise((resolve, reject) => {
//     const results = []; // Array to hold the results of each promise
//     let completed = 0; // Counter to keep track of completed promises
//     let hasRejected = false; // Flag to ensure the promise is only rejected once

//     // Iterate over each function
//     for (let i = 0; i < functions.length; i++) {
//         const func = functions[i];
        
//         // Execute the function and get the promise
//         func().then(result => {
//             // Store the result in the correct index
//             results[i] = result;
            
//             // Increment the count of completed promises
//             completed += 1;
            
//             // Check if all promises are completed
//             if (completed === functions.length) {
//                 resolve(results); // Resolve with the array of results
//             }
//         }).catch(error => {
//             // If there's an error, reject the promise with the first error encountered
//             if (!hasRejected) {
//                 hasRejected = true;
//                 reject(error); // Reject with the reason of the first rejection
//             }
//         });
//     }
// });

// Example usage:
const promise = promiseAll([
    () => new Promise(res => res(42)),
    () => new Promise(res => setTimeout(() => res('Hello'), 100)),
    () => new Promise((_, rej) => setTimeout(() => rej('Error'), 200))
]);

promise
    .then(console.log) // This will not be reached because of the rejection
    .catch(console.error); // This will log: Error
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */