/*
Tenemos una archivo corrupto que contiene las estimaciones de tareas asignadas a diferentes equipos y persona, pero que no ha podido ser recuperado.
El empleado encargado del archivo, entregaba semanalmente un informe por equipo, con la cantidad de tareas del equipo, el promedio aritmético de las
estimaciones de las tareas en horas y la duración de la tarea con menor valor estimado.

Necesitamos saber ¿cual es la duración máxima que puede tener una de las tareas?

Descripción:
La función recibe la lista de equipos con 3 valores (N, R, T) y debe devolver una lista representando la duración máxima de las tareas de cada equipo
equipoL[i][0] = (N) El num. de tareas asignadas al equipo i
equipoL[i][1] = (T) El num. de horas promedio de las tareas en el equipo i
equipoL[i][2] = (R) La duración en horas de la tarea más pequeña en el equipo i
*/

// const teamsList = [
//   [2, 2, 1],
//   [20, 300, 1],
//   [30, 500, 2]
// ]

export function maxTaskDurationPerTeam (teamList) {
  return teamList.map(team => maxTaskDuration(team))
}

// Output: [duration, duration, duration, ...]
export function maxTaskDuration (teamEstimations) { // [3, 2, 1]
  const [tasks, taskAvg, minTaskDuration] = teamEstimations
  const totalDuration = tasks * taskAvg // 3t * 2h => 6h
  const minimunDuration = minTaskDuration * (tasks - 1) // 1h * (3-1) => 1h * 2 = 2h
  return totalDuration - minimunDuration // 6h - 2h => 4h
}
