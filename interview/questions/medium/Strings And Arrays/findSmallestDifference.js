/* 
Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

Examples : 

Input : A[] = {1, 3, 15, 11, 2}
        B[] = {23, 127, 235, 19, 8} 
Output : 3  
That is, the pair (11, 8) 

Input : A[] = {10, 5, 40}
        B[] = {50, 90, 80} 
Output : 10
That is, the pair (40, 50) 
*/
// JavaScript Code to find Smallest
// Difference between two Arrays
 
// function to calculate Small
// result between two arrays
function smallestDifference(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let i = j = 0;
    let minDiff = Infinity;
    let currentDiff;
    while (i < arr1.length && j < arr2.length) {
      currentDiff = Math.abs(arr1[i] - arr2[j]);
      minDiff = Math.min(minDiff, currentDiff);
      if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
    return minDiff;
  }
console.log(smallestDifference([10, 5, 40], [50, 90, 80]));  


function findSmallestDifference(A, B, m, n)
{
     
    // Sort both arrays using
    // sort function
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
 
    let a = 0, b = 0;
 
    // Initialize result as max value
    let result = Number.MAX_SAFE_INTEGER;
 
    // Scan Both Arrays upto
    // sizeof of the Arrays
    while (a < m && b < n)
    {
        if (Math.abs(A[a] - B[b]) < result)
            result = Math.abs(A[a] - B[b]);
 
        // Move Smaller Value
        if (A[a] < B[b])
            a++;
        else
            b++;
    }
 
    // Return final sma result
    return result;
}
 
// Driver Code
 
// Input given array A
let A = [ 1, 2, 11, 5 ];
 
// Input given array B
let B = [ 4, 12, 19, 23, 127, 235 ];
 
// Calculate size of Both arrays
let m = A.length;
let n = B.length;
 
// Call function to print
// smallest result
console.log(findSmallestDifference(A, B, m, n));
 
// This code is contributed by Surbhi Tyagi.