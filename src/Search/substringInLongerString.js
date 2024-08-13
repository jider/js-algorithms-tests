/*
Create a function which receives a long string and another string we want to find inside the long string.
The function must return how many times the short string appears inside the long string
*/

// Naive solution - O(n^2)
// export function substringInLongerString (strToSearch, str) {
//   if (str === '' || str.length < strToSearch.length) return 0

//   let counter = 0
//   const maxLen = str.length - (strToSearch.length - 1)
//   for (let i = 0; i < maxLen; i++) {
//     let j = 0
//     for (; j < strToSearch.length; j++) {
//       if (strToSearch[j] !== str[i + j]) break
//     }
//     if (j === strToSearch.length) counter++
//   }
//   return counter
// }

// Only one loop - O(n)
export function substringInLongerString (strToSearch, str) {
  if (str === '' || str.length < strToSearch.length) return 0

  let counter = 0
  const maxLen = str.length - (strToSearch.length - 1)
  for (let i = 0; i < maxLen; i++) {
    if (str[i] === strToSearch[0]) {
      if (str.substring(i, i + strToSearch.length) === strToSearch) {
        counter++
        i += strToSearch.length - 1
      }
    }
  }
  return counter
}
