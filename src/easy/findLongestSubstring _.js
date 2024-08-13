/*
Write a function called "findLongestSubstring", which accepts a string and returns the length
of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

export function findLongestSubstring (str) {
  if (str.length < 2) return str.length

  // Vamos a utilizar dos punteros, variable longestString y un diccionario {char: idx}
  let i = 0
  let longest = 0
  const chars = {}
  // Recorremos el string de inicio mientras i < str.length - longestString
  for (let j = 0; j < str.length; j++) {
    const char = str[j]
    console.log(str.substring(i, j))
    // Comparamos el nuevo character con el diccionario
    if (chars[char] && chars[char] > i) {
      i = chars[char]
      console.log({ char, longest, i, iChar: str[i] })
    }
    longest = Math.max(longest, j - i + 1)
    chars[char] = j + 1
  }
  return longest
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
