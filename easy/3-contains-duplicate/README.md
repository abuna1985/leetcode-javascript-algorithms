# Contains Duplicate

## Table of Contents
- [Contains Duplicate](#contains-duplicate)
  - [Table of Contents](#table-of-contents)
  - [Problem](#problem)
  - [Testing](#testing)
  - [Solution](#solution)
    - [First Attempt](#first-attempt)
      - [First Attempt Results](#first-attempt-results)
    - [Second Attempt](#second-attempt)
      - [Second Attempt Results](#second-attempt-results)


## Problem

[https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Testing

In the root folder, run the bash command `npm run test:con-dup`. 7 tests will run and you will get a message in the terminal that all tests have passed.

## Solution

### First Attempt

Time: 15 minutes

**First Attempt Solution:**[https://leetcode.com/submissions/detail/671853359/](https://leetcode.com/submissions/detail/671853359/)

**NOTE:** For my brute force approach, I looped through the array of numbers and threw them into a `Set`. I remembered that a `Set` can only contain unique values (no duplicates). You can see my solution below.

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // store previous numbers in numSet
    let numSet = new Set();
    // run a loop
    for (let i = 0; i < nums.length; i++) {
        // if current number exists in numObj
        if (numSet.has(nums[i])) {
            return true;
        }
        // end if
        // add current number to numSet
        numSet.add(nums[i])
    }
    // end a loop
    // if no duplicate is found, return false
    return false
};
```

#### First Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Accepted     |    70/70    |  153 ms |    49.9 MB   | 

**Big O Time Complexity**: 0(n)


### Second Attempt

Time: N/A

**Second Attempt Solution:**[https://leetcode.com/submissions/detail/562069664/](https://leetcode.com/submissions/detail/562069664/)

I wanted to see if there was another way to check for duplicates. I found this article on [Techie Delight - Check if an array contains duplicates in JavaScript](https://www.techiedelight.com/check-array-contains-duplicates-javascript/). I wanted to implement the new set solution.

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create a new set from the nums array
    // check if the new set (unique values) size matches the nums array length
    return new Set(nums).size !== nums.length;
};
```

#### Second Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Accepted     |    70/70    |   99ms  |    50.7 MB   | 


**Big O Time Complexity**: 0(n)

**NOTE:** Seems like both solutions have equal runtime, the second solution is just a bit more compact. It still seems to be iterating through the array to make the `Set`. But the performance seems to be more efficient with this approach.
