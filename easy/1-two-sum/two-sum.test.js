const twoSum = require('./two-sum');

describe('Edge Cases', () => {
	// Edge Cases
	test('It should throw error message if no array is given to the first parameter (nums)', () => {
		expect(() => twoSum(7, 9)).toThrowError(
			new Error('You must provide an array for nums. You provided: 7')
		);
	});

	test('It should return an [] if you provide 1 element to the first parameter (nums)', () => {
		expect(twoSum([5], 9)).toStrictEqual([]);
	});

	test('It should return [] no matches are found for the second parameter (target)', () => {
		expect(twoSum([5, 7, -2, 9, 6, -8], 504)).toStrictEqual([]);
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return [0, 2] when running twoSum([7, 11, 2, 15], 9)', () => {
		expect(twoSum([7, 11, 2, 15], 9)).toStrictEqual([0, 2]);
	});

	test('It should return [1, 2] when running twoSum([3, 2, 4], 6)', () => {
		expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
	});

	test('It should return [0, 1] when running twoSum([3,3], 6)', () => {
		expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
	});

	test('It should return [1, 2] when running twoSum([3, 5, 2, -4, 8, 11], 7)', () => {
		expect(twoSum([3, 5, 2, -4, 8, 11], 7)).toStrictEqual([1, 2]);
	});
});


