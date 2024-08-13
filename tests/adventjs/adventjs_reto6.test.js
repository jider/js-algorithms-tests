import { describe, expect, it } from 'vitest'
import { maxDistance } from '../../src/adventjs/adventjs_reto6'

describe('AdventJs - Reto 6 - Los renos a prueba', () => {
  it('maxDistance should be a function', () => {
    expect(typeof maxDistance === 'function').toBe(true)
  })

  it('maxDistance should receive 1 parameter', () => {
    expect(() => maxDistance()).toThrowError()
  })

  it('if movements is empty, the result is 0', () => {
    expect(maxDistance('')).toBe(0)
  })

  it('> characters increment the distance', () => {
    expect(maxDistance('>')).toBe(1)
    expect(maxDistance('>>>')).toBe(3)
  })

  it('< characters decrement the distance', () => {
    expect(maxDistance('><')).toBe(0)
    expect(maxDistance('>>>><<<<')).toBe(0)
    expect(maxDistance('<<<<>>>>')).toBe(0)
    expect(maxDistance('>>><')).toBe(2)
    expect(maxDistance('>><>')).toBe(2)
    expect(maxDistance('<<<>')).toBe(2)
  })

  it('* characters increment bigger distance (left or right)', () => {
    expect(maxDistance('>>*<')).toBe(2)
    expect(maxDistance('>>***<<')).toBe(3)
    expect(maxDistance('>***>')).toBe(5)
    expect(maxDistance('**********')).toBe(10)
  })
})
