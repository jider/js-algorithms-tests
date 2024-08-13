import { expect, it } from 'vitest'
import { minMaxSum } from '../../src/hackerrank/minMaxSum.js'

it('Min-Max Sum', () => {
  expect(minMaxSum([1, 2, 3, 4, 5])).toEqual('10 14')
  expect(minMaxSum([7, 69, 2, 221, 8974])).toEqual('299 9271')
})
