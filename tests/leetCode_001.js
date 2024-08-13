import { test, expect } from 'vitest'
import { maximumWealth } from '../leetCode_001'

test('Get richest account', () => {
  expect(maximumWealth([[1, 2, 3], [4, 5, 6]])).toBe(15)
  expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).toBe(10)
  expect(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toBe(17)
})
