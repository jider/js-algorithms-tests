import { test, expect } from 'vitest'
import { fib } from '../../src/recursion/fib'

test('accepts a number and returns the nth number in the Fibonacci sequence', () => {
  expect(fib(4)).toBe(3)
  expect(fib(10)).toBe(55)
  expect(fib(28)).toBe(317811)
  expect(fib(35)).toBe(9227465)
})
