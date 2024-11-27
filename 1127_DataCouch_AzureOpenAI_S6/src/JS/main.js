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

// // Test cases  
// const testStrings = [  
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


// // main.js  
  
// const isPalindrome = require('./palindromeChecker');  
  
// // Test cases  
// const testStrings = [  
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
// for (const testStr of testStrings) {  
//     // Normalize the string: remove spaces and convert to lowercase  
//     const cleanedStr = testStr.replace(/\s+/g, '').toLowerCase();  
//     console.log(`"${testStr}" is a palindrome: ${isPalindrome(cleanedStr)}`);  
// }  