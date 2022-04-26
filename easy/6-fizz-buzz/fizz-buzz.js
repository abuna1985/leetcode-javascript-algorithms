/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	// store characters from loop in results array
	let results = [];
  if (isNaN(parseInt(n)) === true) {
    throw new Error(`You must provide an Number for n. You provided: ${typeof n}`);
  }
  if (parseInt(n) <= 0) {
    throw new Error(
			`You must provide an non-negative Number for n. You provided: ${typeof n}`
		);
  }
	// start loop at 1
	// make sure you go up to n
	for (let i = 1; i <= parseInt(n); i++) {
		// we will store fizz and/or buzz in here
		let newStr = '';
		// if i is divisible by 3
		if (i % 3 === 0) {
			newStr += 'Fizz';
		}
		// if i is divisible 5
		if (i % 5 === 0) {
			newStr += 'Buzz';
		}
		// if any exist in the newStr variable, push that to results
		// else return the number in string form
		results.push(newStr.length ? newStr : `${i}`);
	}

	return results;
};

module.exports = fizzBuzz;