import { describe, expect, it } from 'vitest'
import { organizeGifts } from '../../src/adventjs/adventjs_reto8'

describe('AdventJs - Reto 8 - Ordenando el almacen', () => {
  it('organizeGifts should be a function', () => {
    expect(typeof organizeGifts === 'function').toBe(true)
  })

  it('organizeGifts should receive one parameter', () => {
    expect(() => organizeGifts()).toThrowError()
  })

  it('Gifts less than 10 should be stored in bags "()"', () => {
    expect(organizeGifts('1a')).toBe('(a)')
    expect(organizeGifts('5a')).toBe('(aaaaa)')
  })

  it('Gifts are stored in boxes "{}" per each batch of 10', () => {
    expect(organizeGifts('10a')).toBe('{a}')
    expect(organizeGifts('40a')).toBe('{a}{a}{a}{a}')
  })

  it('Gifts are stored in pallets "[]" per each batch of 5 boxes', () => {
    expect(organizeGifts('50a')).toBe('[a]')
    expect(organizeGifts('200a')).toBe('[a][a][a][a]')
  })

  it('Combination of gifts in pallets, boxes and bags', () => {
    expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)')
    expect(organizeGifts('1a10b50c268d')).toBe('(a){b}[c][d][d][d][d][d]{d}(dddddddd)')
  })
})
