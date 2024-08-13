import { test, expect } from 'vitest'
import { solution } from '../easy/uber3.js'

test('Shotset length between two points', () => {
  expect(solution([0.4, 1], [0.4, 1])).toBe(0)
  expect(solution([0.4, 0.9], [0.4, 1])).toBe(0.1)
  expect(solution([0.4, 1], [0.9, 3])).toBe(2.7)
  expect(solution([0.4, 1], [1, 1])).toBe(0.6)
  expect(solution([0, 2.6], [1, 1.5])).toBe(2.1)
})
