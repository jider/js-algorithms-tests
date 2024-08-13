/*
Write a function called "findLongestSubstring", which accepts a string and returns the length of the longest substring with all distinct characters.

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
  if (str === '') return 0

  let i = 0
  let longestStr = 0
  const charMap = {}
  for (let j = 0; j < str.length; j++) {
    const char = str[j]
    if (charMap[char]) {
      i = Math.max(i, charMap[char])
    }
    longestStr = Math.max(longestStr, j - i + 1)
    charMap[char] = j + 1
  }

  return longestStr
}
