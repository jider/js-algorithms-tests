import { test, expect } from 'vitest'
import { reverse } from '../../src/recursion/reverse'

test('returns a new string in reverse', () => {
  expect(reverse('')).toBe('')
  expect(reverse('awesome')).toBe('emosewa')
  expect(reverse('rithmschool')).toBe('loohcsmhtir')
})
