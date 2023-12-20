<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums = [1, 2, 3]
var subsetsBW = function (nums) {
    max = 1 << nums.length; // 2^n
    let subsets = [];

    for (i = 0; i < max; i++) {
        set = [];
        k = i;
        index = 0;
        while (k > 0) {
            if ((k & 1) > 0) {
                set.push(nums[index]);
            }
            k >>= 1;
            ++index;
        }
        subsets.push(set);
    }

    return subsets;
}
console.log(`BW output: `, subsetsBW(nums))


var subsetsDFS = function (nums) {
    let subsets = [];
    const dfs = (i, nums, slate) => {
        console.log(i, slate);
        //base case 
        if (i === nums.length) {
            subsets.push(slate.slice())
            return;
        }

        //include next index 
        slate.push(nums[i])
        dfs(i + 1, nums, slate)

        //exclude next index
        slate.pop()
        dfs(i + 1, nums, slate);

    }
    dfs(0, nums, [])
    return subsets;
};
console.log(`DFS output: `, subsetsDFS(nums))

// Iterative:
var subsets = function (nums) {
    const sebsets = [[]];

    for (let num of nums) {
        let append = [];
        for (let entry of sebsets) {
            append.push([...entry, num]);
        }
        sebsets.push(...append);
    }

    return sebsets;
};
// console.log('Iterative output: ', subsets(nums))

Recursive:
var subsetsR = function (nums) {
    const sebsets = [];
    const generate = (head = [], left = nums) => {
        sebsets.push(head)
        if (left.length === 0) { return; }
        for (let i = 0; i < left.length; i++) {
            generate([...head, left[i]], left.filter((_, j) => j > i))
        }
    }
    generate()
    return sebsets;
};

const uniqBy = (a, key) => {
    var index = [];
    return a.filter(item => {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
}

=======
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const nums = [1, 2, 3]
var subsetsBW = function (nums) {
    max = 1 << nums.length; // 2^n
    let subsets = [];

    for (i = 0; i < max; i++) {
        set = [];
        k = i;
        index = 0;
        while (k > 0) {
            if ((k & 1) > 0) {
                set.push(nums[index]);
            }
            k >>= 1;
            ++index;
        }
        subsets.push(set);
    }

    return subsets;
}
console.log(`BW output: `, subsetsBW(nums))


var subsetsDFS = function (nums) {
    let subsets = [];
    const dfs = (i, nums, slate) => {
        console.log(i, slate);
        //base case 
        if (i === nums.length) {
            subsets.push(slate.slice())
            return;
        }

        //include next index 
        slate.push(nums[i])
        dfs(i + 1, nums, slate)

        //exclude next index
        slate.pop()
        dfs(i + 1, nums, slate);

    }
    dfs(0, nums, [])
    return subsets;
};
console.log(`DFS output: `, subsetsDFS(nums))

// Iterative:
var subsets = function (nums) {
    const sebsets = [[]];

    for (let num of nums) {
        let append = [];
        for (let entry of sebsets) {
            append.push([...entry, num]);
        }
        sebsets.push(...append);
    }

    return sebsets;
};
// console.log('Iterative output: ', subsets(nums))

Recursive:
var subsetsR = function (nums) {
    const sebsets = [];
    const generate = (head = [], left = nums) => {
        sebsets.push(head)
        if (left.length === 0) { return; }
        for (let i = 0; i < left.length; i++) {
            generate([...head, left[i]], left.filter((_, j) => j > i))
        }
    }
    generate()
    return sebsets;
};

const uniqBy = (a, key) => {
    var index = [];
    return a.filter(item => {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
}

>>>>>>> origin/master
// console.log(`Recursive output: `, subsetsR(nums))