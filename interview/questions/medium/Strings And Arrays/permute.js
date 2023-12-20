/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function dfs(nums, path, allPaths, start, used) { // Backtracking | JavaScript
    if (start === nums.length) {
        allPaths.push([...path]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(used);
        if (used[i]) {
            continue;
        }
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, path, allPaths, start + 1, used);
        used[i] = false;
        path.pop();
    }
}
var permute = function (nums) {
    const path = [];
    const allPaths = [];
    const used = new Array(nums.length).fill(false);
    dfs(nums, path, allPaths, 0, used);
    return allPaths;
};


// swapping way

var permuteS = function (nums) {
    let results = [];
    p_helper(nums, 0, results);
    return results;
};

function p_helper(nums, idx, results) {
    if (idx === nums.length) {
        results.push([...nums]);
    }

    for (let i = idx; i < nums.length; i++) {
        swap(nums, idx, i);
        p_helper(nums, idx + 1, results);
        swap(nums, idx, i);
    }
}

function swap(nums, i1, i2) {
    let tmp = nums[i1];
    nums[i1] = nums[i2];
    nums[i2] = tmp;
}


const nums = [1, 2, 3];
const nums2 = [1, 1, 2];

console.log(`output:`, permuteS(nums));
// console.log(`output:`, permute(nums2));