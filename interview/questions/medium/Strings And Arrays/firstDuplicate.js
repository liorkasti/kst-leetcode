<<<<<<< HEAD
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[Math.abs(nums[i]) - 1] < 0) {
          console.log(nums[Math.abs(nums[i]) - 1])
          return Math.abs(nums[i]);
      }
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
  }
  return -1;
};

=======
var findDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[Math.abs(nums[i]) - 1] < 0) {
          console.log(nums[Math.abs(nums[i]) - 1])
          return Math.abs(nums[i]);
      }
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
  }
  return -1;
};

>>>>>>> origin/master
console.log(findDuplicate(2,1,3,5,3.2))