// File: Program.cs

using Tpp.Algo;

string[] testCases = ["RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR"];
int i = 1;

foreach (string s in testCases)
{
    WriteLine($"Test Case #{i}");
    WriteLine(new string('-', 100));
    WriteLine($"The input string is '{s}' and the length of the string is {s.Length}.");
    WriteLine("\nIs it a palindrome?..... " + PalindromeChecker.IsPalindrome(s));
    WriteLine(new string('-', 100));
    i++;
}

// // Test cases  
// string[] testStrings = {  
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
// };