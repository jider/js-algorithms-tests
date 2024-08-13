import { describe, expect, it } from 'vitest'
import { findNaughtyStep } from '../../src/adventjs/adventjs_reto3'

describe('AdventJs - Reto 3 - El elfo travieso', () => {
  it('findNaughtyStep should be a function', () => {
    expect(typeof findNaughtyStep === 'function').toBe(true)
  })

  it('findNaughtyStep should have 2 parameters', () => {
    expect(() => findNaughtyStep()).toThrowError()
  })

  it('if original steps is empty, findNaughtyStep returns the modified steps', () => {
    expect(findNaughtyStep('', 'a')).toBe('a')
  })

  it('if original steps and modified steps are equal, findNaughtyStep returns and empty string', () => {
    expect(findNaughtyStep('abc', 'abc')).toBe('')
  })

  it('if modified steps has an additional step, findNaughtyStep returns the additional step', () => {
    expect(findNaughtyStep('bcd', 'abcd')).toBe('a')
  })

  it('if modified steps has less steps than original, findNaughtyStep returns the missing step', () => {
    expect(findNaughtyStep('abcd', 'bcd')).toBe('a')
  })
})
