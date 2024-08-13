import { test, expect } from 'vitest'
import { maxSubArraySum } from '../../src/easy/maxSubArraySum'

test('Maximum sum of n consecutive elements in the array', () => {
  expect(maxSubArraySum([], 4)).toStrictEqual(null)
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
  expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toStrictEqual(17)
  expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6)
  expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13)
})
