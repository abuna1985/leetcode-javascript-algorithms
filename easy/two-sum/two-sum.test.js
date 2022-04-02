const twoSum = require('./two-sum');

test('Return [0, 2] for twoSum([7, 11, 2, 15], 9)', () => {
	expect(twoSum([7, 11, 2, 15], 9)).toStrictEqual([0, 2]);
});

test('Return [1, 2] for twoSum([3, 2, 4], 6)', () => {
	expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('Return [0, 1] for twoSum([3,3], 6)', () => {
	expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});
