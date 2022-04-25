# Pailindrome Number

## Table of Contents
- [Pailindrome Number](#pailindrome-number)
  - [Table of Contents](#table-of-contents)
  - [Problem](#problem)
  - [Testing](#testing)
  - [Solution](#solution)
    - [First Attempt](#first-attempt)
      - [First Attempt Results](#first-attempt-results)
    - [Second Attempt](#second-attempt)
      - [Second Attempt Results](#second-attempt-results)


## Problem

[https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

Given a roman numeral, convert it to an integer.

## Testing

In the root folder, run the bash command `npm run test:pal-num`. 7 tests will run and you will get a message in the terminal that all tests have passed.

## Solution

### First Attempt

Time: 10 minutes

[First Attempt Solution https://leetcode.com/submissions/detail/673897371/](https://leetcode.com/submissions/detail/673897371/)

I decided to use the brute force method. I did not know how to reverse number palindromes, but I did know how to reverse string palindromes. So I could convert the number into a string and reverse it like so:

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNum = parseInt(x.toString().split('').reverse().join(''));
    // console.log({ x, reversedNum })
    return x === reversedNum;
};
```

#### First Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Accepted     | 11510/11510 |  148 ms |    51.8 MB   | 

**Big O Time Complexity**: 0(n)

**Note:** So that obviously worked, but it didn't feel like the most efficient solution. There had to be some way to mathematically reverse the numbers.

### Second Attempt

Time: 20 minutes

[Second Attempt Solution: https://leetcode.com/submissions/detail/680538504/](https://leetcode.com/submissions/detail/680538504/)

I attempted for 20 minutes with no luck. I found [Elisabéth - dev.to article on Palindrome Number mathematical solution](https://dev.to/elisabethdiang/leetcode-palindrome-number-w-fun-javascript-mathematical-approach-1obi). 

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // we filter out negative numbers
  if (x < 0) return false
    // reversed is where we store the reversed number
    let reversed = 0;
    // we mad a copy so x remains unchanged
    let y = x;

    while (y > 0) {
        // y % 10 is the last digit of x
        reversed = (reversed * 10) + y % 10
        y = (y / 10) | 0
    }
    
    // return a boolean (true/false)
    return x === reversed
};
```
#### Second Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Accepted     | 11510/11510 |  141 ms |    50.2 MB   | 

**Big O Time Complexity**: 0(n)
 
**Note:** This seems to be a little more efficient and we can skip the string conversion steps. We are still looping through the number and mathematically reversing it.