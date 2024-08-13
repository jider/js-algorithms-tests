import { test, expect } from 'vitest'
import { countUniqueValues } from '../../src/easy/countUniqueValues'

test('Get the count of unique values in the array', () => {
  expect(countUniqueValues([])).toBe(0)
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7)
})
