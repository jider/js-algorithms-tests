/*
Write a recursive function called "isPalindrome" which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false
*/

export function isPalindrome (str) {
  if (str.length === 1) return true
  if (str === '' || str[0] !== str.slice(-1)) return false
  return isPalindrome(str.slice(1, -1))
}

// Another solution
// export function isPalindrome (str) {
// if (str.length === 0) return false
// if (str.length === 1) return true
// if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1))
// return false
// }
