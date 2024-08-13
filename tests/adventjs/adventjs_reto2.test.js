import { describe, expect, it } from 'vitest'
import { manufacture } from '../../src/adventjs/adventjs_reto2'

describe('AdventJs - Reto 2 - Ponemos en marcha la fábrica', () => {
  it('manufacture should be a function', () => {
    expect(typeof manufacture === 'function').toBe(true)
  })

  it('manufacture should receive 2 parameters', () => {
    expect(() => manufacture()).toThrowError()
  })

  it('manufacture returns an empty array is gifts are empty or materials are empty', () => {
    expect(manufacture([], '')).toStrictEqual([])
  })

  it('manufacture returns an empty array if the gifts cannot be created using the materials', () => {
    expect(manufacture(['train', 'car', 'puzzle'], 'abcde')).toStrictEqual([])
  })

  it('manufacture returns an array with one or multiple gifts if one or more gifts can be created using the materials', () => {
    expect(manufacture(['train', 'car', 'puzzle'], 'ctrain')).toStrictEqual(['train', 'car'])
  })
})
