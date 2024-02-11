/* 2634. Filter Elements from Array [Easy]
https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => arr.flatMap((x, i) => (fn(x, i) ? [x] : []));

// given:
// var filter = function(arr, fn) {  };

/* Complexity :
Time complexity: O(n)

Space complexity: O(n)

For Each loop
var filter = function(arr, fn) {
   let newArray = [];
   arr.forEach((x,i) => {
      if(fn(x,i)){
         newArray.push(x);
      }
   });
   return newArray;
};
For of loop
var filter = function(arr, fn) {
   let newArray = [];
   let i=0;
   for(const x of arr){
      if(fn(x,i)){
         newArray.push(x);
      }
      i++;
   }
   return newArray;
};
Array.map()
var filter = function(arr, fn) {
   let newArray = [];
   arr.map((x,i) => {
      if(fn(x,i)){
         newArray.push(x);
      }
   });
   return newArray;
};
Array.reduce()
var filter = function(arr, fn) {
   return arr.reduce((newArray, x, i) => {
      if(fn(x, i)){
         newArray.push(x);
      }
      return newArray;
   }, []);
};
For loop
var filter = function(arr, fn) {
   let newArray = [];
   for(let i=0;i<arr.length;i++){
      if(fn(arr[i],i)){
         newArray.push(arr[i]);
      }
   }
   return newArray;
};
While loop
var filter = function(arr, fn) {
   let newArray = [];
   let i=0;
   while(i<arr.length){
      if(fn(arr[i],i)){
         newArray.push(arr[i]);
      }
      i++;
   }
   return newArray;
};
Array.filter() [Restricted for this problem]
var filter = function(arr, fn) {
    return arr.filter(fn);
};
Array.flatMap()
credit to @Nathan

var filter = function(arr, fn) {
    return arr.flatMap((x, i) => fn(x, i) ? [x] : []);
}; */
