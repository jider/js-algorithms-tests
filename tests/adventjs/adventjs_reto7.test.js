import { describe, expect, it } from 'vitest'
import { drawGift } from '../../src/adventjs/adventjs_reto7'

describe('AdventJs - Reto 7 - Cajas en 3D', () => {
  it('drawGift should be a function', () => {
    expect(typeof drawGift === 'function').toBe(true)
  })

  it('drawGift should receive 2 parameters', () => {
    expect(() => drawGift()).toThrowError()
    expect(() => drawGift(0)).toThrowError()
  })

  it('if size is 0, the result is an empty string', () => {
    expect(drawGift(0, '')).toBe('')
  })

  it('if size is 1, the result is "#"', () => {
    expect(drawGift(1, '*')).toBe('#\n')
  })

  it('', () => {
    expect(drawGift(2, '-')).toBe(` ##\n###\n##\n`)
    expect(drawGift(3, '-')).toBe(`  ###\n #-##\n###-#\n#-##\n###\n`)
    expect(drawGift(4, '+')).toBe(`   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`)
    expect(drawGift(5, '*')).toBe(`    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`)
  })
})
