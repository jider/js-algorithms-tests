import { test, expect } from 'vitest'
import { isAnagram } from '../../src/easy/anagram'

test('Second string is an anagram of the first string', () => {
  expect(isAnagram('', '')).toBeTruthy()
  expect(isAnagram('aaz', 'zza')).toBeFalsy()
  expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
  expect(isAnagram('rat', 'car')).toBeFalsy()
  expect(isAnagram('awesome', 'awesom')).toBeFalsy()
  expect(isAnagram('qwerty', 'qeywrt')).toBeTruthy()
  expect(isAnagram('texttwisttime', 'timetwisttext')).toBeTruthy()
  expect(isAnagram('Hola mundo, que tal estás?', 'Que tal estás, Hola mundo?')).toBeTruthy()
})
