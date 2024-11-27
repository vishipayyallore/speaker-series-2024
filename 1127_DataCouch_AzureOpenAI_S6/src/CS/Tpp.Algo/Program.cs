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