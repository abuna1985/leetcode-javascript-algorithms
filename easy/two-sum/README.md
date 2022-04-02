# Two Sum

## Testing

In the root folder, run the bash command `npm run solved two-sum`. 4 tests will run and you will get a message all tests passed.

## Solution

I specifically remember doing the two and three sum at a algorithm solving meetup. But for the life of me, I could not remember the solution. I originally remember using pointers, but all I could come up with was the following:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + nums[i + 1] === target) {
			return [i, j];
		}
	}
};
```

So...that kind of worked. But it did not work on the following example:

```
Input:[3,2,3], 6
Output: undefined
Expected: [0,2]
```

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

Again, this is the brute force method. The Big O notation for this solution is 0(N)^2. It's not great because running nested loops and the more I add to the numbers array, the longer it is going to take (This is also known as a linear solution). I remember briefly talking to another attendee of the meetup that we need to ideally use a Obj map or object and refer to that rather than run 2 for loops. So I refered to the [medium article on a Two Sum solution](https://medium.com/@paulrohan/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03) again for the Obj/object solution:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// create an empty object
	let numObj = {};
	// run a for loop
	for (let i = 0; i < nums.length; i++) {
		// store the current number in the array
		let currentNum = nums[i];
		// add the number as a key and the index as the value
		numObj[currentNum] = i;
	}

	// Another ride on the loops
	for (let i = 0; i < nums.length; i++) {
		// This time we will get the difference between the current number and the target. Store it in the variable diff
		let diff = target - nums[i];
		// Check if the diff exist in the number Object key and the index value is not the same as the current index
		if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
			// If so, then tag the current index and number object value (index) and deliver it
			return [i, numObj[diff]];
		}
	}
};
```

Now I am sure you are as super confused as I was when I first saw this solution. There are still two loops. Why is this more efficient?

Well it seems since we are basically we turn our array into an object and then check the difference between the number values in the array and the target number. This means we are only checking with one loop and therefore becomes O(N). And you'll notice the more you add to the array, the longer the first solution will take, but the second solution will only add milliseconds. The big difference is we are storing more variables which takes up space in our algorithm. But it seems to be worth it since the time for second solution does not rise as you add more inputs.

Well know I now 2 solutions to the two sum algorithm. I know three sum is also a common algorithm that I will encounter on leetcode.
