# Roman to Integer

## Table of Contents
- [Roman to Integer](#roman-to-integer)
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

In the root folder, run the bash command `npm run test:rom-to-int`. 7 tests will run and you will get a message in the terminal that all tests have passed.

## Solution

### First Attempt

Time: 15 minutes

**First Attempt Solution:** [https://leetcode.com/submissions/detail/683789656/](https://leetcode.com/submissions/detail/683789656/)

Brute force approach. I decided to store the roman numbers/number key pair in an object. Then loop through the string and replace. i set a condition to check for multi roman numerals (IV, IX, etc.) and subtract the prefix roman numeral.

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // store roman numberals as the key
    // store the number as the value
    let romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // store result of loop logic here
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currentNumeral = s[i];
        let currentNumber = parseInt(romanNumerals[currentNumeral]);
        // console.log(`${s[i]}`);
        // console.log(`${romanNumerals[currentNumeral]}`);
        // if I is before V or X
        // or if X is before L or C
        // or if C id before D or M
        if(s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X") ||
           s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C") ||
           s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")) {
            result -= currentNumber;
            continue;
        }
            // we make it a negative number
        result += currentNumber;
    }
    
    return result
};
```

#### First Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
|  Accepted    | 3999/3999   | 172 ms  |   48 MB      | 

**Big O Time Complexity**: O(n)

**NOTE:** I built the conditional and used the `continue` keyword which is a similar approach to returning early in a function. It will skip the addition logic and move to the next item.

### Second Attempt

Time: 15 minutes

**Second Attempt Solution:** [https://leetcode.com/submissions/detail/683795925/](https://leetcode.com/submissions/detail/683795925/)

My condition felt a little verbose, so I attempted another solution. After 15 minutes, I researched other solutions to see if I could improve upon what I had. I found a dev.to article from Urfan Guliyev [ Leetcode - Roman to Integer (with JavaScript)](https://dev.to/urfan/leetcode-roman-to-integer-with-javascript-1g3n)

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // store roman numberals as the key
    // store the number as the value
    let symbolMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // store result of loop logic here
    let result = 0;
    for (i=0; i < s.length; i++){
        if (symbolMap[s[i]] < symbolMap[s[i+1]]){
            result -= symbolMap[s[i]] 
            continue;
        } 
        result += symbolMap[s[i]]
    }
    
    return result
};
```

#### Second Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
|   Accepted   |  3999/3999  | 140 ms  |  46.9 MB     | 


**Big O Time Complexity**: O(n)

**NOTE:** All I really need to check is if the current roman numeral is less than the next one. If it is complete subtraction. This is more declarative and it just reads better to me than the first solution.
