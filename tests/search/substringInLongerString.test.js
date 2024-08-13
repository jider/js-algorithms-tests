import { test, expect } from 'vitest'
import { substringInLongerString } from '../../src/Search/substringInLongerString'

test('How many times a string can be found in a longer string', () => {
  expect(substringInLongerString('aaa', '')).toBe(0)
  expect(substringInLongerString('aaa', 'aa')).toBe(0)
  expect(substringInLongerString('abc', 'abc')).toBe(1)
  expect(substringInLongerString('abc', 'xaxbcxabcxx')).toBe(1)
  expect(substringInLongerString('abc', 'abcxaxbcxabcxabcxabc')).toBe(4)
  expect(substringInLongerString('abc', 'axbcxaxbxcxaxbcxabxcxaxbxc')).toBe(0)
})
