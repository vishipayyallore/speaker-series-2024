// main.ts

import { isPalindromeTS } from './palindromeChecker';

function mainTs() {
    const testCases: string[] = ["RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR"];
    let i = 1;

    testCases.forEach((s) => {
        console.log(`Test Case #${i}`);
        console.log("-".repeat(100));
        console.log(`The input string is '${s}' and the length of the string is ${s.length}.`);
        console.log("\nIs it a palindrome?.....", isPalindromeTS(s));
        console.log("-".repeat(100));
        i++;
    });
}

mainTs();
