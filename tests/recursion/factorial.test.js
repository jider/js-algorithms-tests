import { test, expect } from 'vitest'
import { factorial } from '../../src/recursion/factorial'

test('factorial of a number', () => {
  expect(factorial(0)).toBe(1)
  expect(factorial(1)).toBe(1)
  expect(factorial(3)).toBe(6)
  expect(factorial(4)).toBe(24)
})
