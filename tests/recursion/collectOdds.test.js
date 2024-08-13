import { test, expect } from 'vitest'
import { collectOdds, collectOddsPureRecursion } from '../../src/recursion/collectOdds'

test('factorial of a number (helper method)', () => {
  expect(collectOdds([])).toStrictEqual([])
  expect(collectOdds([2, 4, 6])).toStrictEqual([])
  expect(collectOdds([1, 3, 5, 7])).toStrictEqual([1, 3, 5, 7])
  expect(collectOdds([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([1, 3, 5, 7])
})

test('factorial of a number (pure recursion)', () => {
  // expect(collectOddsPureRecursion([])).toStrictEqual([])
  expect(collectOddsPureRecursion([2, 4, 6])).toStrictEqual([])
  expect(collectOddsPureRecursion([1, 3, 5, 7])).toStrictEqual([1, 3, 5, 7])
  expect(collectOddsPureRecursion([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([1, 3, 5, 7])
})
