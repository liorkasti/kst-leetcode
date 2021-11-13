/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 2, 3]
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
console.log('Iterative output: ', subsets(nums))

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

console.log(`Recursive output: `, subsetsR(nums))