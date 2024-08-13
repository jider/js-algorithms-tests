/*
Implement a function named "countUniqueValues", which accepts a sorted array and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted
*/
function countUniqueValues (values) {
  // Si el array está vacio o solo tiene un elemento, devolvemos le length ??
  if (values.length < 2) return values.length

  // Utilizar dos punteros y un contador: i = 0, j = 1, contador = 0
  let i = 0
  let j = 1
  let counter = 1
  // Recorrer el array hasta el final del array
  while (j < values.length) {
    // Si el valor de i es igual al valor de j => j++
    if (values[i] !== values[j]) {
      i = j
      counter++
    }
    j++
  }

  // Si el valor de i es distinto del valor de j => contador++, i = j, j++
  return counter
}

console.log(countUniqueValues([]))
console.log(countUniqueValues([1]))
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

/*
  expect(countUniqueValues([])).toBe(0)
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7)
*/
