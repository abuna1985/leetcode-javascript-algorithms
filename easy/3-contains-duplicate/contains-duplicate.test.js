const containsDuplicate = require('./contains-duplicate');

describe('Edge Cases', () => {
	test('It should throw error message if no Arrays is given to the first parameter (nums)', () => {
		expect(() => containsDuplicate('1234567').toThrowError(new Error('You must provide an Array for nums. You provided: string')))
	});

	test('It should throw error message if all the array elements for nums is not  number', () => {
		expect(() => containsDuplicate([1, 2, 3, 'four', 4, 2]).toThrowError(new Error('All array elements be number values. You provided: [1, 2, 3, "four", 4, 2]')))
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return true when running containsDuplicate([1,2,3,1])', () => {
		expect(containsDuplicate([1,2,3,1])).toStrictEqual(true);
	});

  	test('It should return false when running containsDuplicate([1,2,3,4])', () => {
		expect(containsDuplicate([1,2,3,4])).toStrictEqual(false);
	});

	test('It should return true when running containsDuplicate([1,1,1,3,3,4,3,2,4,2])', () => {
		expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toStrictEqual(true);
	});

	test('It should return true when running containsDuplicate([1, 5, 2, 7, 8, 9, 781, 999, 1243, 6, 99, 1])', () => {
		expect(containsDuplicate([1, 5, 2, 7, 8, 9, 781, 999, 1243, 6, 99, 1])).toStrictEqual(true);
	});

	test('It should return false when running containsDuplicate([99, 121, 1576, 5, 64, 1258, 54, 178, 222, 361, 919, 852, 456, 875421, 6, 2, 55])', () => {
		expect(containsDuplicate([99, 121, 1576, 5, 64, 1258, 54, 178, 222, 361, 919, 852, 456, 875421, 6, 2, 55])).toStrictEqual(false);
	});
});
