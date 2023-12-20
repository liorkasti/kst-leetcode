<<<<<<< HEAD
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
        console.log('res :>> ', res[i]);
    }
    return res;      // Return the output list of pascal values...
};
generate(6)

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (r) {
    var ans = new Array(r + 1)
    ans[0] = ans[r] = 1
    for (i = 1, up = r; i < r; i++, up--)

        ans[i] = ans[i - 1] * up / i
    return ans
};

var getRow2 = function(rowIndex) {
    const ans = [];
    let val = 1;
    for(let i=0; i<=rowIndex; i++){
        ans.push(val);
        console.log(val, rowIndex-i);
        console.log(i+1);
        val = val * (rowIndex-i)/(i+1)
        console.log('sum: ',val);
    }
    return ans;
};
console.log('generate(5) :>> ', getRow2(4));
=======
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
        console.log('res :>> ', res[i]);
    }
    return res;      // Return the output list of pascal values...
};
generate(6)

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (r) {
    var ans = new Array(r + 1)
    ans[0] = ans[r] = 1
    for (i = 1, up = r; i < r; i++, up--)

        ans[i] = ans[i - 1] * up / i
    return ans
};

var getRow2 = function(rowIndex) {
    const ans = [];
    let val = 1;
    for(let i=0; i<=rowIndex; i++){
        ans.push(val);
        console.log(val, rowIndex-i);
        console.log(i+1);
        val = val * (rowIndex-i)/(i+1)
        console.log('sum: ',val);
    }
    return ans;
};
console.log('generate(5) :>> ', getRow2(4));
>>>>>>> origin/master
