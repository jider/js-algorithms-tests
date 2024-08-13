/*
Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing each word capitalized.
*/
export function capitalizeWords (words, idx = 0) {
  if (idx === words.length) return words
  words[idx] = words[idx].toUpperCase()
  return capitalizeWords(words, idx + 1)
}

console.log(capitalizeWords([]))
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))
