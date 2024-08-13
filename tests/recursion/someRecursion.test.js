import { test, expect } from 'vitest'
import { someRecursive } from '../../src/recursion/someRecursion'

test('The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false', () => {
  const isOdd = val => val % 2 !== 0

  expect(someRecursive([], isOdd)).toBe(false)
  expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true)
  expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true)
  expect(someRecursive([4, 6, 8], isOdd)).toBe(false)
  expect(someRecursive([4, 6, 8], val => val > 10)).toBe(false)
})
