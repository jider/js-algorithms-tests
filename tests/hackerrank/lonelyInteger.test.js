import { expect, it } from 'vitest'
import { lonelyInteger } from '../../src/hackerrank/lonelyInteger.js'

it('Lonely Integer', () => {
  expect(lonelyInteger([1, 1, 2])).toEqual(2)
  expect(lonelyInteger([1, 2, 3, 4, 3, 2, 1])).toEqual(4)
})
