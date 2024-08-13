/*
Merge Sort

- It's a combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element as always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements,
then building up a newly sorted array

- In order to implement Merge Sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all
of the elements in the two input arrays

Time complexity -> Best: O(n log n), Avg: O(n log n), Worst: O(n log n)
Space complexity -> O(n)

[8, 3, 5, 4, 7, 6, 1, 2]
[8, 3, 5, 4] [7, 6, 1, 2]
[8, 3] [5, 4] [7, 6] [1, 2]
[8]<->[3] [5]<->[4] [7]<->[6] [1]<->[2]
--------------------------------
[3, 8]<->[4, 5] [6, 7]<->[1, 2]
[3, 4, 5, 8]<->[1, 2, 6, 7]
[1, 2, 3, 4, 5, 6, 7, 8]
*/

export function mergeSort (arr) {
  if (arr.length <= 1) return arr
  const half = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, half))
  const right = mergeSort(arr.slice(half))
  return mergeSortedArrays(left, right)
}

// Merges two sorted arrays in a newly sorted array containing of all the elements in the input arrays
// Time complexity -> O(n + m)
// Space complexity -> O(n + m)
export function mergeSortedArrays (arr1, arr2) {
  const mergeArr = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) mergeArr.push(arr1[i++])
    else mergeArr.push(arr2[j++])
  }
  return mergeArr.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j))
}
