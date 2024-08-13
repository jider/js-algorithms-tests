import { test, expect } from 'vitest'
import { flatten } from '../../src/recursion/flatten'

test('Returns a new array with all values flattened.', () => {
  expect(flatten([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5])
  expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5])
  expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3])
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1, 2, 3])
})
