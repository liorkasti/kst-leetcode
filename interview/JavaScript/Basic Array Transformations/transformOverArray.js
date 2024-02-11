/* 2635. Apply Transform Over Each Element in Array [Easy]
https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => arr.map(fn);

// given:
// var map = function (arr, fn) {};

/* 1. Using a for loop with operational container:
We can loop through each element of the input array and apply the map function to each element. We then store the transformed values in a new array.
var map = function(arr, fn) {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }
  return transformedArr;
};
TC and SC: O(n)

Using a for loop without any container a.k.a Inmemory transformations
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};
TC and SC : O(n) and O(1)

This is a bad practice as it alters the given data and also It can result in unexpected problems where the programmer was not expecting that as a side-effect.
Now think that you have got a data of array knwon as personsAge now they need to check if a person is 18+ or not and if yes they want to mark it as 1 if not then 0.
So if we implement this method to that real world question we are gonna loose the most important data i.e. the persons age and instead of persons age now that column will have 1 and 0.
Now say the app is scaled to many countries and one of the countires has +21 as adult benchmark.
Should the firm again ask for their age?
Should the developers have used a different method then it would have been a smooth process.
"THATS WHY NEVER MESS WITH PASSED DATA."
#Note: The built-in Array.map() does not modify the original array.

2. Using the forEach method:
We can use the forEach method to iterate through each element of the input array and apply the map function to each element. We then store the transformed values in a new array.
var map = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};
TC and SC: O(n)

3. Using the reduce method:
We can use the reduce method to iterate through each element of the input array and apply the map function to each element. We then accumulate the transformed values in a new array.
var map = function(arr, fn) {
  return arr.reduce((transformedArr, element, index) => {
    transformedArr[index] = fn(element, index);
    return transformedArr;
  }, []);
};
TC and SC: O(n)

4. Using the for...of loop:
We can use the for...of loop to iterate through each element of theinput array and apply the map function to each element. We then store the transformed values in a new array.
var map = function(arr, fn) {
  const transformedArr = [];
  let index = 0;
  for (const element of arr) {
    transformedArr[index] = fn(element, index);
    index++;
  }
  return transformedArr;
};
TC and SC: O(n) */
