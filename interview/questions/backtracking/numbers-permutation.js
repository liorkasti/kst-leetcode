/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 1, 2];
const permuteUnique = (nums) => {
    let res = [], remain = [], set = new Set(nums);
    nums.forEach(num => remain[num] ? remain[num]++ : remain[num] = 1);

    function permute(depth, remain, cur) {
        if (depth == nums.length) {
            res.push(cur.slice());
            return;
        }
        for (let num of set) {
            if (remain[num]) {
                cur.push(num);
                remain[num]--;

                // move to the next depth
                permute(depth + 1, remain, cur);

                // backtrack to previous state
                cur.pop();
                remain[num]++;
            }
        }
        return res;
    }
    return permute(0, remain, []);
}

var permute = (nums) => {
    const result = [];

    const permuteSubset = (current, excludes) => {
        if (current.length === nums.length) {
            result.push(current.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const key = `${i}`;
            if (!excludes.has(i)) {
                excludes.add(i);
                current.push(nums[i]);
                permuteSubset(current, excludes);
                current.pop();
                excludes.delete(i);
            }
        }
    };
    permuteSubset([], new Set());
    return result;
    // return uniqBy(result, JSON.stringify);
};

//Solution 2
let permutation = (nums) => {
    let permutations = [];

    let swap = (array, firstIndex, secIndex) => {
        let temp = array[firstIndex];

        array[firstIndex] = array[secIndex];

        array[secIndex] = temp;
    }

    let getPermutation = (array, firstIndex, lastIndex) => {
        if (firstIndex == lastIndex) {
            permutations.push([...array]);
        }
        else {
            for (let i = firstIndex; i <= lastIndex; i++) {
                swap(array, firstIndex, i);
                getPermutation(array, firstIndex + 1, lastIndex);
                swap(array, firstIndex, i);
            }
        }
    }

    getPermutation(nums, 0, nums.length - 1);
    return permutations;
    // return uniqBy(permutations, JSON.stringify);
};

const uniqBy = (a, key) => {
    var index = [];
    return a.filter(item => {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
}

console.log(`output:`, permute(nums));
// console.log(`output:`, permutation(nums));
