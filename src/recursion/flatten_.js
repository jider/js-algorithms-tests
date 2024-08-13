/*
Write a recursive function called "flatten" which accepts an array of arrays and returns a new array with all values flattened.
*/

export function flatten (values, result = []) {
  if (values.length === 0) return result
  return Array.isArray(values[0])
    ? flatten([...values[0], ...values.slice(1)], result)
    : flatten(values.slice(1), result.concat(values[0]))
}

console.log(flatten([1, 2, 3, 4, 5]))
console.log(flatten([1, 2, 3, [4, 5]]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1], [2], [3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
