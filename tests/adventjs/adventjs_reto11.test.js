import { describe, expect, it } from 'vitest'
import { getIndexsForPalindrome } from '../../src/adventjs/adventjs_reto11'

describe('AdventJs - Reto 11 - Los elfos estudiosos', () => {
  it('getIndexsForPalindrome is a function', () => {
    expect(typeof getIndexsForPalindrome === 'function').toBe(true)
  })

  it('getIndexsForPalindrome receives one parameter', () => {
    expect(() => getIndexsForPalindrome()).toThrowError()
    expect(() => getIndexsForPalindrome('')).toThrowError()
  })

  it('If the word is a palindrome, the result is an empty array "[]"', () => {
    expect(getIndexsForPalindrome('aa')).toEqual([])
    expect(getIndexsForPalindrome('anna')).toEqual([])
  })

  it('If the word is not a palindrome, the result should be "null"', () => {
    expect(getIndexsForPalindrome('ab')).toBe(null)
    expect(getIndexsForPalindrome('abac')).toBe(null)
    expect(getIndexsForPalindrome('aacbaaaa')).toEqual(null)
    expect(getIndexsForPalindrome('aaabcaaa')).toEqual(null)
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })

  it('If the word can be a palindrome changing the letters in the word, the result should be the indexes of the changed letters', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
    expect(getIndexsForPalindrome('babaaaa')).toEqual([0, 4])
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
  })
})
