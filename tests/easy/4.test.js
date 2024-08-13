import { test, expect } from 'vitest'
import { daysPerDebt, daysPerDebtRec, daysPerDebts, daysPerDebtsRec } from '../../src/easy/4'

test('Days to pay debt', () => {
  expect(daysPerDebt(2)).toBe(2)
  expect(daysPerDebt(3)).toBe(2)
  expect(daysPerDebt(4)).toBe(3)
  expect(daysPerDebt(8)).toBe(4)
  expect(daysPerDebt(15)).toBe(4)
  expect(daysPerDebt(16)).toBe(5)
})

test('Days to pay debt (recursive)', () => {
  expect(daysPerDebtRec(2, 1, 0)).toBe(2)
  expect(daysPerDebtRec(3, 1, 0)).toBe(2)
  expect(daysPerDebtRec(4, 1, 0)).toBe(3)
  expect(daysPerDebtRec(8, 1, 0)).toBe(4)
  expect(daysPerDebtRec(15, 1, 0)).toBe(4)
  expect(daysPerDebtRec(16, 1, 0)).toBe(5)
})

test('Days to pay debts', () => {
  expect(daysPerDebts(
    [1, 2, 3, 4, 8, 15, 16]
  )).toStrictEqual([1, 2, 2, 3, 4, 4, 5])
})

test('Days to pay debts (recursive)', () => {
  expect(daysPerDebtsRec(
    [1, 2, 3, 4, 8, 15, 16]
  )).toStrictEqual([1, 2, 2, 3, 4, 4, 5])
})
