const fizzBuzz = require('./fizz-buzz');

describe('Edge Cases', () => {
	test('It should throw error message if no Number is given to the first parameter (n)', () => {
		expect(() =>
			fizzBuzz('fifteen').toThrowError(
				new Error('You must provide an Number for n. You provided: string')
			)
		);
	});

	test('It should throw error message if an empty string is passed to the first parameter (s)', () => {
		expect(() =>
			fizzBuzz(-123).toThrowError(
				new Error(
					'You must provide an non-negative Number for n. You provided: -123'
				)
			)
		);
	});
});

describe('Test Cases', () => {
	// Test Cases
	test('It should return ["1", "2", "Fizz"] when running fizzBuzz(3)', () => {
		expect(fizzBuzz(3)).toStrictEqual(['1', '2', 'Fizz']);
	});

	test('It should return ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8". "Fizz"] when running fizzBuzz(9)', () => {
		expect(fizzBuzz(9)).toStrictEqual([
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
		]);
	});

	test('It should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] when running fizzBuzz(15)', () => {
		expect(fizzBuzz(15)).toStrictEqual([
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
			'Buzz',
			'11',
			'Fizz',
			'13',
			'14',
			'FizzBuzz'
		]);
	});

	test('It should return ["1","2","Fizz","4","Buzz"] when running fizzBuzz(5)', () => {
		expect(fizzBuzz(5)).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
	});

	test('It should return "1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11"] when running fizzBuzz(11)', () => {
		expect(fizzBuzz(11)).toStrictEqual([
			'1',
			'2',
			'Fizz',
			'4',
			'Buzz',
			'Fizz',
			'7',
			'8',
			'Fizz',
			'Buzz',
			'11'
    ]);
	});
});

