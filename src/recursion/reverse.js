/*
Write a recursive function called "reverse" which accepts a string and returns a new string in reverse.
*/

// export function reverse (str) {
//   if (str === '') return ''
//   return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
// }

// Another solution
export function reverse (str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}
