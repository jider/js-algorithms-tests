/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: Time: O(N)
*/

// Solution using 'Frequency Counter' pattern
export function sameFrequency (num1, num2) {
  const value1 = `${ num1 }`
  const value2 = `${ num2 }`

  if (value1.length !== value2.length) return false

  const value1Map = {}
  const value2Map = {}
  for (let i = 0; i < value1.length; i++) {
    const v1 = value1[i]
    const v2 = value2[i]
    value1Map[v1] = (value1Map[v1] || 0) + 1
    value2Map[v2] = (value2Map[v2] || 0) + 1
  }

  return Object.entries(value1Map).every(([key, value]) => value2Map[key] === value)
}

// Another solution using 'Frequency Counter' pattern
// export function sameFrequency (num1, num2) {
//   const value1 = `${ num1 }`
//   const value2 = `${ num2 }`
//
//   if (value1.length !== value2.length) return false
//
//   const valueMap = {}
//   for (let i of value1) {
//     valueMap[i] = ++valueMap[i] || 1
//   }
//   for (let i of value2) {
//     if (valueMap[i]) {
//       valueMap[i]--
//       if (valueMap[i] === 0) { delete valueMap[i] }
//     }
//   }
//
//   return Object.keys(valueMap).length === 0
// }
