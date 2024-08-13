/*
Considera una ciudad donde las calles están distribuidas como una rejilla cuadrara infinita.
En esta ciudad encontrar el camino más corto entre dos puntos  (origen y destino) es más facil que en ciudades más complejas.
Como desarrollador ed Uber tienes la tarea de crear un algoritmo para resolver este cálculo.

Dadas las coordenadas de salida y destino de un usuario, cada una de ellas ubicadas en alguna calle, encuentra la longitud
más corta entre ellos, teniendo en cuenta que los coches solo pueden moverse a través de las calles.
Cada calle se puede representar como una linea recta definida por la fórmula x = n o y = n, donde n es un entero.

Example:
departure = [0.4, 1]
destination = [0.9, 3]

output: solution(departure, destination) = 2.7
0.6 + 2 + 0.1 = 2.7
*/

export function solution (departure, destination) {
  const [oX, oY] = departure
  const [dX, dY] = destination

  if (oX === dX && oY === dY) {
    return 0
  }

  // const crossX = Math.round(oX) !== Math.floor(dX)
  const crossY = Math.round(oY) !== Math.floor(dY)

  // Calcular trayecto por izquierda o derecha
  let resX = +Math.abs(dX - oX).toFixed(1)
  if (crossY) {
    const leftX = Math.abs((oX + dX) - (Math.floor(oX) * 2))
    const rightX = Math.abs((Math.round(dX) * 2) - (oX + dX))
    resX = +Math.min(leftX, rightX).toFixed(1)
  }

  // Calcular trayecto por arriba o abajo
  let resY = 0
  let oUp, dUp, oDown, dDown, midY
  if (oY > dY) {
    oUp = Math.ceil(oY) - oY
    dUp = Math.ceil(oY) - dY
    oDown = oY - Math.floor(dY)
    dDown = dY - Math.floor(dY)
  } else {
    oUp = Math.ceil(dY) - oY
    dUp = Math.ceil(dY) - dY
    oDown = oY - Math.floor(oY)
    dDown = dY - Math.floor(oY)
  }
  if (crossY) {
    midY = Math.abs(dY - oY)
  }
  resY = crossY ? Math.min(oUp + dUp, oDown + dDown, midY) : Math.min(oUp + dUp, oDown + dDown)

  return +(resX + resY).toFixed(1)
}
