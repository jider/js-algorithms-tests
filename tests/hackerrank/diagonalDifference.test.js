import { expect, it } from 'vitest'
import { diagonalDifference } from '../../src/hackerrank/diagonalDifference.js'

it('Diagonal Difference', () => {
  expect(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])).toBe(2)
})
