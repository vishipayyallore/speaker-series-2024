
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
