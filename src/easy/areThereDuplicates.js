/*
Implement a function called "areThereDuplicates" which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

// Solution using frequency counters
export function areThereDuplicates (...args) {
  if (args.length <= 1) return false

  const values = {}
  for (const arg of args) {
    if (values[arg]) {
      return true
    }
    values[arg] = true
  }

  return false
}

// Solution using multiple pointers
// export function areThereDuplicates (...args) {
//   if (args.length <= 1) return false
//
//   const middle = Math.ceil(args.length / 2)
//
//   for (let i = 0; i < middle; i += 1) {
//     for (let j = args.length - 1; j >= middle; j -= 1) {
//       if (args[i] === args[j]) return true
//     }
//   }
//
//   return false
// }
