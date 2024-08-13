import { test, expect } from 'vitest'
import { workLoad } from '../../src/easy/2'

test('Work load', () => {
  expect(workLoad(1, 50, 100, 50)).toBe(true)
  expect(workLoad(1, 100, 100, 50)).toBe(false)
  expect(workLoad(2, 50, 30, 5)).toBe(true)
  expect(workLoad(2, 50, 10, 5)).toBe(false)
  expect(workLoad(5, 200, 50, 5)).toBe(true)
  expect(workLoad(5, 200, 40, 1)).toBe(false)
})
