/*
Write a function called "sumZero" wich accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array that
includes both values that sum to zero or undefined if a pair does not exist
*/
function sumZero (values) {
  // Comprobar que el array tiene valores (al menos 2)
  if (values.length < 2) return undefined

  // Dos punteros, uno al inicio del array y otro al final
  let i = 0
  let j = values.length - 1
  // Recorrer array hasta que i < j
  while (i < j) {
    if (values[i] >= 0) return undefined
    if (values[j] <= 0) return undefined
    // Resto al final el inicio
    const diff = values[i] + values[j]
    // Si es cero => return [values[ini], values[end]]
    if (diff === 0) return [values[i], values[j]]
    // Si diff < 0 => i++
    // Si diff > 0 => j--
    diff < 0 ? i++ : j--
  }

  return undefined
}

console.log(sumZero([0]))
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))
console.log(sumZero([-2, 1, 2, 3]))
console.log(sumZero([-3, -2, -1, 0, 1]))

// expect(sumZero([0])).toStrictEqual(undefined)
// expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3])
// expect(sumZero([-2, 0, 1, 3])).toStrictEqual(undefined)
// expect(sumZero([1, 2, 3])).toStrictEqual(undefined)
// expect(sumZero([-2, 1, 2, 3])).toStrictEqual([-2, 2])
// expect(sumZero([-3, -2, -1, 0, 1])).toStrictEqual([-1, 1])
