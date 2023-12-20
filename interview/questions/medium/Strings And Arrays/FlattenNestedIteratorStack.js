/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.list = flatten(nestedList)
    this.top = 0
 };
 
 
 /**
  * @this NestedIterator
  * @returns {boolean}
  */
 NestedIterator.prototype.hasNext = function() {
     return this.top < this.list.length
 };
 
 /**
  * @this NestedIterator
  * @returns {integer}
  */
 NestedIterator.prototype.next = function() {
     return this.list[this.top++]
 };
 
 
 function flatten(input) {
   const stack = [...input];
   const res = [];
   while (stack.length) {
     let next = stack.pop();
     if (next._list.length) {
       stack.push(...next._list);
     } else if(next._integer != null) {
       res.push(next._integer);
     }
   }
   return res.reverse()
 }
 
 /**
  * Your NestedIterator will be called like this:
  * var i = new NestedIterator(nestedList), a = [];
  * while (i.hasNext()) a.push(i.next());
 */