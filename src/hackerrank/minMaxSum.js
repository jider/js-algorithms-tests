/*
Given five positive integers, find the minimum and maximum values that can be
calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two
space-separated long integers.
Note: Input can be not sorted

Example:
Input -> arr = [1, 3, 5, 7, 9]
Output -> 16 24
*/
// export function minMaxSum (arr) {
//   let total = arr.reduce((acc, cur) => acc + cur, 0)
//   let minSum = Infinity
//   let maxSum = -Infinity
//
//   for (const value of arr) {
//     minSum = Math.min(minSum, total - value)
//     maxSum = Math.max(maxSum, total - value)
//   }
//
//   return `${ minSum } ${ maxSum }`
// }

// Another solution sorting the array
export function minMaxSum (arr) {
  const sorted = arr.sort((a, b) => a - b)
  const minSum = [...sorted.slice(0, arr.length - 1)].reduce((acc, curr) => acc + curr, 0)
  const maxSum = [...sorted.slice(1)].reduce((acc, curr) => acc + curr, 0)

  return `${ minSum } ${ maxSum }`
}
