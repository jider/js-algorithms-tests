import { test, expect } from 'vitest'
import { productOfArray } from '../../src/recursion/productOfArray'

test('takes in an array of numbers and returns the product of them all', () => {
  expect(productOfArray([1])).toBe(1)
  expect(productOfArray([1, 2, 3])).toBe(6)
  expect(productOfArray([1, 2, 3, 10])).toBe(60)
})
