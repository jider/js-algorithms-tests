import { test, expect } from 'vitest'
import { solution } from '../uber2'

test('Best car I can afford', () => {
  expect(solution(30, [0.3, 0.5, 0.7, 1, 1.3])).toBe('UberXL')
})
