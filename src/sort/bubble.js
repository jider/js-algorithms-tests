/*
Bubble Sort
A sorting algorithm where the largest values bubble up to the top.
Send the maximum value to the top on every iteration
Best scenario with noSwaps check and array barely sorted

Time complexity - Best: O(n), Avg: O(n^2), Worst: O(n^2)

This sort algorithm excel when the datasets are small
Better than Selection Sort but Insertion Sort can be a better option in some scenarios (live data)
*/

// export function bubbleSort (values) {
//   console.log('-'.repeat(10))
//   const swapValues = (values, idx1, idx2) => {
//     [values[idx1], values[idx2]] = [values[idx2], values[idx1]]
//   }

//   if (values.length <= 1) return values
//   let iterations = 0
//   for (let i = values.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (values[j] > values[j + 1]) swapValues(values, j, j + 1)
//     }
//     iterations++
//     console.log({ iterations })
//   }
//   return values
// }

// Optimized solution checking if there was swaps or not
// export function bubbleSort (values) {
//   const swapValues = (values, idx1, idx2) => {
//     [values[idx1], values[idx2]] = [values[idx2], values[idx1]]
//   }
//
//   for (let i = values.length - 1; i > 0; i--) {
//     let noSwaps = true
//     for (let j = 0; j < i; j++) {
//       if (values[j] > values[j + 1]) {
//         swapValues(values, j, j + 1)
//         noSwaps = false
//       }
//     }
//     if (noSwaps) break
//   }
//   return values
// }

export function bubbleSort (values) {
  if (values.length <= 1) return values

  const swapValues = (idx1, idx2) => {
    [values[idx1], values[idx2]] = [values[idx2], values[idx1]]
  }

  for (let i = 0; i < values.length; i++) {
    let noSwaps = true
    for (let j = 0; j < values.length - (i + 1); j++) {
      if (values[j] > values[j + 1]) {
        swapValues(j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return values
}
