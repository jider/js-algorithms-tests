/*
Un empleado es muy perfeccionista, le gusta revisar y perfeccionar reescribiendo parte de su trabajo todos los días.
Cada día es capaz de reescribir F cantidfad de funciones, pero su impulso le lleva a eliminar R cantidad de funciones todos los días.
Se espera que el empoleado pueda entregar una cantidad T de funciones en un plazo D.

Calcula si el empleado puede o no cumplir con las tareas indicadas.
True -> lo logra
False -> no lo logra

F -> Cantidad de funciones nuevas
R -> Cantidad de funciones que borra el empleado al finalizar su trabajo
D -> Número de días de plazo de entrega
T -> Cantidad total de funciones que se espera del empleado
*/

export function workLoad (days, totalFunc, newFunc, remFunc) {
  // const funcsPerDay = Math.round(totalFunc / days)
  const employeeWorkPerDay = newFunc - remFunc
  const totalFuncDone = employeeWorkPerDay * days

  // return employeeWorkPerDay >= funcsPerDay;
  return totalFuncDone >= totalFunc
}
