import { describe, expect, it } from 'vitest'
import { matchingStrings } from '../../src/hackerrank/sparseArrays.js'

describe('Sparse Arrays', () => {
  it('', () => {
    expect(matchingStrings(
      ['ab', 'ab', 'abc'],
      ['ab', 'abc', 'bc']
    )).toEqual([2, 1, 0])

    expect(matchingStrings(
      ['aba', 'baba', 'aba', 'xzxb'],
      ['aba', 'xzxb', 'ab']
    )).toEqual([2, 1, 0])
  })
})
