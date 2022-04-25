// Problem
//https://leetcode.com/problems/two-sum/

//Solution
// https://leetcode.com/submissions/detail/680521245/

/**
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 */
function twoSum(nums = [], target) {
	if (!Array.isArray(nums)) throw new Error(`You must provide an array for nums. You provided: ${nums}`);
	if (nums.length < 2) return [];

	let numsObject = {};
	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i];
		let diffBetweenTarget = target - nums[i];
		if (
			numsObject.hasOwnProperty(diffBetweenTarget) &&
			numsObject[diffBetweenTarget] !== i
		) {
			// If true, return an array with the 2 indexes which values match the target variable
			return [numsObject[diffBetweenTarget], i];
		}
		numsObject[currentNum] = i;
	}

	return [];
};

module.exports = twoSum;