/*
Collect all odd numbers from a list of integers

Input: [1, 2, 3, 4, 5]
Output: [1, 3, 5]
*/

// Helper recursion method approach
export function collectOdds (nums) {
  const odds = []
  function checkOdd (values) {
    const value = values[0]
    if (value === undefined) return
    if (value % 2 !== 0) odds.push(value)
    return checkOdd(values.slice(1))
  }
  checkOdd(nums)

  return odds
}

// Pure recursion approach
export function collectOddsPureRecursion (nums) {
  const odds = []
  const num = nums[0]
  if (num === undefined) return []
  if (num % 2 !== 0) odds.push(num)
  return odds.concat(collectOddsPureRecursion(nums.slice(1)))
}
