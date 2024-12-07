# palindrome_checker.py

def is_palindrome(s):
    if s is None or s == "":
        return False

    left, right = 0, len(s) - 1

    while left < right:
        print(f"Current elements left index: '{
              s[left]}' and right index: '{s[right]}'")

        if s[left] != s[right]:
            print("The elements aren't the same, hence we return False")
            return False

        left += 1
        right -= 1

    return True
