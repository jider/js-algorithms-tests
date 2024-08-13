export function binarySearch (arr, value) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    if (arr[middle] === value) return middle
    value > arr[middle] ? start = middle + 1 : end = middle - 1
  }
  return arr[start] === value ? start : -1
}
