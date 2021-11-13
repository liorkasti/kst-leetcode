/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [1, 2,3]

const subsets = (nums) => {
    const subsets = [[]]
    const generate = (nums)=>{
        for(let i = 0; i< nums.length; i++){
            const size = subsets.length
            for(let j = 0; j < size; j++){
              const current = subsets[j]
              const newSub = [...current, nums[i]]
              subsets.push(newSub)
            }
          }
      }
      generate(nums)
    return subsets
};

const uniqBy = (a, key) => {
    var index = [];
    return a.filter(item => {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
}

console.log(`output: `, subsets(nums))