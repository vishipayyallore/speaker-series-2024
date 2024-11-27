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


// // main.ts  
  
// import { isPalindrome } from './palindromeChecker';  
  
// // Test cases  
// const testStrings: string[] = [  
//     "racecar",          // Palindrome  
//     "hello",            // Not a palindrome  
//     "level",            // Palindrome  
//     "",                 // Palindrome (empty string)  
//     "a",                // Palindrome (single character)  
//     "A man a plan a canal Panama", // Not a palindrome due to spaces and case  
//     "No lemon, no melon", // Not a palindrome due to spaces and punctuation  
//     "Madam",            // Not a palindrome due to case sensitivity  
//     "12321",            // Palindrome (numeric characters)  
//     "12345"             // Not a palindrome (numeric characters)  
// ];  
  
// // Checking and printing results  
// testStrings.forEach(testStr => {  
//     // Normalize the string: remove spaces and convert to lowercase  
//     const cleanedStr = testStr.replace(/\s+/g, '').toLowerCase();  
//     console.log(`"${testStr}" is a palindrome: ${isPalindrome(cleanedStr)}`);  
// });  