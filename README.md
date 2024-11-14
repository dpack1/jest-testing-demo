# Jest Testing Demo

This repository demonstrates setting up Jest for unit testing in a Node.js project. It includes a simple function with basic tests to illustrate the fundamentals of unit testing with Jest.

---

## Table of Contents
- [Introduction](#introduction)
- [Why Jest?](#why-jest)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [License](#license)

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

## Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd jest-testing-demo
