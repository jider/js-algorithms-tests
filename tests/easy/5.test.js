import { test, expect } from 'vitest'
import { uniqueTasks, uniqueNumbersDictionary } from '../../src/easy/5'

test('Get the unique tasks from list', () => {
  expect(uniqueTasks([1])).toStrictEqual(1)
  expect(uniqueTasks([1, 1, 1])).toStrictEqual(1)
  expect(uniqueTasks([1, 2, 1])).toStrictEqual(2)
  expect(uniqueTasks([1, 2, 3, 4])).toStrictEqual(4)
  expect(uniqueTasks([1, 2, 3, 4, 1, 2, 3, 4])).toStrictEqual(4)
})

test('Get the unique tasks from list (dictionary)', () => {
  expect(uniqueNumbersDictionary([1])).toStrictEqual(1)
  expect(uniqueNumbersDictionary([1, 1, 1])).toStrictEqual(1)
  expect(uniqueNumbersDictionary([1, 2, 1])).toStrictEqual(2)
  expect(uniqueNumbersDictionary([1, 2, 3, 4])).toStrictEqual(4)
  expect(uniqueNumbersDictionary([1, 2, 3, 4, 1, 2, 3, 4])).toStrictEqual(4)
})
