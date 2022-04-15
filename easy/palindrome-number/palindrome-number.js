// Problem
// https://leetcode.com/problems/palindrome-number/submissions/

// Solution
// https://leetcode.com/submissions/detail/680538504/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x !== "number") throw new Error(`You must provide an number for x. You provided: ${x}`);
	if (x < 0) return false;

	let reversed = 0;
	let y = x;

	while (y > 0) {
		reversed = reversed * 10 + (y % 10);
		y = (y / 10) | 0;
	}

	return x === reversed;
};

module.exports = isPalindrome;