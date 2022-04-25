// Problem
// https://leetcode.com/problems/contains-duplicate/submissions/
// Solution
// https://leetcode.com/submissions/detail/671855566/


function containsDuplicate (nums) {
	// Check for Array
	if (!Array.isArray(nums)) {
		throw new Error(
			`You must provide an Array for nums. You provided: ${typeof nums}`
		);
	}
	 
	// Check for all elements being numbers
	if (!nums.every(num => Number.isInteger(num))) {
		throw new Error(
			`All array elements be number values. You provided: ${nums}`
		);
	}

	// store previous numbers in numSet
	let numSet = new Set();
	// run a loop
	for (let i = 0; i < nums.length; i++) {
		// if current number exists in numObj
		if (numSet.has(nums[i])) {
			return true;
		}
		// end if
		// add current number to numSet
		numSet.add(nums[i]);
	}
	// end a loop
	// if no duplicate is found, return false
	return false;
};

module.exports = containsDuplicate;
