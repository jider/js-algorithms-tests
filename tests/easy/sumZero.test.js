import { test, expect } from 'vitest'
import { sumZero } from '../../src/easy/sumZero'

test('Find the first pair where the sum is 0', () => {
  expect(sumZero([0])).toStrictEqual(undefined)
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3])
  expect(sumZero([-2, 0, 1, 3])).toStrictEqual(undefined)
  expect(sumZero([1, 2, 3])).toStrictEqual(undefined)
  expect(sumZero([-2, 1, 2, 3])).toStrictEqual([-2, 2])
  expect(sumZero([-3, -2, -1, 0, 1])).toStrictEqual([-1, 1])
})
