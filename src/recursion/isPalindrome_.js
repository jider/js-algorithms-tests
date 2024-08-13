/*
Write a recursive function called "isPalindrome" which returns true if the string passed to it is
a palindrome (reads the same forward and backward). Otherwise it returns false
*/

export function isPalindrome (str) {
  console.log(str)
  if (str.length <= 1) return true
  return true && (str.at(0) === str.at(-1)) ? isPalindrome(str.slice(1, -1)) : false
}

console.log(isPalindrome('A'))
console.log(isPalindrome('AB'))
console.log(isPalindrome('ABA'))
console.log(isPalindrome('ABAA'))
console.log(isPalindrome('ABCDCBA'))
console.log(isPalindrome('ABCDABA'))
