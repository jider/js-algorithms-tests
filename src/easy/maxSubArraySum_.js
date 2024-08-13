/*
Write a function called "maxSubArraySum" which accpets an array of integers and a number called n.
The function should calculate the maximun sum of n consecutive elements in the array
*/

function maxSubArraySum (values, n) {
  if (values.length < n) return null
  if (n === 1) return Math.max(...values)

  // utilizamos dos punteros, i desde 0 y j desde 1
  let i = 0
  let j = 1
  let sum = values[i]
  let maxSum = -Infinity
  // Recorremos el array de valores mientras que el puntero j + (n-1) sea < al tamaño del array
  while (i + (n - 1) < values.length) {
    // Sumamos los valores de i hasta j, donde j = i + (n-1)
    sum += values[j]
    if (j - i === n - 1) {
      console.log({ i, j, sum, maxSum })
      // Si el valor es mayor al valor previo lo guardamos
      maxSum = Math.max(sum, maxSum)
      // Restamos el valor de i, sumamos el valor de j+1 y comparamos, i++
      sum -= values[i++]
    }
    j++
  }

  return maxSum
}

console.log(maxSubArraySum([], 4))
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubArraySum([4, 2, 1, 6], 1))

/*
expect(maxSubArraySum([], 4)).toStrictEqual(null)
expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
expect(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)).toStrictEqual(17)
expect(maxSubArraySum([4, 2, 1, 6], 1)).toBe(6)
expect(maxSubArraySum([4, 2, 1, 6, 2], 4)).toBe(13)
*/
