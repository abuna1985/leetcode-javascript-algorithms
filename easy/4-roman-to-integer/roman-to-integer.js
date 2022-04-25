// Problem
// https://leetcode.com/problems/roman-to-integer/
// Solution
// https://leetcode.com/submissions/detail/683795925/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	// store roman numerals as the key
	// store the number as the value
	let symbolMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	// store result of loop logic in result
	let result = 0;

	if (typeof s !== 'string') {
		throw new Error(
			`You must provide an String for s. You provided: ${typeof s}`
		);
	}

	// https://www.w3docs.com/snippets/javascript/how-to-check-whether-a-string-matches-a-regex-in-javascript.html
	if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(s)) {
		throw new Error(
			`You must provide a String of roman numerals. You provided: ${s}`
		);
	}

	for (i = 0; i < s.length; i++) {
		if (symbolMap[s[i]] < symbolMap[s[i + 1]]) {
			result -= symbolMap[s[i]];
			continue;
		}
		result += symbolMap[s[i]];
	}

	return result;
};

module.exports = romanToInt;