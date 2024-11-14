# Test Harnesses in Jest

## Introduction to Test Harnesses

A **test harness** is a structure or framework that prepares and controls the environment in which tests are executed. It provides the setup (pre-test) and teardown (post-test) logic needed to ensure that each test runs in a controlled and isolated environment. The test harness typically includes initialization of variables, mock objects, database connections, configuration settings, and cleanup after tests.

Jest provides a set of lifecycle methods that are essential for building an effective test harness. These methods ensure that tests are consistent and independent of each other, which is crucial for creating reliable unit tests.

## Why Use Test Harnesses?

Test harnesses help in the following ways:
- **Isolation**: Each test runs in isolation, with its own test-specific setup and teardown.
- **Reusable Setup**: Common setup and teardown logic can be shared across multiple tests.
- **Consistency**: Ensures that tests are run in a predictable environment, reducing flaky tests caused by uninitialized or incorrect states.
- **Resource Management**: Helps manage resources like database connections, network requests, or temporary files, ensuring they are cleaned up after each test.

## Jest Lifecycle Methods for Test Harnesses

Jest provides several global hooks for setup and teardown that can be used to build a robust test harness.

### `beforeAll()` and `afterAll()`

These functions run **once** before and after all tests in the test file.

- **`beforeAll()`**: Initializes the environment before any tests run.
- **`afterAll()`**: Cleans up after all tests have finished.

#### Example:
```javascript
let db;

beforeAll(() => {
  // Initialize database connection before all tests
  db = new MockDatabase();
});

afterAll(() => {
  // Clean up database connection after all tests
  db.close();
});

test('database is initialized correctly', () => {
  expect(db.isConnected()).toBe(true);
});

### beforeEach() and afterEach()

These functions run before and after each individual test, providing more granular control compared to `beforeAll` and `afterAll`.

- **beforeEach()**: Executes before each test runs.
- **afterEach()**: Executes after each test completes.

#### Example:

```javascript
let db;

beforeEach(() => {
  // Reset the database state before each test
  db = new MockDatabase();
  db.clear();  // Clear all data before each test
});

afterEach(() => {
  // Clean up database state after each test
  db.clear();  // Ensure no data is left over from the test
});

test('test 1 - database is clean', () => {
  expect(db.getAllItems()).toHaveLength(0);
});

test('test 2 - add an item to database', () => {
  db.add({ id: 1, name: 'item1' });
  expect(db.get(1).name).toBe('item1');
});
```
### Summary of Lifecycle Methods

| **Hook**        | **Runs**                  | **When to Use**                                                |
|-----------------|---------------------------|---------------------------------------------------------------|
| `beforeAll()`   | Once before all tests     | Initialize global test resources, database, etc.              |
| `afterAll()`    | Once after all tests      | Cleanup resources like DB connections or network calls        |
| `beforeEach()`  | Before each test          | Reset state, mock functions, etc.                              |
| `afterEach()`   | After each test           | Cleanup after each test, ensuring isolation                    |

---

### How to Build a Test Harness

A typical test harness setup involves:

1. **Initializing necessary resources**: e.g., mocking functions, setting up databases, configuring API endpoints.
2. **Teardown**: Cleaning up any side effects, closing connections, and removing temporary files.
3. **State Reset**: Ensuring each test starts with a clean state.

#### Example Test Harness

```javascript
let mockDb;

beforeAll(() => {
  // Setup logic for the test harness: Create mock DB or connection
  mockDb = new MockDatabase();
});

beforeEach(() => {
  // Reset state before each test
  mockDb.clear();  // Clear any pre-existing data
});

afterEach(() => {
  // Additional cleanup after each test, if needed
  mockDb.clear();
});

afterAll(() => {
  // Teardown logic after all tests are finished
  mockDb.close();
});

test('should add a new item to the mock database', () => {
  mockDb.add({ id: 1, name: 'item1' });
  expect(mockDb.get(1).name).toBe('item1');
});

test('should delete an item from the mock database', () => {
  mockDb.add({ id: 1, name: 'item1' });
  mockDb.remove(1);
  expect(mockDb.get(1)).toBeUndefined();
});
```

### Test Harness Best Practices

- **Ensure Test Independence**: Each test should not rely on the outcome of previous tests. Ensure that state is reset using `beforeEach()` or `beforeAll()` to avoid shared state between tests.
- **Isolate External Dependencies**: Mock network requests, file systems, and databases. Avoid integrating with real services unless absolutely necessary.
- **Keep Setup and Teardown Clean**: Avoid heavy logic in `beforeAll` and `afterAll` hooks. Use them only for setting up large resources that are shared across tests.
- **Avoid Repetitive Code**: If many tests need the same setup or teardown, create helper functions to reuse the logic.

---

### Example of Isolated Tests with Mock Services

Here’s an example of testing a service that relies on an external API using Jest mocks:

```javascript
const api = require('../src/api');
jest.mock('../src/api');  // Mock the entire API module

let dataService;

beforeAll(() => {
  // Create a data service that uses the mocked API
  dataService = new DataService(api);
});

beforeEach(() => {
  // Reset mock implementation before each test
  api.fetchData.mockReset();
});

test('should fetch data successfully', async () => {
  api.fetchData.mockResolvedValue({ id: 1, name: 'item1' });  // Mock resolved value
  const data = await dataService.getData();
  expect(data.name).toBe('item1');
});

test('should throw error if fetch fails', async () => {
  api.fetchData.mockRejectedValue(new Error('Failed to fetch data'));  // Mock rejection
  await expect(dataService.getData()).rejects.toThrow('Failed to fetch data');
});
```
### Conclusion

A test harness in Jest allows you to organize and manage test environments efficiently, making your tests more reliable and maintainable. By leveraging Jest’s lifecycle methods and mock functions, you can ensure that each test runs in isolation and does not interfere with others, leading to more predictable and accurate results.