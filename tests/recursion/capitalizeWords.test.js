import { test, expect } from 'vitest'
import { capitalizeWords } from '../../src/recursion/capitalizeWords'

test('', () => {
  expect(capitalizeWords([])).toStrictEqual([])
  expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toStrictEqual(['I', 'AM', 'LEARNING', 'RECURSION'])
})
