/*
Uber ista creadon un "Fare estimator" que pueda decirte cuanto va a costar el trayecto antes de pedirlo.
Funciona pasndo una distancia aproximada y el tiempo de trayecto utilizando esta fórmula:
(cost per minute) * (ride time) + (cost per mile) * (ride distance)
donde (cost per minute) y (cost per mile) dependen del tipo de coche

Conociendo el coste por minuto y coste por milla por cada tipo de coche, además de la distancia y el tiempo de trayecto,
devuelve las estimaciones de tarifa (fare estimates) para todos los coches.

Example:
ride_time = 30
ride_distance = 7
cost_per_minute = [0.2, 0.35, 0.4, 0.45]
coste_per_mile = [1.1, 1.8, 2.3, 3.5]

output: solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]

*/

export function solution (rideTime, rideDistance, costPerMinute, costPerMile) {
  return costPerMinute.map((cost, idx) => Number(((cost * rideTime) + (costPerMile[idx] * rideDistance)).toFixed(1)))
}
