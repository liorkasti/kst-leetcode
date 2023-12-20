<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = []; nums.unshift(0);
  
  for(let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i]);
      if(nums[idx] < 0) result.push(idx);
      nums[idx] *= -1;
  }
  return result;    
};

var findDuplicates = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i])
    let index = x - 1
    if (nums[index] < 0) {
      arr.push(x)
    } else {
      nums[index] = nums[index] * -1
    }
  }
  return arr
=======
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const result = []; nums.unshift(0);
  
  for(let i = 0; i < nums.length; i++) {
      const idx = Math.abs(nums[i]);
      if(nums[idx] < 0) result.push(idx);
      nums[idx] *= -1;
  }
  return result;    
};

var findDuplicates = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i])
    let index = x - 1
    if (nums[index] < 0) {
      arr.push(x)
    } else {
      nums[index] = nums[index] * -1
    }
  }
  return arr
>>>>>>> origin/master
}