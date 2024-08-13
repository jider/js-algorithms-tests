import { expect, it } from 'vitest'
import { flippingBits } from '../../src/hackerrank/flippingBits.js'

it('Flipping Bits', () => {
  expect(flippingBits(1)).toBe(4294967294)
  expect(flippingBits(9)).toBe(4294967286)
  expect(flippingBits(2147483647)).toBe(2147483648)
  expect(flippingBits(0)).toBe(4294967295)
})
