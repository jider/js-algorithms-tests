import { test, expect } from 'vitest'
import { selectionSort } from '../../src/sort/selection'

test('Selection sort the values', () => {
  expect(selectionSort([])).toStrictEqual([])
  expect(selectionSort([1])).toStrictEqual([1])
  expect(selectionSort([2, 1, 5, 4, 3])).toStrictEqual([1, 2, 3, 4, 5])
  expect(selectionSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5])
  expect(selectionSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(selectionSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
