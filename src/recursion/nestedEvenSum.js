/*
Write a recursive function called nestedEvenSum.
Return the sum of all even numbers in an object which may contain nested objects.

*/
export function nestedEvenSum (obj, sum = 0) {
  if (Object.keys(obj).length === 0) return sum

  const value = Object.values(obj)[0]
  delete obj[Object.keys(obj)[0]]

  if (typeof value === 'object') {
    // return nestedEvenSum({ ...value, ...obj }, sum)
    return nestedEvenSum(Object.assign({}, value, obj), sum)
  } else {
    if (Number.isInteger(value) && value % 2 === 0) sum += value
    return nestedEvenSum(obj, sum)
  }
}

// Another solution using a nested loop
// function nestedEvenSum (obj, sum = 0) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//       sum += nestedEvenSum(obj[key])
//     } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//       sum += obj[key]
//     }
//   }
//   return sum
// }

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup'
    }
  }
}
console.log(nestedEvenSum(obj1)) // 6

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
}
console.log(nestedEvenSum(obj2)) // 10
