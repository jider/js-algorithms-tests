/*
Write a function called "same", which accepts two arrays.
The fucntion should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

// First try - O(n)
export function same (arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  const inputSquared = {}
  for (const value of arr1) {
    const squared = value * value
    inputSquared[squared] = ++inputSquared[squared] || 1
  }
  for (const value of arr2) {
    if (!inputSquared[value]) break
    if (inputSquared[value] === 1) delete inputSquared[value]
    else inputSquared[value]--
  }

  return Object.keys(inputSquared).length === 0
}

// Naive solution - O(n^2)
// export function same (arr1, arr2) {
//   if (arr1.length !== arr2.length) return false

//   const inputSquared = {}
//   for (const value of arr1) {
//     const squared = value * value
//     const squareIdx = arr2.indexOf(squared, inputSquared[squared] + 1 || 0)
//     if (squareIdx === -1 || squareIdx === inputSquared[squared]) return false
//     inputSquared[squared] = squareIdx
//   }

//   return true
// }
