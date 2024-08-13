import { it, expect } from 'vitest'
import { plusMinus } from '../../src/hackerrank/plusMinus.js'

it('plusMinus', () => {
  expect(plusMinus([-1, -1, 0, 1, 1])).toEqual([
    '0.400000',
    '0.400000',
    '0.200000'
  ])
})
