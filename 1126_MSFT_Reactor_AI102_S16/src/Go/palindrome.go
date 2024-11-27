// palindrome.go
package main

import (
	"fmt"
)

func isPalindrome(s string) bool {
	if s == "" {
		return false
	}

	left := 0
	right := len(s) - 1

	for left < right {
		fmt.Printf("Current elements left index: '%c' and right index: '%c'\n", s[left], s[right])

		if s[left] != s[right] {
			fmt.Println("The elements aren't the same, hence we return false")
			return false
		}

		left++
		right--
	}

	return true
}
