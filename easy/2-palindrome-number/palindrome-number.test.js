const isPalindrome = require('./palindrome-number');

describe('Edge Cases', () => {
	// Edge Cases
	test('It should throw error message if no number is given to the first parameter (x)', () => {
		expect(() => isPalindrome("seven")).toThrowError(new Error('You must provide an number for x. You provided: seven'));
	});

	test('It should return false if you provide a negative number for the first parameter (x)', () => {
		expect(isPalindrome(-555)).toStrictEqual(false);
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return true when running isPalindrome(1010101)', () => {
		expect(isPalindrome(1010101)).toStrictEqual(true);
	});

	test('It should return true when running isPalindrome(2332)', () => {
		expect(isPalindrome(2332)).toStrictEqual(true);
	});

	test('It should return false when running isPalindrome(3849)', () => {
		expect(isPalindrome(3849)).toStrictEqual(false);
	});

  test('It should return false when running isPalindrome(-121)', () => {
		expect(isPalindrome(-121)).toStrictEqual(false);
	});

	test('It should return true when running isPalindrome(121)', () => {
		expect(isPalindrome(121)).toStrictEqual(true);
	});
});
