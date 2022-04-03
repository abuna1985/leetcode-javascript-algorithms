// Problem
//leetcode.com/problems/two-sum/submissions/

/**
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 */
var twoSum = function(nums, target) {
  // create an empty Set
  let numObj = {}
  // Another ride on the loops
  for (let i = 0; i < nums.length; i++) {
		// store the current number as variable
		let currentNum = nums[i];
		// This time we will get the difference between the current number and the target. Store it in the variable diff
		let diff = target - nums[i];
		// Check if the diff exist in the number Object key and the index value is not the same as the current index
		if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
			// If true, return  number object value current index 
			return [numObj[diff], i];
		}
		// add the current number as a key and the index as the value
		numObj[currentNum] = i;
	}
};

module.exports = twoSum;