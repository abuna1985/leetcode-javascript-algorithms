# Two Sum

## Table of Contents
- [Two Sum](#two-sum)
	- [Table of Contents](#table-of-contents)
	- [Testing](#testing)
	- [Solution](#solution)
		- [First Attempt](#first-attempt)
			- [First Attempt Results](#first-attempt-results)
		- [Second Attempt](#second-attempt)
			- [Second Attempt Results](#second-attempt-results)
		- [Third Attempt](#third-attempt)
			- [Third Attempt Results](#third-attempt-results)

## Testing

In the root folder, run the bash command `npm run test:two-sum`. 7 tests will run and you will get a message in your terminal that all tests have passed.

## Solution

### First Attempt

[First Attempt Solution https://leetcode.com/submissions/detail/405910464/](https://leetcode.com/submissions/detail/405910464/)

I specifically remember doing the two and three sum at a algorithm solving meetup. But for the life of me, I could not remember the solution. I originally remember using pointers, but all I could come up with was the following:

```javascript
/**
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] === target) {
			return [i, i + 1];
		}
	}
};
```

#### First Attempt Results

|  Status      | Test Cases | Runtime | Memory Usage |   
|:------------:|:----------:|:-------:|:------------:|
| Wrong Answer |    11/29   |  			  |    				   | 

So...that kind of worked. But it did not work on the following example:

```
Input:[3,2,3], 6
Output: undefined
Expected: [0,2]
```

### Second Attempt

[Second Attempt Solution: https://leetcode.com/submissions/detail/405977692/](https://leetcode.com/submissions/detail/405977692/)

Well this made me feel stupid. Seems that I need the twoSum function to actually check all combinations of the elements with the array given. So after failing 3 more times, I decided to just find the answer because I needed to know. I found a great [medium article on a Two Sum solution](https://medium.com/@paulrohan/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03). Again, my goal at this point is to at least explain the solution in plain english, so I added comments.

```javascript
var twoSum = function (nums, target) {
	// Start with a for loop from the 0 index
	for (let i = 0; i < nums.length; i++) {
		// Run a second for loop starts 1 above the i index
		for (let j = i + 1; j < nums.length; j++) {
			// Add the numbers and see if it matches the target number
			if (nums[i] + nums[j] === target) {
				// If we get a match, tag it and deliver the 2 indexes
				return [i, j];
			}
		}
	}
};
```
#### Second Attempt Results

|  Status  | Test Cases | Runtime | Memory Usage |   
|:--------:|:----------:|:-------:|:------------:|
| Accepted |    29/29   |  136 ms |    39.1 MB   |  

Again, this is the brute force method. The Big O notation for this solution is 0(N)<sup>2</sup> (quadratic time complexity). Another way to say `quadratic` is the `rate of growth raising to the power of 2 (square)`. It's not great because running nested loops and the more I add to the numbers array, the more likely the potential that it is going to take.

### Third Attempt

[Third Attempt Solution: https://leetcode.com/submissions/detail/673891372/](https://leetcode.com/submissions/detail/673891372/)

I remember briefly talking to another attendee of the meetup that we need to ideally use a Obj map or object and refer to that rather than run 2 for loops. I had to refer to a [medium article on a Two Sum solution](https://medium.com/@paulrohan/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03) again for the Obj/object solution:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	/ create an empty Set
  let numObj = {}
  // Another ride on the loops
  for (let i = 0; i < nums.length; i++) {
		// store the current number as variable
		let currentNum = nums[i];
		// This time we will get the difference between the current number and the target. Store it in the variable diff
		let diff = target - nums[i];
		// Check if the diff exist in the number Object key and the index value is not the same as the current index
		if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
			// If true, return  number object value current index 
			return [numObj[diff], i];
		}
		// add the current number as a key and the index as the value
		numObj[currentNum] = i;
	}
};
```

#### Third Attempt Results

|  Status  | Test Cases | Runtime | Memory Usage |   
|:--------:|:----------:|:-------:|:------------:|
| Accepted |    29/29   |   80 ms |    42.8 MB   |  

This was almost twice as fast as the nested loop. We did add some memory usage by adding an object where we store the number values, but that isn't necessarily a bad thing. It just seems like a balance of adding memory to make the runtime more efficient.