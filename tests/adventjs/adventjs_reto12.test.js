import { describe, expect, it } from 'vitest'
import { checkIsValidCopy } from '../../src/adventjs/adventjs_reto12'

describe('AdventJs - Reto 12 - ¿Es una copia válida?', () => {
  it('checkIsValidCopy is a function', () => {
    expect(typeof checkIsValidCopy === 'function').toBe(true)
  })

  it('checkIsValidCopy should receive 2 parameters', () => {
    expect(() => checkIsValidCopy()).toThrowError()
    expect(() => checkIsValidCopy('')).toThrowError()
  })

  it('If length of original and copy is not the same, the result is false', () => {
    expect(checkIsValidCopy('A', '')).toBe(false)
    expect(checkIsValidCopy('A A', 'A')).toBe(false)
  })

  it('If both original and copy are equal, the result is true', () => {
    expect(checkIsValidCopy('', '')).toBe(true)
    expect(checkIsValidCopy('abc def', 'abc def')).toBe(true)
  })

  it('Uppercase letters can degrade to lowercase letters', () => {
    expect(checkIsValidCopy('A', 'a')).toBe(true)
    expect(checkIsValidCopy('AB CD', 'ab Cd')).toBe(true)
  })

  it('Lowercase letters can degrade to any of the following characters "#, +, :, ., "', () => {
    expect(checkIsValidCopy('a', 'a')).toBe(true)
    expect(checkIsValidCopy('a', '#')).toBe(true)
    expect(checkIsValidCopy('abc abc', 'a#.  +:')).toBe(true)
  })

  it('Combination of all scenarios, uppercase, lowercase and whitespaces', () => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBe(false)
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')).toBe(true)
    expect(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBe(true)
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBe(true)
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBe(true)
  })
})
