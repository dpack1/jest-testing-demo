// tests/user.test.js
const { getUser } = require('../../src/level-300/user');

test('getUser should return user data from the mocked db', () => {
  const mockDb = { getUserById: jest.fn().mockReturnValue({ id: 1, name: 'John Doe' }) };

  const result = getUser(1, mockDb);

  expect(result).toEqual({ id: 1, name: 'John Doe' });
  expect(mockDb.getUserById).toHaveBeenCalledWith(1);
});

// Explanation of the Test:
//We use jest.fn().mockReturnValue() to create a mock function for getUserById that returns a fake user object when called.
//We call getUser with a user ID and the mocked database.
//We then assert that the result returned from getUser matches the mocked user data, and that the getUserById function was called with the correct user ID.