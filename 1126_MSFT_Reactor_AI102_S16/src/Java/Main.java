
// Main.java
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<String> testCases = Arrays.asList("RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR");
        int i = 1;

        for (String s : testCases) {
            System.out.printf("Test Case #%d%n", i);
            System.out.println("-".repeat(100));
            System.out.printf("The input string is '%s' and the length of the string is %d.%n", s, s.length());
            System.out.printf("%nIs it a palindrome?..... %b%n", PalindromeChecker.isPalindrome(s));
            System.out.println("-".repeat(100));
            i++;
        }
    }
}


// // Test cases  
// String test1 = "A man, a plan, a canal, Panama";  
// String test2 = "race a car";  
// String test3 = "";  // Empty string  
// String test4 = " "; // Single space  
// String test5 = "No lemon, no melon";  
// String test6 = "Was it a car or a cat I saw?";  
// String test7 = "Able was I, I saw Elba";  
// String test8 = "Never odd or even";  
// String test9 = "12321"; // Numeric palindrome  
// String test10 = "12345"; // Not a palindrome  