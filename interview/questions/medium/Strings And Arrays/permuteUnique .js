const nums = [1, 1, 2];
// const nums = [1, 2, 3];

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
        console.log('res :>> ', res);
        return res;
    }
    return permute(0, remain, []);
}

var permuteUnique2 = function (nums) {
    let res = [];

    nums.sort((a, b) => (a - b));
    dfs(res, [], nums);

    return res;
};

let dfs = function (res, arr, nums) {
    let len = nums.length;
    let left = right = null;

    if (!len) return res.push(arr);

    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;

        left = Array.from(arr);
        left.push(nums[i]);

        right = Array.from(nums);
        right.splice(i, 1);
        console.log(left, right);
        dfs(res, left, right);
    }
};


console.log(`output: `, permuteUnique2(nums));