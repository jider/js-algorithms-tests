/*
Calcula la suma de todos los valores previos al valor dado.
Si el valor dado es 6 la solución sería -> 1 + 2 + 3 + 4 + 5 + 6 = 21
*/

export function addUpToN (n) {
  return n * (n + 1) / 2
  // let sum = 0
  // for (let i = 1; i <= n; i++) {
  //   sum += i
  // }
  // return sum
}
