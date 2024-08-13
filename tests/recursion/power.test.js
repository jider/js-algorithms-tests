import { test, expect } from 'vitest'
import { power } from '../../src/recursion/power'

test('return the power of the base to the exponent', () => {
  expect(power(1, 0)).toBe(1)
  expect(power(16, 1)).toBe(16)
  expect(power(2, 2)).toBe(4)
  expect(power(5, 5)).toBe(3125)
})
