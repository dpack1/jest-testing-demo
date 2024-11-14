# Jest Unit Testing Workshop <img src="https://media3.giphy.com/media/7TwwMMfVIHTnvsnK0S/200w.gif?cid=6c09b952i5jrx8e0mb87mui7gdf2gnqmxxisxpvyw2e4n291&ep=v1_gifs_search&rid=200w.gif&ct=g" width="60" height="50" style="border-radius: 50%;" />



This repository demonstrates setting up Jest for unit testing in a Node.js project. It includes a simple function with basic tests to illustrate the fundamentals of unit testing with Jest.

---

## Table of Contents
- [Introduction](#introduction)
- [Why Jest?](#why-jest)
- [What You’ll Learn](#what-youll-learn)
- [Setup](#setup)
- [Level 100: Introduction to Jest](#level-100-introduction-to-jest)
- [Level 200: Harnessing and Isolated Testing](#level-200-harnessing-and-isolated-testing)
- [Level 300: Mocking in Jest](#level-300-mocking-in-jest)
- [Additional Resources](#additional-resources)
---

## Introduction
Jest is a popular testing framework for JavaScript projects. This repository showcases how to:
- Set up a project with Jest as a test runner.
- Write and organize basic unit tests.
- Push changes to GitHub for version control.

## Why Jest?
While Node.js has a built-in test runner as of Node 18, Jest is chosen for this project due to its rich feature set and ease of use. Here are some reasons for preferring Jest over the Node test runner:

1. **Ease of Setup**: Jest requires minimal configuration and can work out-of-the-box in most JavaScript and TypeScript projects.

2. **Built-in Features**:
   - **Assertions**: Jest includes a comprehensive set of matchers and assertion methods without needing additional libraries.
   - **Mocking**: Jest provides powerful mocking capabilities, enabling developers to isolate units of code effectively without extra libraries.
   - **Snapshot Testing**: Jest offers snapshot testing out of the box, which is useful for testing UI components and larger data structures.

3. **Community and Documentation**: Jest has a large, active community, meaning it’s well-documented, and solutions to common issues are readily available.

4. **Performance**: Jest runs tests in parallel, which improves performance for larger codebases.

5. **User-Friendly Output**: Jest’s output is easy to understand and offers useful features like displaying diffs when tests fail, making debugging easier.

Jest provides a robust testing environment suited for both simple and complex projects, which makes it an ideal choice for this demo and many real-world applications.

## What You'll Learn
- **Level 100: Jest Setup and Basics** – Learn how to install Jest, write your first test, and run it in a project.
- **Level 200: Harnessing** – Understand how to isolate code and test it in controlled environments, including mock functions for external dependencies.
- **Level 300: Mocking**– Dive deep into Jest’s mocking capabilities, learning how to mock functions and simulate various scenarios to ensure the correctness of your code.



## Setup
**Clone the Repository**:
 To get started, clone the repository to your local machine:
   ```bash
   git clone https://github.com/dpack1/jest-testing-demo.git
   cd jest-testing-demo
   ```

**Install Dependencies**: 
Make sure you have Node.js installed on your computer. Then, install the required dependencies:


``` bash
npm install
```

**Run Tests:**:
Make sure you have Node.js installed on your computer. Then, install the required dependencies:
``` bash
npm test
```
This will run all the test files and show you the results in the terminal.

## Level 100: Introduction to Jest
### What You’ll Do:
In **Level 100**, you’ll learn the basics of Jest and how to set it up in a project. We’ll start by installing Jest, writing a simple test, and running it to see how Jest works.

### Hands-On:
- Installing Jest in a GitHub project
- Writing a simple test to test basic functionality (e.g., math.js)
- Running your tests to see Jest in action

## Level 200: Harnessing and Isolated Testing
### What You’ll Do:
In **Level 200**, we will dive deeper into writing unit tests for isolated functionality. We will focus on creating harnesses: small tests that mock external dependencies to ensure that individual units of code function correctly.

### Hands-On:
- Write a harness that isolates the function and mocks the external dependency.
- Use assertions to validate the functionality of your code.

By the end of this level, you'll understand how to isolate functionality and create controlled test environments to ensure your code works as expected.


## Level 300: Mocking in Jest
### What You’ll Do:
In **Level 300**, you’ll explore mocking in Jest. Mocking is a technique used to replace parts of your code with simplified versions for testing. It allows you to simulate various scenarios, including edge cases and errors, without requiring complex setups.

### Hands-On:
- Mock a database or an API call to test a function.
- Create your own mock using jest.fn() to simulate different responses.
- Write assertions to ensure the mocked function behaves as expected.

This level will help you understand how to control external dependencies using mocks, making your tests more focused and efficient.


## Additional Resources
[Jest Documentation](https://archive.jestjs.io/docs/en/22.x/getting-started.html) – The official Jest docs for further reading.
[Jest Cheat Sheet](https://devhints.io/jest) – A quick reference for Jest commands and functions.