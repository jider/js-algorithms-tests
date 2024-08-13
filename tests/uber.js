import { test, expect } from 'vitest'
import { solution } from '../uber'

test('Fare Estimations', () => {
  /*
  ride_time = 30
  ride_distance = 7
  cost_per_minute = [0.2, 0.35, 0.4, 0.45]
  coste_per_mile = [1.1, 1.8, 2.3, 3.5]

  output: solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38]
  */
  expect(
    solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])
  ).toStrictEqual([13.7, 23.1, 28.1, 38])
})
