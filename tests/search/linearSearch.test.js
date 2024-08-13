import { test, expect } from 'vitest'
import { linearSearch } from '../../src/Search/linearSearch'

test('Linear Search', () => {
  expect(linearSearch([], 'a')).toBe(-1)
  expect(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBe(4)
  expect(linearSearch(['a', 'b', 'c', 'd', 'e', 'f'], 'c')).toBe(2)
})
