/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example:
arr = [1, 2, 3, 4, 3, 2, 1]
result -> 4
 */

export function lonelyInteger (a) {
  // Write your code here
  const checkedValues = new Set()

  for (const value of a) {
    checkedValues.has(value)
      ? checkedValues.delete(value)
      : checkedValues.add(value)
    console.log(value, [...checkedValues])
  }

  return [...checkedValues][0]
}
