import { describe, expect, it } from 'vitest'
import { findFirstRepeated } from '../../src/adventjs/adventjs_reto1'

describe('AdventJs - Reto 1 - Primer regalo repetido', () => {
  it('findFirstRepeated is a function', () => {
    expect(typeof findFirstRepeated === 'function').toBe(true)
  })

  it('findFirstRepeated receives an array as parameter', () => {
    expect(() => findFirstRepeated()).toThrowError()
  })

  it('findFirstRepeated returns -1 if parameter is empty', () => {
    expect(findFirstRepeated([])).toBe(-1)
  })

  it('findFirstRepeated should return -1 if no repeated values', () => {
    expect(findFirstRepeated([1, 2, 3, 4, 5])).toBe(-1)
  })

  it('findFirstRepeated should return x if value repeated x', () => {
    expect(findFirstRepeated([1, 2, 1])).toBe(1)
  })

  it('findFirstRepeated should return x if x is the first repeated value', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
})
