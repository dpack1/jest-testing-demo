# Jest Assertions

Jest provides various assertion methods, allowing you to verify that values meet expected conditions in your tests. This document covers the most commonly used assertions for easy reference.

## Summary of Assertion Types

| Assertion                  | Description                                           |
|----------------------------|-------------------------------------------------------|
| `.toBe(value)`             | Checks strict equality (using `===`)                  |
| `.not.toBe(value)`         | Checks strict inequality                              |
| `.toEqual(value)`          | Checks deep equality for objects/arrays               |
| `.not.toEqual(value)`      | Checks deep inequality                                |
| `.toBeNull()`              | Checks if value is `null`                             |
| `.toBeUndefined()`         | Checks if value is `undefined`                        |
| `.toBeDefined()`           | Checks if value is defined                            |
| `.toBeTruthy()`            | Checks if value is truthy                             |
| `.toBeFalsy()`             | Checks if value is falsy                              |
| `.toBeGreaterThan(number)` | Checks if value is greater than given number          |
| `.toBeGreaterThanOrEqual(number)` | Checks if value is greater than or equal to given number |
| `.toBeLessThan(number)`    | Checks if value is less than given number             |
| `.toBeLessThanOrEqual(number)` | Checks if value is less than or equal to given number |
| `.toBeCloseTo(number)`     | Checks if value is close to another number (useful for floats) |
| `.toMatch(regexp or string)` | Checks if string matches a regex or string pattern |
| `.toContain(item)`         | Checks if array/iterable contains an item             |
| `.toContainEqual(object)`  | Checks if array contains an object with specific structure |
| `.toHaveProperty(keyPath, value?)` | Checks if object has specific property, optionally with value |
| `.toThrow(error?)`         | Checks if function throws an error                    |

---

