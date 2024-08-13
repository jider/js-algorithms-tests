import { describe, expect, it } from 'vitest'
import { calculateTime } from '../../src/adventjs/adventjs_reto13'

describe('AdventJs - Reto 13 - Calculando el tiempo', () => {
  it('calculateTime should be a function', () => {
    expect(typeof calculateTime === 'function').toBe(true)
  })

  it('calculateTime should receive 1 parameter', () => {
    expect(() => calculateTime()).toThrowError()
  })

  it('If deliveries is empty, the result should be "-07:00:00"', () => {
    expect(calculateTime([])).toBe('-07:00:00')
  })

  it('if the sum of deliveries is less than "07:00:00", return the difference as a negative value', () => {
    expect(calculateTime(['00:00:01'])).toBe('-06:59:59')
    expect(calculateTime(['00:00:01', '00:01:01'])).toBe('-06:58:58')
    expect(calculateTime(['00:00:01', '00:01:01', '01:01:01'])).toBe('-05:57:57')
    expect(calculateTime(['05:00:0', '00:10:0', '00:00:20'])).toBe('-01:49:40')
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe('-02:20:00')
    expect(calculateTime([
      '00:45:00',
      '00:45:00',
      '00:00:30',
      '00:00:30'
    ])).toBe('-05:29:00')
  })

  it('if the sum of deliveries is more than "7:00:00", return the difference as a positive value', () => {
    expect(calculateTime(['08:00:00'])).toBe('01:00:00')
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe('00:30:00')
  })
})
