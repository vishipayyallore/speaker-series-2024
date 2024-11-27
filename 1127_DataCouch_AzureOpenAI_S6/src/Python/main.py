# main.py

from palindrome_checker import is_palindrome

def main():
    test_cases = ["RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR"]
    i = 1

    for s in test_cases:
        print(f"Test Case #{i}")
        print("-" * 100)
        print(f"The input string is '{s}' and the length of the string is {len(s)}.")
        print("\nIs it a palindrome?.....", is_palindrome(s))
        print("-" * 100)
        i += 1

if __name__ == "__main__":
    main()
