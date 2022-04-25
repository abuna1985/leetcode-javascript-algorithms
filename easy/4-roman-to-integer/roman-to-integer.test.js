const romanToInt = require('./roman-to-integer');

describe('Edge Cases', () => {
	test('It should throw error message if no Arrays is given to the first parameter (nums)', () => {
		expect(() =>
			romanToInt('{roman: "IIVXC"}').toThrowError(
				new Error('You must provide an String for s. You provided: object')
			)
		);
	});

	test('It should throw error message if all the array elements for nums is not  number', () => {
		expect(() =>
			romanToInt('IIVVFive').toThrowError(
				new Error(
					'You must provide a String of roman numerals. You provided: IIVVFive'
				)
			)
		);
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return 3 when running romanToInt("III")', () => {
		expect(romanToInt('III')).toStrictEqual(3);
	});

	test('It should return 58 when running romanToInt("LVIII")', () => {
		expect(romanToInt('LVIII')).toStrictEqual(58);
	});

	test('It should return 1994 when running romanToInt("MCMXCIV")', () => {
		expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
	});

	test('It should return 26 when running romanToInt("XXVI")', () => {
		expect(romanToInt('XXVI')).toStrictEqual(26);
	});

	test('It should return 101 when running romanToInt("CI")', () => {
		expect(
			romanToInt('CI')).toStrictEqual(101);
	});
});
