/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
formed from iceman.
*/
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

console.log(isAnagram('', ''))
console.log(isAnagram('', 'a'))
console.log(isAnagram('aaz', 'zza'))
console.log(isAnagram('anagram', 'nagaram'))

// expect(isAnagram('', '')).toBeTruthy()
// expect(isAnagram('aaz', 'zza')).toBeFalsy()
// expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
// expect(isAnagram('rat', 'car')).toBeFalsy()
// expect(isAnagram('awesome', 'awesom')).toBeFalsy()
// expect(isAnagram('qwerty', 'qeywrt')).toBeTruthy()
// expect(isAnagram('texttwisttime', 'timetwisttext')).toBeTruthy()
// expect(isAnagram('Hola mundo, que tal estás?', 'Que tal estás, Hola mundo?')).toBeTruthy()
