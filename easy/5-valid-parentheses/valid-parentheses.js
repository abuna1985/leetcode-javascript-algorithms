/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // store closing brackets in here for reference
	let brackets = [];
  if (typeof s !== 'string') {
		throw new Error(
			`You must provide an String for s. You provided: ${typeof s}`
		);
	}
  if (s.length === 0) {
    throw new Error(
			`You must only use {}, [], or () for s. You provided an empty string`
		);
  }
		for (let i = 0; i < s.length; i++) {
			switch (s[i]) {
				// if { is current character
				case '{': {
					// push closing } to brackets array
					brackets.push('}');
					break;
				}
				case '[': {
					brackets.push(']');
					break;
				}
				case '(': {
					brackets.push(')');
					break;
				}
				default: {
					if (brackets.pop() !== s[i]) return false;
				}
			}
		}
	// console.log({result: !brackets.length});
	return brackets.length === 0;
};

module.exports = isValid;
