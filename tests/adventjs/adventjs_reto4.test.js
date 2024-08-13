import { describe, expect, it } from 'vitest'
import { decode } from '../../src/adventjs/adventjs_reto4.js'

describe('AdventJs - Reto 4 - Dale la vuelta a los paréntesis', () => {
  it('decode should be a function', () => {
    expect(typeof decode === 'function').toBe(true)
  })

  it('decode should have 1 parameter', () => {
    expect(() => decode()).toThrowError()
  })

  it('if no parethesis to decode, the function returns the message sent', () => {
    expect(decode('abc')).toBe('abc')
  })

  it('Can handle any conbination of parenthesis', () => {
    expect(decode('(olleh)')).toBe('hello')
    expect(decode('hola (odnum)')).toBe('hola mundo')
    expect(decode('(aloh) (odnum)')).toBe('hola mundo')
    expect(decode('hola (o(nd)um)')).toBe('hola mundo')
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
    expect(decode('(atn(sa))')).toBe('santa')
  })

})
