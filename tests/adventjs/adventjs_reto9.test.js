import { describe, expect, it } from 'vitest'
import { adjustLights } from '../../src/adventjs/adventjs_reto9'

describe('AdventJs - Reto 9 - Alterna las luces', () => {
  it('adjustLights should be a function', () => {
    expect(typeof adjustLights === 'function').toBe(true)
  })

  it('adjustLights should receive 1 parameter', () => {
    expect(() => adjustLights()).toThrowError()
  })

  it('If the number of lights is 0 or 1, the result should be 0', () => {
    expect(adjustLights([])).toBe(0)
    expect(adjustLights(['🟢'])).toBe(0)
    expect(adjustLights(['🔴'])).toBe(0)
  })

  it('If we have 2 light of the same color the result should be 1', () => {
    expect(adjustLights(['🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴'])).toBe(1)
  })

  it('If we have 2 light of different color the result should be 0', () => {
    expect(adjustLights(['🟢', '🔴'])).toBe(0)
    expect(adjustLights(['🔴', '🟢'])).toBe(0)
  })

  it('If we have 3 or more lights, the result should be the minimun number or lights to change, to have green and reds lights alternated', () => {
    expect(adjustLights(['🟢', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢'])).toBe(1)
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(1)
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
  })
})
