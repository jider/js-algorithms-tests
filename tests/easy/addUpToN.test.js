import { test, expect } from 'vitest'
import { addUpToN } from '../../src/easy/addUpToN'

test('Sum all numbers up to N', () => {
  expect(addUpToN(1)).toBe(1)
  expect(addUpToN(2)).toBe(3)
  expect(addUpToN(6)).toBe(21)
})
