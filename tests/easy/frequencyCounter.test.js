import { test, expect } from 'vitest'
import { sameFrequency } from '../../src/easy/frequencyCounter'

test('Find out if the two numbers have the same frequency of digits', () => {
  expect(sameFrequency(182, 281)).toBeTruthy() // true
  expect(sameFrequency(34, 14)).toBeFalsy() // false
  expect(sameFrequency(3589578, 5879385)).toBeTruthy() // true
  expect(sameFrequency(22, 222)).toBeFalsy() // false
})
