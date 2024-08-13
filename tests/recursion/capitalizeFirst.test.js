import { test, expect } from 'vitest'
import { capitalizeFirst } from '../../src/recursion/capitalizeFirst.js'

test('Capitalize the first letter of each string in the array', () => {
  expect(capitalizeFirst([])).toStrictEqual([])
  expect(capitalizeFirst(['car'])).toStrictEqual(['Car'])
  expect(capitalizeFirst(['car', 'taco', 'banana'])).toStrictEqual(['Car', 'Taco', 'Banana'])
  expect(capitalizeFirst(['a', 'b', 'c'])).toStrictEqual(['A', 'B', 'C'])
})
