import { test, expect } from 'vitest'
import { same } from '../../src/easy/sameSquared'

test('Every value in array1 is squared in array2, with the same frequency', () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBeTruthy()
  expect(same([1, 2, 3], [1, 9])).toBeFalsy()
  expect(same([1, 2, 1], [1, 1, 4])).toBeTruthy()
  expect(same([1, 2, 1], [4, 4, 1])).toBeFalsy()
})
