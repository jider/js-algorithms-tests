import { describe, expect, it } from 'vitest'
import { cyberReindeer } from '../../src/adventjs/adventjs_reto5'

/*

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada

*/
describe('AdventJs - Reto 5 - El CyberTruck de Santa', () => {
  it('cyberReindeer must be a function', () => {
    expect(typeof cyberReindeer === 'function').toBe(true)
  })

  it('cyberReindeer must accept two parameters', () => {
    expect(() => cyberReindeer()).toThrowError()
    expect(() => cyberReindeer('')).toThrowError()
  })

  it('cyberReindeer must return an array, cannot be empty', () => {
    expect(cyberReindeer('', 1)).toBeInstanceOf(Array)
  })

  it('the number of elements in result array should the number of times parameter', () => {
    const times = 5
    let result = []
    for (let x = 1; x <= times; x++) {
      result = cyberReindeer('S', x)
      expect(result.length).toBe(x)
    }
  })

  it('the first element in reault array should be the initial road state', () => {
    const time = 5
    const road = 'S..'
    let result = cyberReindeer(road, time)
    expect(result[0]).toBe(road)
  })

  it('each element in array should have the same length as road', () => {
    const time = 5
    const road = 'S..'
    let result = cyberReindeer(road, time)
    for (let x = 0; x < result.length; x++) {
      expect(result[x].length).toBe(road.length)
    }
  })

  it('the number of times is smaller then the road', () => {
    expect(cyberReindeer('S...', 1)).toStrictEqual(['S...'])
    expect(cyberReindeer('S....', 2)).toStrictEqual(['S....', '.S...'])
    expect(cyberReindeer('S....', 3)).toStrictEqual(['S....', '.S...', '..S..'])
    expect(cyberReindeer('S....', 4)).toStrictEqual(['S....', '.S...', '..S..', '...S.'])
  })

  it('the number of times is bigger then the road', () => {
    expect(cyberReindeer('S', 5)).toStrictEqual(['S', 'S', 'S', 'S', 'S'])
    expect(cyberReindeer('S.', 5)).toStrictEqual(['S.', '.S', '.S', '.S', '.S'])
    expect(cyberReindeer('S..', 5)).toStrictEqual(['S..', '.S.', '..S', '..S', '..S'])
    expect(cyberReindeer('S...', 5)).toStrictEqual(['S...', '.S..', '..S.', '...S', '...S'])
  })

  it('Scenario with barriers', () => {
    expect(cyberReindeer('S|', 1)).toStrictEqual(['S|'])
    expect(cyberReindeer('S|', 2)).toStrictEqual(['S|', 'S|'])
    expect(cyberReindeer('S|', 3)).toStrictEqual(['S|', 'S|', 'S|'])
    expect(cyberReindeer('S|', 4)).toStrictEqual(['S|', 'S|', 'S|', 'S|'])
    expect(cyberReindeer('S|', 5)).toStrictEqual(['S|', 'S|', 'S|', 'S|', 'S|'])
    expect(cyberReindeer('S..|.', 6)).toStrictEqual(['S..|.', '.S.|.', '..S|.', '..S|.', '..S|.', '...S.'])
    expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ])
  })
})
