// PalindromeChecker.java
public class PalindromeChecker {

    public static boolean isPalindrome(String s) {
        if (s == null) {
            return false;
        }

        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                System.out.println("The elements aren't the same, hence we return false");
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
