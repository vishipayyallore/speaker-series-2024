# Palindrome Checking Algorithm using Two Pointers

## Prerequisites

Install `TypeScript` and `ts-node` globally to run the TypeScript code:

```sh
npm install -g typescript ts-node
```

## How to Execute

Here’s how to run the palindrome checking algorithm in different languages:

### .NET (C#)

```sh
dotnet run
```

### Go

```sh
go run .
```

### Java

```sh
javac Main.java && java Main
```

### Node.js

```sh
node .\main.js
```

### Python

```sh
py .\main.py
```

### TypeScript

```sh
ts-node .\main.ts
```

## Explanation of the Algorithm

### 1. Initialization

We start by initializing two pointers:

- `left` points to the first character of the input string `s`.
- `right` points to the last character of the input string `s`.

This setup prepares us to compare characters from both ends of the string towards the middle.

### 2. Comparison Loop

We enter a `while` loop that continues as long as `left` is less than `right`. This loop allows us to compare characters in pairs, moving towards the center of the string.

### 3. Character Comparison

At each iteration:

- We compare the characters at the `left` and `right` indices.
- If the characters are not equal, it means the string is not a palindrome.
- We log a message indicating the elements are different and return `false`.

### 4. Pointer Movement

After comparing the characters:

- We increment the `left` pointer by one, moving it towards the end of the string.
- We decrement the `right` pointer by one, moving it towards the beginning of the string.

### 5. Loop Continuation

Steps 3 and 4 are repeated until the `left` pointer is no longer less than the `right` pointer.

- If a mismatch is found, the loop terminates early.
- If no mismatches are found, the loop completes all iterations.

### 6. Palindrome Check Result

If we reach the middle of the string without finding any mismatches:

- We log that the string is a palindrome.
- We return `true`.

### 7. Test Cases

The `main()` function demonstrates the algorithm by applying it to several test cases. For each test case:

- It logs the input string and its length.
- It checks if the string is a palindrome using the `isPalindrome` function.
- It logs whether the string is a palindrome.
