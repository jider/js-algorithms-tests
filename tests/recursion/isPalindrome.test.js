import { test, expect } from 'vitest'
import { isPalindrome } from '../../src/recursion/isPalindrome'

test('Is palimdrome', () => {
  expect(isPalindrome('')).toBe(false)
  expect(isPalindrome('o')).toBe(true)
  expect(isPalindrome('awesome')).toBe(false)
  expect(isPalindrome('foobar')).toBe(false)
  expect(isPalindrome('tacocat')).toBe(true)
  expect(isPalindrome('amanaplanacanalpanama')).toBe(true)
  expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false)
})
