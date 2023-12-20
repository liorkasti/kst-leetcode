removeDuplicates = (nums) => {

    if (nums == null || nums.length == 0)
        return 0;
    if (nums.length == 1)
        return 1;

    var slow = 0; var fast = 1;

    while (fast < nums.length) {
        if (nums[fast] != nums[slow]) {
            nums[++slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(`output: `, removeDuplicates(nums));