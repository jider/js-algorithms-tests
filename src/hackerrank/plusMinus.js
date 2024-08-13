/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.
Calculate the frequency of positive numbers, negative numbers and zeros in the array,
then divide each frequency by the size of the array (n).

Example:
input -> arr = [1, 1, 0, -1, -1]

positive: 2/5 -> 0.4
negative: 2/5 -> 0.4
zeros: 1/5 -> 0.2

output ->
0.400000
0.400000
0.200000
*/

export function plusMinus (arr) {
  // Write your code here
  const result = [0, 0, 0]
  for (const value of arr) {
    if (value > 0) result[0] += 1
    else if (value < 0) result[1] += 1
    else result[2] += 1
  }
  console.log((result[0] / arr.length).toFixed(6))
  console.log((result[1] / arr.length).toFixed(6))
  console.log((result[2] / arr.length).toFixed(6))

  return [
    (result[0] / arr.length).toFixed(6),
    (result[1] / arr.length).toFixed(6),
    (result[2] / arr.length).toFixed(6)
  ]
}
