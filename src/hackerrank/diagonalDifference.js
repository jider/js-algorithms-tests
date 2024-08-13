export function diagonalDifference (arr) {
  let diff = 0
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i][i] - arr[i][arr.length - i - 1]
  }

  return Math.abs(diff)
}
