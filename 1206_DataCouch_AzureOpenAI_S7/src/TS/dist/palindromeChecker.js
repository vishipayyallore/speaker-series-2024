"use strict";
// palindromeChecker.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindromeTS = isPalindromeTS;
function isPalindromeTS(s) {
    if (s === null || s === "") {
        return false;
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        console.log(`Current elements left index: '${s[left]}' and right index: '${s[right]}'`);
        if (s[left] !== s[right]) {
            console.log("The elements aren't the same, hence we return false");
            return false;
        }
        left++;
        right--;
    }
    return true;
}
