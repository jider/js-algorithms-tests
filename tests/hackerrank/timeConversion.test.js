import { expect, it } from 'vitest'
import { timeConversion } from '../../src/hackerrank/timeConversion.js'

it('timeConversion', () => {
  expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  expect(timeConversion('12:01:00AM')).toBe('00:01:00')
  expect(timeConversion('07:20:00PM')).toBe('19:20:00')
  expect(timeConversion('07:20:00AM')).toBe('07:20:00')
})
