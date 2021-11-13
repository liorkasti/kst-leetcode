/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [8, 8, 9];

var permute = (nums) => {
    const result = [];

    const permuteSubset = (current, excludes) => {
        excludes && console.log(`excludes`, excludes);
        if (current.length === nums.length) {
            current && console.log(`current`, current);
            result.push(current.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const key = `${i}`;
            console.log(`key> `, key)
            if (!excludes.has(key)) {
                excludes.add(key);
                current.push(nums[i]);
                permuteSubset(current, excludes);
                current.pop();
                excludes.delete(key);
            }
        }
    };
    permuteSubset([], new Set());

    const destinct = new Set()
    result.forEach(comb => {
        destinct.has(comb) ?
            null
            :
            destinct.add(comb)
    });

    return uniqBy(result, JSON.stringify);
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

    return uniqBy(permutations, JSON.stringify);
};

const uniqBy = (a, key) => {
    var index = [];
    return a.filter(item => {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
}

console.log(`output:`, permute(nums));
console.log(`output:`, permutation(nums));
