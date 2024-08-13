/*
Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted
This sorting function works pretty well if we need to sort data that is coming into the array in a live way (for example, streaming)
The way it works, can take the data from the end of the array and send the values to its corresponding position to the left

Time complexity -> Best: O(n), Avg: O(n^2), Worst: O(n^2)

More efficient if the array of values its almost sorted
e.g. [2, 3, 4, 5, 1]
Worst scenario is the array of values is reversed
e.g. [5, 4, 3, 2, 1]

This sort algorithm excel when the datasets are small
Better than Selection Sort and in some scenarios (live data) better than Bubble Sort

Example:
[5, 3, 4, 1, 2]
 -  *
[3, 5, 4, 1, 2]
 -  -  *
[3, 4, 5, 1, 2]
 -  -  -  *
[1, 3, 4, 5, 2]
 -  -  -  -  *
[1, 2, 3, 4, 5]
*/

// export function insertionSort (values) {
//   const swapValues = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//   }

//   for (let i = 1; i < values.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (values[i] < values[j]) {
//         swapValues(values, j, i)
//         i = j
//       } else break
//     }
//   }
//   return values
// }

// Another implementation
// export function insertionSort (values) {
//   for (let i = 1; i < values.length; i++) {
//     const currValue = values[i]
//     let j = i - 1
//     while (j >= 0 && currValue < values[j]) {
//       // if current j is bigger than current value, move current j to the right
//       values[j + 1] = values[j]
//       j--
//     }
//     values[j + 1] = currValue
//   }
//   return values
// }

export function insertionSort (values) {
  if (values.length <= 1) return values

  const swapValues = (idx1, idx2) => {
    [values[idx1], values[idx2]] = [values[idx2], values[idx1]]
  }

  for (let i = 1; i < values.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (values[i] < values[j]) {
        swapValues(i, j)
        i = j
      } else break
    }
  }

  return values
}
