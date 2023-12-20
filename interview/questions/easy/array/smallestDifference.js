function smallestDifference(arr1, arr2) {
    // sort both arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // initialize pointers and smallest difference
    let i = 0;
    let j = 0;
    let minDiff = Number.MAX_VALUE;

    // iterate through both arrays
    while (i < arr1.length && j < arr2.length) {
        // calculate the absolute difference
        let diff = Math.abs(arr1[i] - arr2[j]);

        // update the smallest difference if necessary
        if (diff < minDiff) {
            minDiff = diff;
        }

        // move the pointer for the array with the smaller element
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return minDiff;
}

let A = [ 1, 2, 11, 5 ];
 
// Input given array B
let B = [ 4, 12, 19, 23, 127, 235 ];

console.log(smallestDifference(A,B));