/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (value in obj) {
      return [obj[value], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
