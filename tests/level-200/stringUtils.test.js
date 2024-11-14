// tests/stringUtils.test.js
const { capitalizeFirstLetter, reverseString, isPalindrome } = require('../../src/level-200/StringUtils');

// TASK: Write tests for the following functions:
// 1. capitalizeFirstLetter
//    - Test with a normal string.
//    - Test with an empty string.
//    - Test with non-string input (e.g., numbers, booleans).
// 
// 2. reverseString
//    - Test with a normal string.
//    - Test with an empty string.
//    - Test with non-string input (e.g., numbers, booleans).
// 
// 3. isPalindrome
//    - Test with a palindrome string (e.g., 'madam').
//    - Test with a non-palindrome string.
//    - Test with non-string input (e.g., numbers, booleans).

// Example:
test('capitalizeFirstLetter should capitalize the first letter of a string', () => {
  expect(capitalizeFirstLetter('hello')).toBe('Hello');
});

// Add more tests here...
