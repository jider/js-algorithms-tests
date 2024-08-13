/*
Implement a function named "countUniqueValues", which accepts a sorted array and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted
*/

// Solution using a Set (not use in an interview test unless the the values in the array are less than 5K)
// export function countUniqueValues (values) {
//   if (values.length === 0) return 0
//   return (new Set(values)).size
// }

// Solution with counter & previous value - O(n)
// export function countUniqueValues (values) {
//   if (values.length === 0) return 0
//   let count = 0
//   let prevValue = ''
//   for (const value of values) {
//     if (value !== prevValue) {
//       count++
//       prevValue = value
//     }
//   }

//   return count
// }

// Solution with 2 pointers, modifying the array of values - O(n)
// Con esta solución nos ahorramos la necesidad de tener un contador
export function countUniqueValues (values) {
  if (values.length === 0) return 0

  let i = 0
  for (let j = 1; j < values.length; j++) {
    if (values[i] !== values[j]) {
      i++
      values[i] = values[j]
    }
  }
  return i + 1
}

// Other solution using "Multiple Pointers" pattern - O(n)
/*
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

  // Para ahorrarnos el contador
  while (j < values.length) {
    if (values[i] !== values[j]) {
      i++
      values[i] = values[j]
    }
    j++
  }
  return i + 1
}
*/
