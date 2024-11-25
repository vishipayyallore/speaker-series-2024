// main.js
const { isPalindrome } = require('./palindromeChecker');

function main() {
    let testCases = ["RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR"], i = 1;

    testCases.map((s, index) => {
        console.log("Test Case #", i);
        console.log("-".repeat(100));
        console.log(`The input string is '${s}' and the length of the string is ${s.length}.`);
        console.log("\nIs it a palindrome?.....", isPalindrome(s));
        console.log("-".repeat(100));
        i++;
    });
}

main();
