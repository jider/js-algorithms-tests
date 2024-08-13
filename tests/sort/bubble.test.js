import { test, expect } from 'vitest'
import { bubbleSort } from '../../src/sort/bubble'

test('Bubble sort the values', () => {
  expect(bubbleSort([])).toStrictEqual([])
  expect(bubbleSort([1])).toStrictEqual([1])
  expect(bubbleSort([2, 1, 5, 4, 3])).toStrictEqual([1, 2, 3, 4, 5])
  expect(bubbleSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5])
  expect(bubbleSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(bubbleSort([2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
