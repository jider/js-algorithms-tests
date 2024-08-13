import { test, expect } from 'vitest'
import { maxTaskDuration, maxTaskDurationPerTeam } from '../../src/easy/3'

test('Maximun task duration per team', () => {
  expect(maxTaskDuration([2, 2, 1])).toBe(3)
  expect(maxTaskDuration([3, 2, 1])).toBe(4)
  expect(maxTaskDuration([5, 1, 1])).toBe(1)
  expect(maxTaskDuration([5, 2, 1])).toBe(6)
})

test('Maximun task duration in teams', () => {
  expect(maxTaskDurationPerTeam([
    [2, 2, 1],
    [3, 2, 1],
    [5, 1, 1]
  ])).toEqual([3, 4, 1])
})
