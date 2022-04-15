const twoSum = require('./two-sum');

// Edge Cases
test('Returns error message if you do not provide an array to the first parameter (nums)', () => {
	expect(() => twoSum(7, 9)).toThrowError(new Error('You must provide an array for nums. You provided: 7'));
});

test('Returns empty array if you provide 1 element in the nums array', () => {
	expect(twoSum([5], 9)).toStrictEqual([]);
});

test('Returns empty array no matches are found', () => {
	expect(twoSum([5, 7, -2, 9, 6, -8], 504)).toStrictEqual([]);
});

// Test Cases
test('Return [0, 2] for twoSum([7, 11, 2, 15], 9)', () => {
	expect(twoSum([7, 11, 2, 15], 9)).toStrictEqual([0, 2]);
});

test('Return [1, 2] for twoSum([3, 2, 4], 6)', () => {
	expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('Return [0, 1] for twoSum([3,3], 6)', () => {
	expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test('Return [1, 2] for twoSum([3, 5, 2, -4, 8, 11], 7)', () => {
	expect(twoSum([3, 5, 2, -4, 8, 11], 7)).toStrictEqual([1, 2]);
});
