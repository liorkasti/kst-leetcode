/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 2, 2]
// const nums = [4,4,4,1,4]

const subsetsWithDupBT = (nums) => {
    nums = nums.sort((a, b) => a - b);

    const subsets = [];

    const backtrack = (len, index = 0, newSub = []) => {
        if (newSub.length === len) {
            subsets.push(newSub.slice());//slice() is used to create a copy of the array
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i - 1] === nums[i]) continue;
            newSub.push(nums[i]);
            backtrack(len, i + 1, newSub);
            newSub.pop();
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        backtrack(i);
    }

    return subsets;
}
console.log(`output subsetsWithDupBT: `, subsetsWithDupBT(nums));

function subsetsWithDupDFS(nums) {
    const result = [];
    nums.sort((a, b) => a-b);
    dfs(0)
    return result;

    function dfs(index, combo = []) {
        if(index === nums.length) {
            result.push([...combo]);
            return;
        }

        //choose 
        combo.push(nums[index]);
        dfs(index + 1, combo);
        //dont choose
        combo.pop();
        while(index < nums.length && nums[index] === nums[index + 1]) index++;
        dfs(index + 1, combo);
    }
}
console.log(`output subsetsWithDupDFS: `, subsetsWithDupDFS(nums));

const subsetsWithDup = (nums) => {
    nums = nums.sort((a, b) => a - b);

    const subsets = [];

    const backtrack = (len, index = 0, newSet = []) => {
        if (newSet.length === len) {
            subsets.push(newSet.slice());//slice() is used to create a copy of the array
            return;
        }
        for (let i = index; i < nums.length; i++) {
            if (i !== index && nums[i - 1] === nums[i]) continue;
            newSet.push(nums[i]);
            backtrack(len, i + 1, newSet);
            newSet.pop();
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        backtrack(i);
    }

    return subsets;
}

// console.log(`output: `, subsetsWithDup(nums));

var dfsSubsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const dfs = (nums, i, arr) => {
        if(i === nums.length) {
            res.push(arr);
            return;
        }
        dfs(nums, i+1, arr);
        let newarr = arr.concat(nums[i]);
        dfs(nums, i+1, newarr);
    };
    dfs(nums, 0, []);
    return Array.from(new Set(res.map(JSON.stringify)), JSON.parse);
};


// const nums = [4,4,4,1,4]
// const subsetsWithDup = (nums) => {
//     nums.sort();
//     let subsets = [];
//     backtracking(0, [], nums, subsets);
//     return subsets
// };

// const backtracking = (index, list, nums, subsets) => {
//     if (index > nums.length) return
//     subsets.push([...list]);
//     for (index; index < nums.length; index++) {
//         if (index > index && nums[index] === nums[index - 1]) continue
//         list.push(nums[index]);
//         backtracking(index + 1, list, nums, subsets);
//         list.pop();
//     }
//     return subsets;
// }

// const uniqBy = (a, key) => {
//     var index = [];
//     return a.filter(item => {
//         var k = key(item);
//         return index.indexOf(k) >= 0 ? false : index.push(k);
//     });
// }

// Iterative:
// var subsetsI = function (nums) {
//     const subsets = [[]];

//     for (let num of nums) {
//         let append = [];
//         for (let entry of subsets) {
//             append.push([...entry, num]);
//         }
//         subsets.push(...append);
//     }

//     return uniqBy(subsets, JSON.stringify);
// };
// console.log('Iterative output: ', subsetsI(nums));

// Recursive:
// var subsetsR = function (nums) {
//     const subsets = [];
//     const generate = (head = [], left = nums) => {
//         subsets.push(head)
//         if (left.length === 0) { return; }
//         for (let i = 0; i < left.length; i++) {
//             generate([...head, left[i]], left.filter((_, j) => j > i))
//         }
//     }
//     generate()
//     return uniqBy(subsets, JSON.stringify);;
// };


// console.log('Recursive output: ', subsetsR(nums));

