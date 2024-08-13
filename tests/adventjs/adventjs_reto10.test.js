import { describe, expect, it } from 'vitest'
import { createChristmasTree } from '../../src/adventjs/adventjs_reto10'

describe('AdventJs - Reto 10 - Crea tu propio árbol de Navidad', () => {
  it('createChristmasTree should be a function', () => {
    expect(typeof createChristmasTree === 'function').toBe(true)
  })

  it('createChristmasTree should receive 2 parameters', () => {
    expect(() => createChristmasTree()).toThrowError()
    expect(() => createChristmasTree('')).toThrowError()
    expect(() => createChristmasTree('*')).toThrowError()
  })

  it('If the tree has height 0, the result should be the trunk', () => {
    expect(createChristmasTree('*', 0)).toBe('|\n')
  })

  it('If the tree has one ornament but height bigger than 0, the result is a tree as tall as height using the ornaments and the trunk centered', () => {
    expect(createChristmasTree('*', 1)).toBe('*\n|\n')
    expect(createChristmasTree('*', 3)).toBe('  *\n * *\n* * *\n  |\n')
  })

  it('If the tree has more than one ornament, the result is a tree as tall as height using the ornaments and the trunk centered', () => {
    expect(createChristmasTree('*@o', 3)).toBe('  *\n @ o\n* @ o\n  |\n')
    expect(createChristmasTree('123', 4)).toBe('   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n')
  })
})
