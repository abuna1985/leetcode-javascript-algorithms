# Fizz Buzz

## Table of Contents
- [Fizz Buzz](#fizz-buzz)
  - [Table of Contents](#table-of-contents)
  - [Problem](#problem)
  - [Testing](#testing)
  - [Solution](#solution)
    - [First Attempt](#first-attempt)
      - [First Attempt Results](#first-attempt-results)
    - [Second Attempt](#second-attempt)
      - [Second Attempt Results](#second-attempt-results)
    - [Third Attempt](#third-attempt)
      - [Third Attempt Results](#third-attempt-results)


## Problem

[https://leetcode.com/problems/fizz-buzz/](https://leetcode.com/problems/fizz-buzz/)

Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

## Testing

In the root folder, run the bash command `npm run test:fiz-buz`. 7 tests will run and you will get a message in the terminal that all tests have passed.

## Solution

### First Attempt

Time: 10 minutes

**First Attempt Solution:** [link to leetcode solution]()

Brute force approach: 
create a `results` variable and set it to an empty array
Set a loop start at 1 to to the first parameter (n). Within the loop:

- if n is divisible by 3 and 5
  - push 'FizzBuzz' to the `results` array 
- if n is divisible by 3 
  - push 'Fizz' to the `results` array 
- if n is divisible by 5
  - push 'Buzz' to the `results` array 
- else 
  - push i (current number) to the `results` array

after the loop, return the `results` array

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // store characters from loop in results array
    let results = []
    // start loop at 1
    // make sure you go up to n
    for (let i = 1; i <= n; i++) {
        // if i is divisible by 3 and 5
        if (i % 5 === 0 && i & 3 === 0) {
            results.push('FizzBuzz');
            continue;
        }
        // if i is divisible by 3
        if (i % 3 === 0) {
            results.push('Fizz');
            continue;
        }
        // if i is divisible 5
        if (i % 5 === 0) {
            results.push('Buzz');
            continue;
        }
        // else return the current number in string form
        results.push(`${i}`);
    }
    // return the array of characters
    return results;
};
```

#### First Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Wrong Answer |    4/8      |   N/A   |     N/A      | 

**Big O Time Complexity**: N/A

**NOTE:** I was confused because I thought I provided a solid solution.

```
Input: 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","Fizz"]
Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

After looking through my code, I found the logic error

```
i % 5 === 0 && i & 3 === 0
```

more specifically `i & 3 === 0` is not what I intended

### Second Attempt

Time: 5 minutes

**Second Attempt Solution:** [https://leetcode.com/submissions/detail/687945446/](https://leetcode.com/submissions/detail/687945446/)

After correcting my logic error, my solution worked as expected

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // store characters from loop in results array
    let results = []
    // start loop at 1
    // make sure you go up to n
    for (let i = 1; i <= n; i++) {
        // if i is divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            results.push('FizzBuzz');
            continue;
        }
        // if i is divisible by 3
        if (i % 3 === 0) {
            results.push('Fizz');
            continue;
        }
        // if i is divisible 5
        if (i % 5 === 0) {
            results.push('Buzz');
            continue;
        }
        // else return the current number in string form
        results.push(`${i}`);
    }
    // return the array of characters
    return results
```

#### Second Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
|  Accepted    |     8/8     |  93 ms  |   44.8 MB    | 


**Big O Time Complexity**: O(n)

**NOTE:** We are looping through and building the array of numbers with fizz buzz combinations. This is an algorithm I have attempted before, but I felt there was a more efficient way to perform this loop.

### Third Attempt

Time: 15 minutes

**Third Attempt Solution:** [https://leetcode.com/submissions/detail/687953852/](https://leetcode.com/submissions/detail/687953852/)

I decided to research this since I really did not know where to start. I found a Medium article by Duncan McArdle called [LeetCode problem #412: FizzBuzz (JavaScript)](https://duncan-mcardle.medium.com/leetcode-problem-412-fizzbuzz-javascript-3944df2d6475). I decided to use `Solution #2: Concatenation`.

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // store characters from loop in results array
    let results = []
    // start loop at 1
    // make sure you go up to n
    for (let i = 1; i <= n; i++) {
        // we will store fizz and/or buzz in here
        let newStr = '';
        // if i is divisible by 3
        if (i % 3 === 0) {
            newStr += 'Fizz';
        }
        // if i is divisible 5
        if (i % 5 === 0) {
            newStr += 'Buzz'
        }
        // if any exist in the newStr variable, push that to results
        // else return the number in string form
        results.push(newStr.length ? newStr : `${i}`);
    }
    
    return results;
};
```

#### Third Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
|  Accepted    |     8/8     |  74 ms  |   43.9 M     | 


**Big O Time Complexity**: O(n)

**NOTE:** So now rather than having 3 conditionals, we now have a temporary variable called `newStr` where we will store `Fizz`, `Buzz`, `FizzBuzz`. If there is word in `newStr`, we use it. Else we default to the current number (`i`) in the loop.

This is a bit more efficient and looks cleaner to me. Shout out to Duncan McArdle for the insight.
