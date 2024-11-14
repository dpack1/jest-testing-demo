// tests/math.test.js
//imports the add function to test.
const { add } = require('../../src/level-100/math');

// defines a test case.
test('adds 1 + 2 to equal 3', () => {
    //asserts that the add function, when given 1 and 2, returns 3.
  expect(add(1, 2)).toBe(3);
});

