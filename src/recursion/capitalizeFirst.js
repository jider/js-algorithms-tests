/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

// export function capitalizeFirst (arr) {
//   let result = []

//   function helper (word) {
//     console.log(word)
//     if (!word || word === '') return
//     helper(arr.pop())
//     result = result.concat(`${word[0].toUpperCase()}${word.slice(1)}`)
//   }
//   helper(arr.pop())

//   return result
// }

export function capitalizeFirst (arr, result = []) {
  if (arr.length === 0) return result
  const capitalizedWord = `${arr.at(0).at(0).toUpperCase()}${arr.at(0).length > 0 ? arr.at(0).slice(1) : ''}`
  return capitalizeFirst(arr.slice(1), result.concat(capitalizedWord))
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])) // ['Car','Taco','Banana']
