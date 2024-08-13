/*
Calcula los pasos máximos que tiene que hacer el objeto en movimiento,
para volver a su punto inicial desde su punto más alejado durante el movimiento
Movements: R (right), L (left), U (up), D (down)
*/

export function maxInstructions (movements) {
  let x = 0
  let y = 0
  let max = 0

  movements.forEach((mov) => {
    if (mov === 'L') x--
    if (mov === 'R') x++
    if (mov === 'U') y++
    if (mov === 'D') y--

    max = Math.max(max, Math.abs(x) + Math.abs(y))
  })

  return max
}
