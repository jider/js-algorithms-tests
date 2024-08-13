import { test, expect } from 'vitest'
import { mergeSort, mergeSortedArrays } from '../../src/sort/merge'

test('Merge sort the values', () => {
  expect(mergeSort([])).toStrictEqual([])
  expect(mergeSort([1])).toStrictEqual([1])
  expect(mergeSort([2, 1, 5, 4, 3])).toStrictEqual([1, 2, 3, 4, 5])
  expect(mergeSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5])
  expect(mergeSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(mergeSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('Merge two sorted arrays in a newly sorted array', () => {
  expect(mergeSortedArrays([], [])).toStrictEqual([])
  expect(mergeSortedArrays([7], [])).toStrictEqual([7])
  expect(mergeSortedArrays([2], [5])).toStrictEqual([2, 5])
  expect(mergeSortedArrays([2, 7], [5])).toStrictEqual([2, 5, 7])
  expect(mergeSortedArrays([1, 3, 7, 8], [2, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
})
