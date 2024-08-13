/*
Write a function called "maxSubArraySum" which accpets an array of integers and a number called n.
The function should calculate the maximun sum of n consecutive elements in the array
*/

// Solution: i only increase if j === i + n - 1 -> O(n)
// export function maxSubArraySum (arr, n) {
//   if (n > arr.length) return null

//   if (n === 1) return Math.max(...arr)

//   let maxSum = 0
//   const maxLen = arr.length - (n - 1)
//   let i = 0
//   let sum = arr[i]
//   for (let j = 1; j < arr.length; j++) {
//     sum += arr[j]
//     if (i + n - 1 === j) {
//       maxSum = Math.max(maxSum, sum)
//       i++
//       j = i
//       sum = arr[i]
//     }
//     if (i >= maxLen) break
//   }
//   return maxSum
// }

// Solution using sliding window - O(n)
export function maxSubArraySum (arr, num) {
  if (arr.length < num) return null
  if (num === 1) return Math.max(...arr)

  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < num; i++) { // This loop creates the window
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i <= arr.length - num + 1; i++) {
    tempSum += -arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
