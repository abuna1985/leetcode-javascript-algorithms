/**
 * Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add * up to target. You may assume that each input would have exactly one solution, and you may not use the same 
 * element twice. You can return the answer in any order.
 *
 **Example 1:**
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 **Example 2:**
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]

 **Example 3:**
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 
 **Constraints:**
 * 2 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

 var assert = require('assert').strict;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // create an empty object
  let numObj = {}
  // run a for loop
  for(let i = 0; i < nums.length; i++) {
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

console.log('Running test 1 of 4');
let testResultOne = twoSum([2,7,11,15], 9);
assert.deepStrictEqual(testResultOne, [0, 1])
console.log('Running test 2 of 4');
let testResultTwo = twoSum([3,2,4], 6);
assert.deepStrictEqual(testResultTwo, [1,2])
console.log('Running test 3 of 4');
let testResultThree = twoSum([3,3], 6);
assert.deepStrictEqual(testResultThree, [0,1]);
console.log('Running test 4 of 4');
let testResultFour = twoSum([3,3], 6);
assert.deepStrictEqual(testResultFour, [0,1]);
console.log('Congrats! All test have passed!')