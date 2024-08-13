import { test, expect } from 'vitest'
import { isSubsequence } from '../../src/easy/isSubsequence'

test('', () => {
  expect(isSubsequence('hello', '')).toBe(false)
  expect(isSubsequence('hello', 'hell')).toBe(false)
  expect(isSubsequence('hello', 'hello')).toBe(true)
  expect(isSubsequence('hello', 'hello world')).toBe(true)
  expect(isSubsequence('sing', 'sting')).toBe(true)
  expect(isSubsequence('abc', 'abracadabra')).toBe(true)
  expect(isSubsequence('abc', 'acb')).toBe(false)
})
