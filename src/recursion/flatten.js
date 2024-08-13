/*
Write a recursive function called "flatten" which accepts an array of arrays and returns a new array with all values flattened.
*/
export function flatten (values, result = []) {
  if (values.length === 0) return result
  return Array.isArray(values[0])
    ? flatten([...values[0], ...values.slice(1)], result)
    : flatten(values.slice(1), result.concat(values[0]))
}

// Another solution with loop and recursion inside loop
// export function flatten (values) {
//   let newArray = []
//   for (let i = 0; i < values.length; i++) {
//     if (Array.isArray(values[i])) {
//       newArray = newArray.concat(flatten(values[i]))
//     } else {
//       newArray.push(values[i])
//     }
//   }
//   return newArray
// }

// Another solution with a helper function
// export function flatten (values) {
//   const result = [];
//
//   (function flattenRecursion (valuesArr) {
//     if (valuesArr.length === 0) return
//
//     if (Array.isArray(valuesArr[0])) {
//       flattenRecursion([...valuesArr[0], ...valuesArr.slice(1)])
//     } else {
//       result.push(valuesArr[0])
//       flattenRecursion(valuesArr.slice(1))
//     }
//   })(values)
//
//   return result
// }
