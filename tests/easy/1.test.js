import { test, expect } from 'vitest'
import { maxInstructions } from '../../src/easy/1'

test('Max instructions', () => {
  expect(maxInstructions(['R', 'R', 'U', 'U'])).toBe(4)
  expect(maxInstructions(['R', 'R', 'U', 'L'])).toBe(3)
  expect(maxInstructions(['R', 'L', 'L', 'U'])).toBe(2)
  expect(maxInstructions(['R', 'L', 'D', 'U'])).toBe(1)
  expect(maxInstructions(['R', 'U', 'L', 'D'])).toBe(2)
  expect(maxInstructions(['L', 'L', 'L', 'L', 'L'])).toBe(5)
})
