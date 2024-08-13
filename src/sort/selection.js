/*
Selection Sort - O(n^2)
Similar to "Bubble Sort", but instead of first placing large values into sorted position (at the end),
places small values into sorted position at the start

The only scenario where "Selection Sort" is better than "Bubble Sort" is if we can reduce the number of swaps
"Bubble Sort" continuously swap its values during the process to send the biggest value to the end,
"Selection Sort" only swaps if needed.

Time complexity - Best: O(n^2), Avg: O(n^2), Worst: O(n^2)

This sort algorithm excel when the datasets are small
Bubble Sort or Insertion Sort are better options
*/

// export function selectionSort (values) {
//   const swapValues = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   }
//
//   let minIdx = 0
//   for (let i = 0; i < values.length - 1; i++) {
//     minIdx = i
//     for (let j = i + 1; j < values.length; j++) {
//       if (values[j] < values[minIdx]) minIdx = j
//     }
//     if (minIdx !== i) swapValues(values, i, minIdx)
//   }
//   return values
// }

export function selectionSort (values) {
  if (values.length <= 1) return values

  const swapValues = (idx1, idx2) => {
    [values[idx1], values[idx2]] = [values[idx2], values[idx1]]
  }

  let minValueIdx = 0
  for (let i = 0; i < values.length - 1; i++) {
    minValueIdx = i
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[minValueIdx]) minValueIdx = j
    }

    if (minValueIdx !== i) swapValues(i, minValueIdx)
  }

  return values
}
