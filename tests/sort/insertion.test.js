import { test, expect } from 'vitest'
import { insertionSort } from '../../src/sort/insertion'

test('Bubble sort the values', () => {
  expect(insertionSort([])).toStrictEqual([])
  expect(insertionSort([1])).toStrictEqual([1])
  expect(insertionSort([2, 1, 5, 4, 3])).toStrictEqual([1, 2, 3, 4, 5])
  expect(insertionSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5])
  expect(insertionSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(insertionSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
