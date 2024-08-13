/*
Números diferentes:
Se te ha pedido realizar un algoritmo de indexación y optimización de almacenamiento en el proceso de inventario.
Siguiendo el principio de Responsabilidad única (SRP), vas a construir una función que tiene como única responsabilidad calcular
la cantidad de números diferentes dentro de una lista dada.

Descripción:
La función recibe la lista de tareas y debe devolver la cantidad de valores únicos que existen.
*/

export function uniqueTasks (tasks) {
  const uniqueNumbers = new Set(tasks)
  return uniqueNumbers.size
}

export function uniqueNumbersDictionary (tasks) {
  const uniqueNumbers = {}
  for (let i = 0; i < tasks.length; i++) {
    uniqueNumbers[tasks[i]] = true
  }
  return Object.keys(uniqueNumbers).length
}
