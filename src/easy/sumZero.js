/*
Write a function called "sumZero" wich accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array that
includes both values that sum to zero or undefined if a pair does not exist
*/

// Solution - O(n^2)
// export function sumZero (values) {
//   if (values.length <= 1) return undefined

//   for (let i = 0; i < values.length; i++) {
//     const leftValue = values[i]
//     if (leftValue >= 0) return undefined

//     const rightValueIdx = values.lastIndexOf(Math.abs(leftValue))
//     if (values[rightValueIdx] <= 0) return undefined
//     if (rightValueIdx >= 0) return [leftValue, Math.abs(leftValue)]
//   }
//   return undefined
// }

// Solution utilizando "Multiple Pointer" pattern - O(n)
export function sumZero (values) {
  if (values.length <= 1) return undefined

  let leftIdx = 0
  let rightIdx = values.length - 1

  while (leftIdx < rightIdx) {
    const leftValue = values[leftIdx]
    if (leftValue >= 0) return undefined

    const rightValue = values[rightIdx]
    if (rightValue <= 0) return undefined

    const sum = leftValue + rightValue
    if (sum === 0) return [leftValue, rightValue]
    sum > 0 ? rightIdx-- : leftIdx++
  }
}
