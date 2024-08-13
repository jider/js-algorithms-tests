import { test, expect } from 'vitest'
import { recursiveRange } from '../../src/recursion/recursiveRange'

test('adds up all the numbers from 0 to the number passed to the function', () => {
  expect(recursiveRange(0)).toBe(0)
  expect(recursiveRange(1)).toBe(1)
  expect(recursiveRange(6)).toBe(21)
  expect(recursiveRange(10)).toBe(55)
})
