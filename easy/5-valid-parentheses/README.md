# Valid Parentheses

## Table of Contents
- [Valid Parentheses](#valid-parentheses)
  - [Table of Contents](#table-of-contents)
  - [Problem](#problem)
  - [Testing](#testing)
  - [Solution](#solution)
    - [First Attempt](#first-attempt)
      - [First Attempt Results](#first-attempt-results)
    - [Second Attempt](#second-attempt)
      - [Second Attempt Results](#second-attempt-results)


## Problem

[https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## Testing

In the root folder, run the bash command `npm run test:val-par`. 7 tests will run and you will get a message in the terminal that all tests have passed.

## Solution

### First Attempt

Time: 20 minutes

**First Attempt Solution:** [https://leetcode.com/submissions/detail/684438966/](https://leetcode.com/submissions/detail/684438966/)

Started with brute force approach. I looped through the string and check the next character if it closes the corresponding  parenthesis ((), {}, []).

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {    
    for (let i = 0; i < s.length; i++) {
        if( s[i] === '(' && s[i+1] !== ')') return false;
        if( s[i] === '{' && s[i+1] !== '}') return false;
        if( s[i] === '[' && s[i+1] !== ']') return false;
    }
    return true;
};
```

#### First Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
| Wrong Answer |   64/91     |   N/A   |     N/A      | 

**Big O Time Complexity**: N/A

**NOTE:** So it obviously worked for a lot of the cases. But it will not track parenthesis who close later in the string

### Second Attempt

Time: N/A

**Second Attempt Solution:** [https://leetcode.com/submissions/detail/684516648/](https://leetcode.com/submissions/detail/684516648/)

After 15 minutes, I did not have a solution for all 94 test cases. I found this dev.to article by Urfan Guliyev called [Leetcode - Valid Parentheses (with JavaScript)](https://dev.to/urfan/leetcode-valid-parentheses-with-javascript-eh9xx). I decided to use this approach.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
    let brackets = []
    for (let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case '{': {
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
```

#### Second Attempt Results

|  Status      | Test Cases  | Runtime | Memory Usage |   
|:------------:|:-----------:|:-------:|:------------:|
|  Accepted    |   91/91     | 107 ms  |    41.8 MB   | 


**Big O Time Complexity**: O(n)

**NOTE:** I decided to write out my understanding of the solution

Create a `brackets` variable and set it to an empty array
Within the loop:
- if the current character is a opening parentheses
  -  I push the closing parenthesis to the `brackets` variable. 
-  If I current character is  closing parenthesis
   -  I then pop last element in the `brackets` array and check against the current character
After the loop:
- I check to see if there is anything left in the `brackets` array
