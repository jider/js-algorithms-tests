/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
formed from iceman.
*/

// Check if the second string is an anagram of the fist string - O(n)
export function isAnagram (value1, value2) {
  if (value1.length !== value2.length) return false

  const origMap = {}
  const destMap = {}
  for (let i = 0; i < value1.length; i++) {
    const origChar = value1[i].toLowerCase()
    const destChar = value2[i].toLowerCase()
    origMap[origChar] = (origMap[origChar] || 0) + 1
    destMap[destChar] = (destMap[destChar] || 0) + 1
  }

  return Object.entries(origMap).every(([key, value]) => destMap[key] && destMap[key] === value)
}

// Other solution using "Frequency Counter" pattern - O(n)
/*
function isAnagram (str1, str2) {
  if (str1.length !== str2.length) return false

  const characterCount = {}
  for (const char of str1) {
    characterCount[char] = ++characterCount[char] || 1
  }

  for (const char of str2) {
    console.log(characterCount, char)
    if (!characterCount[char]) return false
    if (characterCount[char] === 1) delete characterCount[char]
    else characterCount[char]--
  }

  return true
}
*/
