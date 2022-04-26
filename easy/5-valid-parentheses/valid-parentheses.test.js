const isValid = require('./valid-parentheses');

describe('Edge Cases', () => {
	test('It should throw error message if no String is given to the first parameter (s)', () => {
		expect(() =>
			isValid({ brackets: '{}()[]'}).toThrowError(
				new Error('You must provide an String for s. You provided: object')
			)
		);
	});

	test('It should throw error message if an empty string is passed to the first parameter (s)', () => {
		expect(() =>
			isValid('').toThrowError(
				new Error(
					'You must only use {}, [], or () for s. You provided an empty string'
				)
			)
		);
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return true when running isValid("()")', () => {
		expect(isValid('()')).toStrictEqual(true);
	});

	test('It should return false when running isValid("(]")', () => {
		expect(isValid('(]')).toStrictEqual(false);
	});

	test('It should return true when running isValid("{{}}()[()]")', () => {
		expect(isValid('{{}}()[()]')).toStrictEqual(true);
	});

	test('It should return false when running isValid("{][}")', () => {
		expect(isValid('{][}')).toStrictEqual(false);
	});

	test('It should return true when running isValid("[()]{}{[()()]()}")', () => {
		expect(isValid('[()]{}{[()()]()}')).toStrictEqual(true);
	});
});
