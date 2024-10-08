/*
Write a function called "averagePair". Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair (sortedValues, avgValue) {
  if (sortedValues.length < 2) return false

  // Utilizamos dos punteros, i=0 y j=sortedValues.length
  let i = 0
  let j = sortedValues.length - 1
  // Recorremos el array
  while (i < j) {
    const calculatedAvg = (sortedValues[i] + sortedValues[j]) / 2
    // Si avg === avgValue -> return true
    if (calculatedAvg === avgValue) return true
    // Si la media calculada es menor -> i++
    // Si la media calculada es mayor -> j--
    calculatedAvg > avgValue ? j-- : i++
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
console.log(averagePair([4], 4)) // false
console.log(averagePair([4, 4], 4)) // true
