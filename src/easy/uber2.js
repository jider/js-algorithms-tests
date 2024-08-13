/*
Siendo un nuevo usuario de Uber tienes 20$ de descuento en tu primer trayecto. Quieres sacarle el mayor partidoy conducir el coche más elegante que puedas permitirte,
gastarte dinero propio. Hay 5 opciones de menos a más caro:
"UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV".

Conoces la longitud "l" de tu trayecto en millas y cuanto cuesta 1 milla para cada coche.
Encuentra el mejor coche que te puedes permitir.

Example:
l = 30
fares = [0.3, 0.5, 0.7, 1, 1.3]
output: solution(l, fares) = "UberXL"
El coste del trayecto en este coche sería de 15$, el cual te puedes permitir, pero "UberPlus" costaría 21$, el cual es demasiado para tí.
*/

export function solution (l, fares) {
  const UBER_LIST = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV']
  const INITIAL_DISCOUNT = 20
  // Solución buscando desde el final de array
  // return UBER_LIST[fares.findLastIndex(fare => fare * l <= INITIAL_DISCOUNT)]

  // Solución buscando el primer Uber que no me pueda permitir y cogiendo el anterior
  const idx = fares.findIndex(fare => fare * l > INITIAL_DISCOUNT)
  return idx < 0 ? UBER_LIST.at(-1) : UBER_LIST[idx - 1]
}
