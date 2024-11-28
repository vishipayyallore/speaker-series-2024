# main.py

from palindrome_checker import is_palindrome


def main():
    test_cases = ["RACEACAR", "A", "ABCDEFGFEDCBA",
                  "ABC", "ABCBA", "ABBA", "RACEACAR"]
    i = 1

    for s in test_cases:
        print(f"Test Case #{i}")
        print("-" * 100)
        print(f"The input string is '{
              s}' and the length of the string is {len(s)}.")
        print("\nIs it a palindrome?.....", is_palindrome(s))
        print("-" * 100)
        i += 1


if __name__ == "__main__":
    main()


# # main.py

# from palindrome_checker import is_palindrome

# # Test cases
# test_strings = [
#     "racecar",          # Palindrome
#     "hello",            # Not a palindrome
#     "level",            # Palindrome
#     "",                 # Palindrome (empty string)
#     "a",                # Palindrome (single character)
#     "A man a plan a canal Panama", # Not a palindrome due to spaces and case
#     "No lemon, no melon", # Not a palindrome due to spaces and punctuation
#     "Madam",            # Not a palindrome due to case sensitivity
#     "12321",            # Palindrome (numeric characters)
#     "12345"             # Not a palindrome (numeric characters)
# ]

# # Checking and printing results
# for test_str in test_strings:
#     # Normalize the string: remove spaces and convert to lowercase
#     cleaned_str = ''.join(test_str.split()).lower()
#     print(f'"{test_str}" is a palindrome: {is_palindrome(cleaned_str)}')
