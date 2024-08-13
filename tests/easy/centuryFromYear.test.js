import { test, expect } from 'vitest'
import { centuryFromYear } from '../../src/easy/centuryFromYear'

test('Get the century from the year', () => {
  expect(centuryFromYear(1492)).toBe(15)
  expect(centuryFromYear(1700)).toBe(17)
  expect(centuryFromYear(1980)).toBe(20)
  expect(centuryFromYear(2001)).toBe(21)
  expect(centuryFromYear(2099)).toBe(21)
})
