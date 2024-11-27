package main

import (
	"fmt"
	"strings"
)

func main() {
	testCases := []string{"RACEACAR", "A", "ABCDEFGFEDCBA", "ABC", "ABCBA", "ABBA", "RACEACAR"}
	i := 1

	for _, s := range testCases {
		fmt.Printf("Test Case #%d\n", i)
		fmt.Println("-" + strings.Repeat("-", 99))
		fmt.Printf("The input string is '%s' and the length of the string is %d.\n", s, len(s))
		fmt.Printf("\nIs it a palindrome?..... %v\n", isPalindrome(s))
		fmt.Println("-" + strings.Repeat("-", 99))
		i++
	}
}
