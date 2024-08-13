/*
Write a function called "same", which accepts two arrays.
The fucntion should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

function same (values, squaredValues) {
  if (values.length !== squaredValues.length) return false

  const valueSquared = new Map()
  for (const val of values) {
    const square = val * val
    valueSquared.set(square, valueSquared.get(square) + 1 || 1)
  }
  for (const val of squaredValues) {
    if (!valueSquared.has(val)) return false
    if (valueSquared.get(val) === 1) valueSquared.delete(val)
    else valueSquared.set(val, valueSquared.get(val) - 1)
  }
  return true
}

console.log(same([1, 2, 3, 3], [9, 1, 4, 9]))
